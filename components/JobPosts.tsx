"use client"
import * as React from "react"

import { motion } from "motion/react"
import {
  ArrowRight,
  Briefcase,
  Clock,
  CurrencyDollar,
  MapPin,
  MagnifyingGlass,
  Rows,
  GridFour,
} from "@phosphor-icons/react"

import { BASE_TRANSITION } from "@/utils/animation"
import classNames from "@/utils/classNames"

import useJobFilters from "@/hooks/useJobFilters"

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
    <section className="max-w-5xl mx-auto mb-20">
      <motion.form
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ ...BASE_TRANSITION, delay: 0.3 }}
        className="mb-8 grid grid-cols-1 md:grid-cols-6 gap-3"
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
            className="bg-zinc-800 w-full py-2.5 px-3 pl-8 rounded-lg text-zinc-200 outline-hidden text-sm"
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
            className="bg-zinc-800 w-full py-2.5 px-3 pl-8 rounded-lg text-zinc-200 outline-hidden text-sm"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
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
                experience_min: parseInt(e.target.value),
              })
            }
            className="bg-zinc-800 w-full py-2.5 px-3 pl-8 rounded-lg text-zinc-200 outline-hidden text-sm"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
            <Briefcase size={16} />
          </span>
        </div>
        <div className="relative">
          <input
            type="number"
            placeholder="Min Salary"
            value={filters.salary || ""}
            onChange={(e) =>
              setFilters({ ...filters, salary: parseInt(e.target.value) })
            }
            className="bg-zinc-800 w-full py-2.5 px-3 pl-8 rounded-lg text-zinc-200 outline-hidden text-sm"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
            <CurrencyDollar size={16} />
          </span>
        </div>
        <button
          onClick={() => handleSearch()}
          className="py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm text-zinc-200 bg-green-700 hover:bg-green-800 focus:bg-green-800 transition-colors outline-none cursor-pointer font-medium"
        >
          <span>Search Jobs</span>
          <MagnifyingGlass size={16} />
        </button>
      </motion.form>
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ ...BASE_TRANSITION, delay: 0.4 }}
        className="flex justify-between items-center mb-4"
      >
        <p className="text-zinc-200 text-sm">
          {filteredJobs.length} jobs found
        </p>
        <div className="text-zinc-200 text-sm grid grid-cols-2 relative gap-2">
          <button
            onClick={() => setView("rows")}
            className="flex items-center gap-2 px-2 py-1.5 cursor-pointer"
          >
            <Rows size={16} />
            <span>Rows</span>
          </button>
          <button
            onClick={() => setView("grid")}
            className="flex items-center gap-2 px-2 py-1.5 cursor-pointer"
          >
            <GridFour size={16} />
            <span>Grid</span>
          </button>
          <motion.div
            layout
            className={classNames(
              "absolute h-full top-0 bg-zinc-800 rounded-lg w-1/2 -z-10",
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
          view === "rows" ? "grid-cols-1" : "grid-cols-2"
        )}
      >
        {filteredJobs.map((job, index) => (
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
            key={index}
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border flex flex-col border-zinc-600 p-4 hover:border-zinc-700 focus:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 focus:bg-zinc-800 rounded-xl transition-colors outline-hidden group"
          >
            <motion.div
              layout
              className={classNames(
                "flex justify-between items-start mb-8",
                view === "rows" ? "flex-row" : "flex-col gap-4"
              )}
            >
              <motion.div layout>
                <motion.p
                  layout
                  className="mb-1 text-zinc-200 text-lg font-semibold"
                >
                  {job.title}
                </motion.p>
                <motion.p layout className="text-zinc-500">
                  {job.company}
                </motion.p>
              </motion.div>
              <motion.div
                layout
                className="grid grid-cols-4 gap-4 text-zinc-200 text-sm"
              >
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
                  <span>{job.salary.toLocaleString()}</span>
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              layout
              className={classNames(
                "flex justify-between",
                view === "rows" ? "flex-row" : "flex-col gap-4 mt-auto"
              )}
            >
              <motion.p
                layout
                className="text-zinc-500 flex gap-1.5 items-center flex-wrap"
              >
                {job.tags.map((tag, index) => (
                  <motion.span
                    layout
                    key={index}
                    className="font-mono text-zinc-200 bg-zinc-800 group-hover:bg-zinc-900 group-focus:bg-zinc-900 transition-colors rounded-full px-3 py-1 text-xs "
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.p>
              <motion.span
                layout
                className={classNames(
                  "rounded-lg flex items-center justify-center gap-2 text-sm text-zinc-200 bg-zinc-800 group-hover:bg-green-700 transition-colors group-focus:bg-green-700 outline-none py-2 cursor-pointer",
                  view === "rows" ? "w-[160px]" : "w-full"
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
