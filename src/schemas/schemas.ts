import { z } from "zod/v4";

export const RegisterUserForm = z.object({
  username: z.string().min(5).max(15),
  password: z.string().min(5).max(15),
});

export type RegisterUserForm = z.infer<typeof RegisterUserForm>;
