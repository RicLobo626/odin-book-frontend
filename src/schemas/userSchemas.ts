import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  fullName: z.string().min(1),
  createdAt: z.date(),
  email: z.string().min(1, "Email is required").email("This email isn't valid"),
});

const passwordMin = 5;
const passwordMax = 50;

export const newUserSchema = userSchema
  .pick({
    email: true,
  })
  .extend({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(
        passwordMin,
        `Password must be at least ${passwordMin.toString()} characters`,
      )
      .max(
        passwordMax,
        `Password cannot exceed ${passwordMax.toString()} characters`,
      ),
  });

export const publicUserSchema = userSchema.omit({
  email: true,
});
