import { mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";

type HttpMethod = "get" | "post" | "put" | "patch" | "delete" | "options" | "head";

type OpenAPI = {
  openapi?: string;
  swagger?: string;
  info?: unknown;
  servers?: Array<{ url: string }>;
  paths: Record<string, Record<string, any>>;
  components?: Record<string, any>;
};

const SPEC_PATH = path.resolve(process.cwd(), "OpenAPI/carmensoftware_openapi.json");
const OUT_DIR = path.resolve(process.cwd(), "src/routes/generated");

const ensureDir = async (dirPath: string) => {
  await mkdir(dirPath, { recursive: true });
};

const readSpec = async (): Promise<OpenAPI> => {
  const file = Bun.file(SPEC_PATH);
  if (!(await file.exists())) {
    throw new Error(`OpenAPI spec not found at: ${SPEC_PATH}`);
  }
  return (await file.json()) as OpenAPI;
};

const httpMethods: HttpMethod[] = [
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "options",
  "head",
];

const sanitizeSegmentForFile = (segment: string): string => {
  if (!segment) return "index";
  // Convert {id} -> [id]
  const dynamic = segment.replace(/^\{(.+?)\}$/g, "[$1]");
  // Replace invalid filename chars
  return dynamic.replace(/[^a-zA-Z0-9_\-\[\]]/g, "-");
};

const openapiPathToFilePath = (canonicalOpenApiPath: string): { dir: string; importPath: string } => {
  const clean = canonicalOpenApiPath.replace(/\/+$/, "");
  const trimmed = clean.startsWith("/") ? clean.slice(1) : clean;
  const segments = trimmed.length > 0 ? trimmed.split("/") : ["index"];
  const fileSegments = segments.map(sanitizeSegmentForFile);
  const dir = path.join(OUT_DIR, ...fileSegments);
  const importPath = `./${fileSegments.join("/")}/index`;
  return { dir, importPath };
};

type CanonicalizeResult = { elysiaPath: string; canonicalOpenApiPath: string };

const canonicalizePath = (
  openapiPath: string,
  paramNameByLocation: Map<string, string>
): CanonicalizeResult => {
  const clean = openapiPath.replace(/\/+$/, "");
  const trimmed = clean.length && clean[0] === "/" ? clean.slice(1) : clean;
  const segments = trimmed ? trimmed.split("/") : [];

  const elysiaSegments: string[] = [];
  const canonicalOpenApiSegments: string[] = [];
  const shapeSegments: string[] = [];

  for (const seg of segments) {
    const m = seg.match(/^\{(.+?)\}$/);
    if (!m) {
      elysiaSegments.push(seg);
      canonicalOpenApiSegments.push(seg);
      shapeSegments.push(seg);
      continue;
    }

    const originalName = m[1];
    const prefixShape = "/" + shapeSegments.join("/");
    const locationKey = (prefixShape.endsWith("/") ? prefixShape : prefixShape + "/") + "{}";

    let canonicalName = paramNameByLocation.get(locationKey);
    if (!canonicalName) {
      canonicalName = originalName || "param" + (shapeSegments.filter((s) => s === "{}").length + 1);
      paramNameByLocation.set(locationKey, canonicalName);
    }

    elysiaSegments.push(`:${canonicalName}`);
    canonicalOpenApiSegments.push(`{${canonicalName}}`);
    shapeSegments.push("{}");
  }

  return {
    elysiaPath: "/" + elysiaSegments.join("/"),
    canonicalOpenApiPath: "/" + canonicalOpenApiSegments.join("/"),
  };
};

const pickPreferredResponse = (responses: Record<string, any> | undefined): any => {
  if (!responses) return undefined;
  const preferred = ["200", "201", "202", "204", "default"];
  for (const code of preferred) {
    if (responses[code]) return responses[code];
  }
  // Fallback to first key
  const firstKey = Object.keys(responses)[0];
  return firstKey ? responses[firstKey] : undefined;
};

const pickJsonContent = (response: any): { schema?: any; example?: any } | undefined => {
  if (!response || !response.content) return undefined;
  const content = response.content;
  const mime =
    content["application/json"] ||
    content["application/problem+json"] ||
    content["application/*+json"] ||
    // pick first content if json-like not present
    content[Object.keys(content)[0]];
  if (!mime) return undefined;
  const schema = mime.schema;
  const example =
    mime.example ??
    (mime.examples
      ? ((): any => {
          const values = Object.values(mime.examples as Record<string, any>);
          const first = values[0];
          return first && typeof first === "object" ? first.value : undefined;
        })()
      : undefined);
  return { schema, example };
};

const generateMockFromSchema = (schema: any, depth = 0): any => {
  if (!schema || depth > 4) return null;
  // Handle $ref by naive last-part placeholder
  if (schema.$ref) {
    return { $ref: schema.$ref.split("/").pop() };
  }

  if (schema.example !== undefined) return schema.example;
  if (schema.default !== undefined) return schema.default;
  if (schema.enum) return schema.enum[0];

  const type: string | undefined = schema.type;
  if (!type && schema.properties) {
    // Assume object
    const result: Record<string, unknown> = {};
    for (const [key, subschema] of Object.entries<any>(schema.properties)) {
      result[key] = generateMockFromSchema(subschema, depth + 1);
    }
    return result;
  }

  switch (type) {
    case "string": {
      if (schema.format === "date" || schema.format === "date-time") {
        return new Date().toISOString();
      }
      if (schema.pattern) return "string";
      return schema.title ?? schema.description ?? "string";
    }
    case "integer":
    case "number":
      return 0;
    case "boolean":
      return false;
    case "array": {
      const itemSchema = schema.items ?? {};
      return [generateMockFromSchema(itemSchema, depth + 1)];
    }
    case "object": {
      const result: Record<string, unknown> = {};
      if (schema.properties) {
        for (const [key, subschema] of Object.entries<any>(schema.properties)) {
          result[key] = generateMockFromSchema(subschema, depth + 1);
        }
      }
      return result;
    }
    default: {
      if (schema.oneOf || schema.anyOf) {
        const first = (schema.oneOf ?? schema.anyOf)[0];
        return generateMockFromSchema(first, depth + 1);
      }
      if (schema.allOf) {
        // merge naive
        return schema.allOf.reduce((acc: any, part: any) => {
          const v = generateMockFromSchema(part, depth + 1);
          if (typeof v === "object" && v) Object.assign(acc, v);
          return acc;
        }, {});
      }
      return null;
    }
  }
};

const methodToHandlerLine = (
  method: HttpMethod,
  routePath: string,
  mock: any
): string => {
  const json = JSON.stringify(mock ?? null, null, 2).replace(/\\/g, "\\\\");
  return `  .${method}("${routePath}", ({ params, query, body, headers }) => (${json}))`;
};

const emitRouteFile = async (
  fileDir: string,
  operations: Array<{ method: HttpMethod; mock: any; path: string }>
) => {
  const codeLines: string[] = [];
  codeLines.push(`import type { Elysia } from "elysia";`);
  codeLines.push("");
  codeLines.push(`const register = (app: Elysia) =>`);
  codeLines.push(`  app`);
  for (const op of operations) {
    codeLines.push(methodToHandlerLine(op.method, op.path, op.mock));
  }
  codeLines.push(`;`);
  codeLines.push("");
  codeLines.push(`export default register;`);

  await ensureDir(fileDir);
  await writeFile(path.join(fileDir, "index.ts"), codeLines.join("\n"), "utf8");
};

const emitAggregator = async (imports: string[]) => {
  const lines: string[] = [];
  lines.push(`import type { Elysia } from "elysia";`);
  imports.forEach((imp, idx) => {
    lines.push(`import r${idx} from "${imp}";`);
  });
  lines.push("");
  lines.push(`export const applyGeneratedRoutes = (app: Elysia) => {`);
  imports.forEach((_, idx) => {
    lines.push(`  app.use(r${idx});`);
  });
  lines.push(`  return app;`);
  lines.push(`};`);
  lines.push("");
  lines.push(`export default applyGeneratedRoutes;`);

  await ensureDir(OUT_DIR);
  await writeFile(path.join(OUT_DIR, "index.ts"), lines.join("\n"), "utf8");
};

const main = async () => {
  const spec = await readSpec();

  // Clean output to avoid stale/duplicated files
  await rm(OUT_DIR, { recursive: true, force: true }).catch(() => {});

  const pathEntries = Object.entries(spec.paths ?? {});
  if (pathEntries.length === 0) {
    console.warn("No paths found in OpenAPI spec.")
    await ensureDir(OUT_DIR);
    await emitAggregator([]);
    return;
  }

  const paramNameByLocation = new Map<string, string>();
  const opsByPath = new Map<string, Map<HttpMethod, { method: HttpMethod; mock: any; path: string }>>();
  const canonicalOpenApiByElysiaPath = new Map<string, string>();

  for (const [rawPath, pathItem] of pathEntries) {
    const methodsAvailable = httpMethods.filter((m) => pathItem[m]);
    if (methodsAvailable.length === 0) continue;

    const { elysiaPath, canonicalOpenApiPath } = canonicalizePath(rawPath, paramNameByLocation);
    canonicalOpenApiByElysiaPath.set(elysiaPath, canonicalOpenApiPath);

    let methodMap = opsByPath.get(elysiaPath);
    if (!methodMap) {
      methodMap = new Map();
      opsByPath.set(elysiaPath, methodMap);
    }

    for (const method of methodsAvailable) {
      if (methodMap.has(method)) continue; // avoid duplicates
      const op = pathItem[method];
      const preferredResponse = pickPreferredResponse(op?.responses);
      const jsonContent = pickJsonContent(preferredResponse);
      const mock = jsonContent?.example ?? generateMockFromSchema(jsonContent?.schema);
      methodMap.set(method, { method, mock, path: elysiaPath });
    }
  }

  const imports: string[] = [];
  for (const [elysiaPath, methodMap] of opsByPath.entries()) {
    const canonicalOpenApiPath = canonicalOpenApiByElysiaPath.get(elysiaPath)!;
    const { dir, importPath } = openapiPathToFilePath(canonicalOpenApiPath);
    await emitRouteFile(dir, Array.from(methodMap.values()));
    imports.push(importPath);
  }

  await emitAggregator(imports);
  console.log(`Generated ${imports.length} route files into ${OUT_DIR}`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


