// (Zod validation schemas)
import * as z from "zod"; // For form validation

export const authSchema = z.object({
  firstName: z.string().min(1, "This field is required").min(3, "Username must be at least 3 characters"),
  lastName: z.string().min(1, "This field is required").min(3, "Username must be at least 3 characters"),
  phoneNumber: z.string().min(1, "This field is required").min(9, "Invalid phone number"),
  emailAddress: z.string().min(1, "This field is required").email("Invalid email address"),
  password: z.string().min(1, "This field is required").min(8, "Password must be at least 8 characters"),
  passwordConfirm: z.string()
  // phoneOTP: z.string().min(1, "This field is required").min(4, {
  //   message: "Your one-time password must be 4 characters.",
  //   }),
  // emailOTP: z.string().min(1, "This field is required").min(4, {
  //   message: "Your one-time password must be 4 characters.",
  //   }),
}).refine(data => data.password === data.passwordConfirm, {
  message: "Passwords must match",
  path: ["passwordConfirm"],
});
