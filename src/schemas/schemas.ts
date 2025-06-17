import { z } from "zod/v4";

export const RegisterUserSchema = z.object({
  firstName: z.string().min(5, "First name too small").max(10),
  lastName: z.string().min(5).max(10),
  username: z
    .string()
    .min(5, "Username too small")
    .max(15, "Username too small"),
  password: z.string().min(5).max(15),
  confirmPassword: z.string().min(5).max(15),
});

export type RegisterUser = z.infer<typeof RegisterUserSchema>;
