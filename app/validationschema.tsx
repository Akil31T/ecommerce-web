import { z } from "zod";

export const loginValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one letter and one number"
    ),
});

export const registerValidationSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  // gender: z.enum(["Male", "Female", "Other"], {
  //   required_error: "Select gender",
  //   invalid_type_error: "Invalid gender value",
  // }),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})