// (Zod validation schemas)
import * as z from "zod";

export const authSchema = z.object({
    firstName: z.string().min(3, "Required"),
    lastName: z.string().min(3, "Required"),
    emailAddress: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(10, "Invalid phone number"),
    phoneOTP: z.string().min(4, {
        message: "Your one-time password must be 4 characters.",
      }),
    emailOTP: z.string().min(4, {
        message: "Your one-time password must be 4 characters.",
      }),
});
