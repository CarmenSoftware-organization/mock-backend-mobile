export const readJson = async <T>(relativePathFromModule: string, importMetaUrl: string): Promise<T> => {
	const fileUrl = new URL(relativePathFromModule, importMetaUrl);
	const file = Bun.file(fileUrl);
	const text = await file.text();
	return JSON.parse(text) as T;
};

export const writeJson = async <T>(relativePathFromModule: string, data: T, importMetaUrl: string): Promise<void> => {
	const fileUrl = new URL(relativePathFromModule, importMetaUrl);
	await Bun.write(fileUrl, JSON.stringify(data, null, 2));
};
