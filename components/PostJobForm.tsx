"use client"
import * as React from "react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"

const jobFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(50, "Description must be at least 50 characters"),
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

type JobFormValues = z.infer<typeof jobFormSchema>

const PostJobForm: React.FC = () => {
  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      tags: [],
      experience_min: 0,
      experience_max: 5,
    },
  })

  const onSubmit = async (data: JobFormValues) => {
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to submit job")
      }

      toast.success("Job submitted successfully!")
      form.reset()
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit job. Please try again."
      )
      console.error(error)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Job Title
          </label>
          <input
            id="title"
            type="text"
            {...form.register("title")}
            className="w-full text-sm px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Senior Software Engineer"
          />
          {form.formState.errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Job Description
          </label>
          <textarea
            id="description"
            {...form.register("description")}
            className="w-full text-sm px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Detailed job description..."
            rows={3}
          />
          {form.formState.errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="link"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Application Link
          </label>
          <input
            id="link"
            type="url"
            {...form.register("link")}
            className="w-full text-sm px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="https://..."
          />
          {form.formState.errors.link && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.link.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Annual Salary (USD)
          </label>
          <input
            id="salary"
            type="number"
            {...form.register("salary", { valueAsNumber: true })}
            className="w-full text-sm px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="150000"
          />
          {form.formState.errors.salary && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.salary.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Company Name
          </label>
          <input
            id="company"
            type="text"
            {...form.register("company")}
            className="w-full text-sm px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Company Inc."
          />
          {form.formState.errors.company && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.company.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            {...form.register("location")}
            className="w-full text-sm px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="San Francisco, CA"
          />
          {form.formState.errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.location.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="location_type"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Location Type
          </label>
          <select
            id="location_type"
            {...form.register("location_type")}
            className="w-full text-sm px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
          {form.formState.errors.location_type && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.location_type.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Job Type
          </label>
          <select
            id="type"
            {...form.register("type")}
            className="w-full text-sm px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contractor">Contractor</option>
            <option value="internship">Internship</option>
            <option value="freelance">Freelance</option>
            <option value="volunteer">Volunteer</option>
          </select>
          {form.formState.errors.type && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.type.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Job Category
          </label>
          <input
            id="category"
            type="text"
            {...form.register("category")}
            className="w-full text-sm px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="frontend, backend, full-stack, etc."
          />
          {form.formState.errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.category.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="experience_min"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Minimum Experience (years)
            </label>
            <input
              id="experience_min"
              type="number"
              min={0}
              max={20}
              {...form.register("experience_min", { valueAsNumber: true })}
              className="w-full text-sm px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            {form.formState.errors.experience_min && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.experience_min.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="experience_max"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Maximum Experience (years)
            </label>
            <input
              id="experience_max"
              type="number"
              min={0}
              max={20}
              {...form.register("experience_max", { valueAsNumber: true })}
              className="w-full text-sm px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            {form.formState.errors.experience_max && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.experience_max.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2.5 text-sm text-zinc-200 bg-green-700 hover:bg-green-800 focus:bg-green-800 rounded-lg transition-colors outline-none cursor-pointer font-medium"
      >
        Submit Job
      </button>
    </form>
  )
}

export default PostJobForm
