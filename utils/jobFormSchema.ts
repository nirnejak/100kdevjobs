import * as z from "zod"

export const jobFormSchema = z
  .object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    description: z
      .string()
      .min(50, "Description must be at least 50 characters"),
    link: z.string().url("Must be a valid URL"),
    salary: z.number().min(100000, "Salary must be at least $100,000"),
    company: z.string().min(2, "Company name must be at least 2 characters"),
    location: z.string().min(2, "Location must be at least 2 characters"),
    location_type: z.enum(["on-site", "remote", "hybrid"]),
    type: z.enum([
      "full-time",
      "part-time",
      "contractor",
      "internship",
      "freelance",
      "volunteer",
    ]),
    category: z.string().min(2, "Category must be at least 2 characters"),
    tags: z.array(z.string()).optional(),
    experience_min: z.number().min(0).max(20),
    experience_max: z.number().min(0).max(20),
  })
  .refine((data) => data.experience_max >= data.experience_min, {
    message: "Maximum experience must be greater than or equal to minimum.",
    path: ["experience_max"],
  })

export type JobFormValues = z.infer<typeof jobFormSchema>
