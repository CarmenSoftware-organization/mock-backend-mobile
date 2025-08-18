import { Elysia, t } from "elysia";
import { readJson, writeJson } from "../utils/fileDb";
import type { User, CreateUserInput, UpdateUserInput } from "../types/user";

const DATA_PATH = "../data/users.json";

const readUsers = async (): Promise<User[]> => {
	return readJson<User[]>(DATA_PATH, import.meta.url);
};

const writeUsers = async (users: User[]): Promise<void> => {
	await writeJson<User[]>(DATA_PATH, users, import.meta.url);
};

export const usersRoutes = new Elysia({ prefix: "/users" })
	.get("/", async () => {
		const users = await readUsers();
		return { users };
	})
	.get(
		"/:id",
		{
			params: t.Object({ id: t.String({ pattern: "^[0-9]+$" }) }),
		},
		async ({ params }: { params: { id: string } }) => {
			const id = parseInt(params.id);
			const users = await readUsers();
			const user = users.find((u) => u.id === id);
			if (!user) throw new Error("User not found");
			return user;
		}
	)
	.post(
		"/",
		{
			body: t.Object({
				name: t.String({ minLength: 2 }),
				email: t.String({ format: "email" }),
			}),
		},
		async ({ body }: { body: CreateUserInput }) => {
			const users = await readUsers();
			const nextId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
			const newUser: User = {
				id: nextId,
				name: body.name,
				email: body.email,
				createdAt: new Date().toISOString(),
			};
			await writeUsers([...users, newUser]);
			return { message: "User created successfully", user: newUser };
		}
	)
	.put(
		"/:id",
		{
			params: t.Object({ id: t.String({ pattern: "^[0-9]+$" }) }),
			body: t.Object({
				name: t.Optional(t.String({ minLength: 2 })),
				email: t.Optional(t.String({ format: "email" })),
			}),
		},
		async ({ params, body }: { params: { id: string }; body: UpdateUserInput }) => {
			const id = parseInt(params.id);
			const users = await readUsers();
			const index = users.findIndex((u) => u.id === id);
			if (index === -1) throw new Error("User not found");
			const updated: User = {
				...users[index],
				...(body.name ? { name: body.name } : {}),
				...(body.email ? { email: body.email } : {}),
				updatedAt: new Date().toISOString(),
			};
			users[index] = updated;
			await writeUsers(users);
			return { message: "User updated successfully", user: updated };
		}
	)
	.delete(
		"/:id",
		{
			params: t.Object({ id: t.String({ pattern: "^[0-9]+$" }) }),
		},
		async ({ params }: { params: { id: string } }) => {
			const id = parseInt(params.id);
			const users = await readUsers();
			const exists = users.some((u) => u.id === id);
			if (!exists) throw new Error("User not found");
			await writeUsers(users.filter((u) => u.id !== id));
			return { message: "User deleted successfully", id };
		}
	);
