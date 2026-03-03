"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import type * as React from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { submitJob } from "@/app/post-job/actions"
import { type JobFormValues, jobFormSchema } from "@/utils/jobFormSchema"

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
      const result = await submitJob(data)

      if (!result.success) {
        throw new Error(result.message)
      }

      toast.success(result.message)
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
            className="mb-2 block font-medium text-sm text-zinc-300"
          >
            Job Title
          </label>
          <input
            id="title"
            type="text"
            {...form.register("title")}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Senior Software Engineer"
          />
          {form.formState.errors.title && (
            <p className="mt-1 text-red-500 text-sm">
              {form.formState.errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block font-medium text-sm text-zinc-300"
          >
            Job Description
          </label>
          <textarea
            id="description"
            {...form.register("description")}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Detailed job description..."
            rows={3}
          />
          {form.formState.errors.description && (
            <p className="mt-1 text-red-500 text-sm">
              {form.formState.errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="link"
            className="mb-2 block font-medium text-sm text-zinc-300"
          >
            Application Link
          </label>
          <input
            id="link"
            type="url"
            {...form.register("link")}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="https://..."
          />
          {form.formState.errors.link && (
            <p className="mt-1 text-red-500 text-sm">
              {form.formState.errors.link.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="salary"
            className="mb-2 block font-medium text-sm text-zinc-300"
          >
            Annual Salary (USD)
          </label>
          <input
            id="salary"
            type="number"
            {...form.register("salary", { valueAsNumber: true })}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="150000"
          />
          {form.formState.errors.salary && (
            <p className="mt-1 text-red-500 text-sm">
              {form.formState.errors.salary.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block font-medium text-sm text-zinc-300"
          >
            Company Name
          </label>
          <input
            id="company"
            type="text"
            {...form.register("company")}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Company Inc."
          />
          {form.formState.errors.company && (
            <p className="mt-1 text-red-500 text-sm">
              {form.formState.errors.company.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="location"
            className="mb-2 block font-medium text-sm text-zinc-300"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            {...form.register("location")}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="San Francisco, CA"
          />
          {form.formState.errors.location && (
            <p className="mt-1 text-red-500 text-sm">
              {form.formState.errors.location.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="location_type"
            className="mb-2 block font-medium text-sm text-zinc-300"
          >
            Location Type
          </label>
          <select
            id="location_type"
            {...form.register("location_type")}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
          {form.formState.errors.location_type && (
            <p className="mt-1 text-red-500 text-sm">
              {form.formState.errors.location_type.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="type"
            className="mb-2 block font-medium text-sm text-zinc-300"
          >
            Job Type
          </label>
          <select
            id="type"
            {...form.register("type")}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contractor">Contractor</option>
            <option value="internship">Internship</option>
            <option value="freelance">Freelance</option>
            <option value="volunteer">Volunteer</option>
          </select>
          {form.formState.errors.type && (
            <p className="mt-1 text-red-500 text-sm">
              {form.formState.errors.type.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="category"
            className="mb-2 block font-medium text-sm text-zinc-300"
          >
            Job Category
          </label>
          <input
            id="category"
            type="text"
            {...form.register("category")}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="frontend, backend, full-stack, etc."
          />
          {form.formState.errors.category && (
            <p className="mt-1 text-red-500 text-sm">
              {form.formState.errors.category.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="experience_min"
              className="mb-2 block font-medium text-sm text-zinc-300"
            >
              Minimum Experience (years)
            </label>
            <input
              id="experience_min"
              type="number"
              min={0}
              max={20}
              {...form.register("experience_min", { valueAsNumber: true })}
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            {form.formState.errors.experience_min && (
              <p className="mt-1 text-red-500 text-sm">
                {form.formState.errors.experience_min.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="experience_max"
              className="mb-2 block font-medium text-sm text-zinc-300"
            >
              Maximum Experience (years)
            </label>
            <input
              id="experience_max"
              type="number"
              min={0}
              max={20}
              {...form.register("experience_max", { valueAsNumber: true })}
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            {form.formState.errors.experience_max && (
              <p className="mt-1 text-red-500 text-sm">
                {form.formState.errors.experience_max.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-green-700 py-2.5 font-medium text-sm text-zinc-200 outline-none transition-colors hover:bg-green-800 focus:bg-green-800"
      >
        Submit Job
      </button>
    </form>
  )
}

export default PostJobForm
