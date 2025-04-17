"use client"
import * as React from "react"

import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "motion/react"
import {
  ArrowRight,
  Briefcase,
  Clock,
  CurrencyDollar,
  MapPin,
  MagnifyingGlass,
} from "@phosphor-icons/react"

import { BASE_TRANSITION } from "@/utils/animation"

export interface Job {
  id: number
  title: string
  description: string
  link: string
  salary: number
  company: string
  location: string
  location_type: string
  type: string
  category: string
  tags: string[]
  experience_min: number
  experience_max: number
  is_active: boolean | null
  createdAt: Date
  updatedAt: Date
}

interface Props {
  jobs: Job[]
}

type FILTERS = {
  search?: string
  location?: string
  experience_min?: number
  experience_max?: number
  salary?: number
}

const initialFilters: FILTERS = {
  search: "",
  location: "",
  experience_min: undefined,
  experience_max: undefined,
  salary: undefined,
}

const JobPosts: React.FC<Props> = ({ jobs }) => {
  const router = useRouter()
  const params = useSearchParams()
  const [filters, setFilters] = React.useState<FILTERS>(initialFilters)

  React.useEffect(() => {
    const search = params.get("search")
    const location = params.get("location")
    const experience_min = params.get("experience_min")
    const experience_max = params.get("experience_max")
    const salary = params.get("salary")

    setFilters({
      search: search || "",
      location: location || "",
      experience_min: experience_min ? parseInt(experience_min) : undefined,
      experience_max: experience_max ? parseInt(experience_max) : undefined,
      salary: salary ? parseInt(salary) : undefined,
    })
  }, [params])

  const handleSearch = () => {
    const queryParams = {
      search: filters.search || "",
      location: filters.location || "",
      experience_min: filters.experience_min?.toString() || "",
      experience_max: filters.experience_max?.toString() || "",
      salary: filters.salary?.toString() || "",
    }
    const searchParams = new URLSearchParams(queryParams)
    router.push(`?${searchParams.toString()}`, { scroll: false })
  }

  const filteredJobs = React.useMemo(() => {
    return jobs.filter((job) => {
      const search = params.get("search")
      const location = params.get("location")
      const experience_min = params.get("experience_min")
      const salary = params.get("salary")

      if (search && !job.title.toLowerCase().includes(search.toLowerCase())) {
        return false
      }
      if (
        location &&
        !job.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false
      }
      if (experience_min && job.experience_min < parseInt(experience_min)) {
        return false
      }
      if (salary && job.salary < parseInt(salary)) {
        return false
      }
      return true
    })
  }, [jobs, filters])

  return (
    <section className="max-w-5xl mx-auto mb-20">
      <motion.form
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ ...BASE_TRANSITION, delay: 0.3 }}
        className="mb-6 bg-zinc-800 rounded-xl p-4"
        onSubmit={(e) => {
          e.preventDefault()
          handleSearch()
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          <div className="relative col-span-2">
            <input
              type="text"
              placeholder="Search"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
              className="bg-zinc-900 w-full py-2.5 px-3 pl-8 rounded-lg text-zinc-200 outline-hidden text-sm"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
              <MagnifyingGlass size={16} />
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
              className="bg-zinc-900 w-full py-2.5 px-3 pl-8 rounded-lg text-zinc-200 outline-hidden text-sm"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
              <MapPin size={16} />
            </span>
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="Min Experience"
              value={filters.experience_min}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  experience_min: parseInt(e.target.value),
                })
              }
              className="bg-zinc-900 w-full py-2.5 px-3 pl-8 rounded-lg text-zinc-200 outline-hidden text-sm"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
              <Briefcase size={16} />
            </span>
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="Min Salary"
              value={filters.salary}
              onChange={(e) =>
                setFilters({ ...filters, salary: parseInt(e.target.value) })
              }
              className="bg-zinc-900 w-full py-2.5 px-3 pl-8 rounded-lg text-zinc-200 outline-hidden text-sm"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
              <CurrencyDollar size={16} />
            </span>
          </div>
          <button
            onClick={() => handleSearch()}
            className="py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm text-zinc-200 bg-green-700 hover:bg-green-800 transition-colors focus:bg-green-800 outline-none cursor-pointer"
          >
            <span>Search Jobs</span>
            <MagnifyingGlass size={16} />
          </button>
        </div>
      </motion.form>
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ ...BASE_TRANSITION, delay: 0.4 }}
        className="grid gap-4 grid-cols-1"
      >
        {filteredJobs.map((job, index) => (
          <motion.a
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ ...BASE_TRANSITION, delay: 0.15 }}
            key={index}
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-600 p-4 hover:border-zinc-700 focus:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 focus:bg-zinc-800 rounded-xl transition-colors outline-hidden group"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="mb-1 text-zinc-200 text-lg font-semibold">
                  {job.title}
                </p>
                <p className="text-zinc-500">{job.company}</p>
              </div>
              <div className="grid grid-cols-4 gap-4 text-zinc-200">
                <p className="flex gap-1.5 items-center">
                  <MapPin size={14} />
                  <span>{job.location}</span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <Clock size={14} />
                  <span className="capitalize">{job.type}</span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <Briefcase size={14} />
                  <span>
                    {job.experience_min} - {job.experience_max} years
                  </span>
                </p>
                <p className="flex gap-1.5 items-center ">
                  <CurrencyDollar size={14} />
                  <span>{job.salary}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-zinc-500 flex gap-1.5 items-center">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="font-mono text-zinc-200 bg-zinc-800 group-hover:bg-zinc-900 group-focus:bg-zinc-900 transition-colors rounded-full px-3 py-1 text-xs "
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <span className="w-[160px] rounded-lg flex items-center justify-center gap-2 text-sm text-zinc-200 bg-zinc-800 group-hover:bg-green-700 transition-colors group-focus:bg-green-700 outline-none py-2 cursor-pointer">
                <span>Apply</span>
                <ArrowRight size={16} />
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

export default JobPosts
