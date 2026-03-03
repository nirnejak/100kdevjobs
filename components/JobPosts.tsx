"use client"
import {
  ArrowRight,
  Briefcase,
  Clock,
  CurrencyDollar,
  GridFour,
  MagnifyingGlass,
  MapPin,
  Rows,
} from "@phosphor-icons/react"

import { motion } from "motion/react"
import * as React from "react"
import useJobFilters from "@/hooks/useJobFilters"
import { BASE_TRANSITION } from "@/utils/animation"
import classNames from "@/utils/classNames"

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

const JobPosts: React.FC<Props> = ({ jobs }) => {
  const { filters, setFilters, handleSearch, filteredJobs } =
    useJobFilters(jobs)

  const [view, setView] = React.useState<"rows" | "grid">("rows")

  return (
    <section className="mx-auto mb-20 max-w-5xl px-4 md:px-0">
      <motion.form
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ ...BASE_TRANSITION, delay: 0.3 }}
        className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-6"
        onSubmit={(e) => {
          e.preventDefault()
          handleSearch()
        }}
      >
        <div className="relative col-span-2">
          <input
            type="text"
            placeholder="Search"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full bg-zinc-800 px-3 py-2.5 pl-8 text-sm text-zinc-200 tracking-tight outline-hidden"
          />
          <span className="absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-zinc-400">
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
            className="w-full bg-zinc-800 px-3 py-2.5 pl-8 text-sm text-zinc-200 tracking-tight outline-hidden"
          />
          <span className="absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-zinc-400">
            <MapPin size={16} />
          </span>
        </div>
        <div className="relative">
          <input
            type="number"
            placeholder="Min Experience"
            value={filters.experience_min || ""}
            onChange={(e) =>
              setFilters({
                ...filters,
                experience_min: parseInt(e.target.value, 10),
              })
            }
            className="w-full bg-zinc-800 px-3 py-2.5 pl-8 text-sm text-zinc-200 tracking-tight outline-hidden"
          />
          <span className="absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-zinc-400">
            <Briefcase size={16} />
          </span>
        </div>
        <div className="relative">
          <input
            type="number"
            placeholder="Min Salary"
            value={filters.salary || ""}
            onChange={(e) =>
              setFilters({ ...filters, salary: parseInt(e.target.value, 10) })
            }
            className="w-full bg-zinc-800 px-3 py-2.5 pl-8 text-sm text-zinc-200 tracking-tight outline-hidden"
          />
          <span className="absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-zinc-400">
            <CurrencyDollar size={16} />
          </span>
        </div>
        <button
          type="button"
          onClick={() => handleSearch()}
          className="flex cursor-pointer items-center justify-center gap-2 bg-green-700 py-2.5 font-semibold text-sm text-zinc-200 tracking-tight outline-none transition-colors hover:bg-green-800 focus:bg-green-800"
        >
          <span>Search Jobs</span>
          <MagnifyingGlass size={16} />
        </button>
      </motion.form>
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ ...BASE_TRANSITION, delay: 0.4 }}
        className="mb-4 flex items-center justify-between"
      >
        <p className="mx-auto text-sm text-zinc-200 tracking-tight md:mx-0">
          {filteredJobs.length} jobs found
        </p>
        <div className="relative hidden grid-cols-2 gap-2 text-sm text-zinc-200 md:grid">
          <button
            type="button"
            onClick={() => setView("rows")}
            className="flex cursor-pointer items-center gap-2 px-2 py-1.5"
          >
            <Rows size={16} />
            <span>Rows</span>
          </button>
          <button
            type="button"
            onClick={() => setView("grid")}
            className="flex cursor-pointer items-center gap-2 px-2 py-1.5"
          >
            <GridFour size={16} />
            <span>Grid</span>
          </button>
          <motion.div
            layout
            className={classNames(
              "absolute top-0 -z-10 h-full w-1/2 bg-zinc-800",
              view === "rows" ? "left-0" : "right-0"
            )}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: {
            ...BASE_TRANSITION,
            delay: 0.15,
          },
        }}
        layout
        className={classNames(
          "grid gap-4",
          view === "rows" ? "grid-cols-1" : "md:grid-cols-3"
        )}
      >
        {filteredJobs.map((job) => (
          <motion.a
            layout
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: {
                ...BASE_TRANSITION,
                delay: 0.15,
              },
            }}
            key={job.link}
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-zinc-600 border-dashed bg-zinc-900 p-4 outline-hidden transition-colors hover:border-zinc-700 hover:bg-zinc-800 focus:border-zinc-700 focus:bg-zinc-800"
          >
            <motion.div
              layout
              className={classNames(
                "mb-8 flex items-start justify-between",
                view === "rows"
                  ? "flex-col gap-4 md:flex-row md:gap-0"
                  : "flex-col gap-4"
              )}
            >
              <motion.div layout>
                <motion.p
                  layout
                  className="mb-1 font-semibold text-lg text-zinc-200 tracking-tight"
                >
                  {job.title}
                </motion.p>
                <motion.p layout className="text-zinc-500 tracking-tight">
                  {job.company}
                </motion.p>
              </motion.div>
              <motion.div
                layout
                className={classNames(
                  "grid text-sm text-zinc-200",
                  view === "rows"
                    ? "mb-2 grid-cols-2 gap-x-10 gap-y-2 md:mb-0 md:grid-cols-4 md:gap-6"
                    : "mb-2 grid-cols-2 gap-x-10 gap-y-2"
                )}
              >
                <motion.p
                  layout
                  className="flex items-center gap-1.5 tracking-tight"
                >
                  <MapPin size={14} />
                  <span>{job.location}</span>
                </motion.p>
                <motion.p
                  layout
                  className="flex items-center gap-1.5 tracking-tight"
                >
                  <Clock size={14} />
                  <span className="capitalize">{job.type}</span>
                </motion.p>
                <motion.p
                  layout
                  className="flex items-center gap-1.5 tracking-tight"
                >
                  <Briefcase size={14} />
                  <span>
                    {job.experience_min}-{job.experience_max} years
                  </span>
                </motion.p>
                <motion.p
                  layout
                  className="flex items-center gap-1.5 tracking-tight"
                >
                  <CurrencyDollar size={14} />
                  <span>{job.salary.toLocaleString()}</span>
                </motion.p>
              </motion.div>
            </motion.div>
            <motion.div
              layout
              className={classNames(
                "flex justify-between",
                view === "rows"
                  ? "flex-col gap-4 md:flex-row md:gap-0"
                  : "mt-auto flex-col gap-4"
              )}
            >
              <motion.p
                layout
                className="flex flex-wrap items-center gap-1.5 text-zinc-500"
              >
                {job.tags.map((tag) => (
                  <motion.span
                    layout
                    key={tag}
                    className="rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-200 transition-colors group-hover:bg-zinc-900 group-focus:bg-zinc-900"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.p>
              <motion.span
                layout
                className={classNames(
                  "flex cursor-pointer items-center justify-center gap-2 bg-zinc-800 py-2 text-sm text-zinc-200 outline-none transition-colors group-hover:bg-green-700 group-focus:bg-green-700",
                  view === "rows" ? "w-full md:w-40" : "w-full"
                )}
              >
                <motion.span layout>Apply</motion.span>
                <ArrowRight size={16} />
              </motion.span>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

export default JobPosts
