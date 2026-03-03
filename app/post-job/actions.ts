"use server"

import { db } from "@/db"
import { jobs } from "@/db/schema"
import { jobFormSchema, type JobFormValues } from "@/utils/jobFormSchema"

interface SubmitJobResult {
  success: boolean
  message: string
}

export async function submitJob(
  values: JobFormValues
): Promise<SubmitJobResult> {
  const parsed = jobFormSchema.safeParse(values)

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]
    return {
      success: false,
      message: firstError?.message ?? "Invalid job details.",
    }
  }

  try {
    const data = parsed.data

    await db.insert(jobs).values({
      title: data.title,
      description: data.description,
      link: data.link,
      salary: data.salary,
      company: data.company,
      location: data.location,
      location_type: data.location_type,
      type: data.type,
      category: data.category,
      tags: data.tags,
      experience_min: data.experience_min,
      experience_max: data.experience_max,
      is_active: true,
    })

    return { success: true, message: "Job submitted successfully!" }
  } catch (error) {
    console.error("Error posting job:", error)
    return { success: false, message: "Failed to submit job." }
  }
}
