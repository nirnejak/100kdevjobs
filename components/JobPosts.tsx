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
    <section className="mx-auto mb-20 max-w-5xl">
      <motion.form
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ ...BASE_TRANSITION, delay: 0.3 }}
        className="
          mb-8 grid grid-cols-1 gap-3
          md:grid-cols-6
        "
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
            className="
              w-full bg-zinc-800 px-3 py-2.5 pl-8 text-sm text-zinc-200
              outline-hidden
            "
          />
          <span
            className="
              absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-zinc-400
            "
          >
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
            className="
              w-full bg-zinc-800 px-3 py-2.5 pl-8 text-sm text-zinc-200
              outline-hidden
            "
          />
          <span
            className="
              absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-zinc-400
            "
          >
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
            className="
              w-full bg-zinc-800 px-3 py-2.5 pl-8 text-sm text-zinc-200
              outline-hidden
            "
          />
          <span
            className="
              absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-zinc-400
            "
          >
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
            className="
              w-full bg-zinc-800 px-3 py-2.5 pl-8 text-sm text-zinc-200
              outline-hidden
            "
          />
          <span
            className="
              absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-zinc-400
            "
          >
            <CurrencyDollar size={16} />
          </span>
        </div>
        <button
          onClick={() => handleSearch()}
          className="
            flex cursor-pointer items-center justify-center gap-2 bg-green-700
            py-2.5 text-sm font-medium text-zinc-200 transition-colors
            outline-none
            hover:bg-green-800
            focus:bg-green-800
          "
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
        <p className="text-sm text-zinc-200">
          {filteredJobs.length} jobs found
        </p>
        <div className="relative grid grid-cols-2 gap-2 text-sm text-zinc-200">
          <button
            onClick={() => setView("rows")}
            className="flex cursor-pointer items-center gap-2 px-2 py-1.5"
          >
            <Rows size={16} />
            <span>Rows</span>
          </button>
          <button
            onClick={() => setView("grid")}
            className="flex cursor-pointer items-center gap-2 px-2 py-1.5"
          >
            <GridFour size={16} />
            <span>Grid</span>
          </button>
          <motion.div
            layout
            className={classNames(
              "absolute h-full top-0 bg-zinc-800 w-1/2 -z-10",
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
          view === "rows" ? "grid-cols-1" : "grid-cols-3"
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
            className="
              group flex flex-col border border-dashed border-zinc-600
              bg-zinc-900 p-4 outline-hidden transition-colors
              hover:border-zinc-700 hover:bg-zinc-800
              focus:border-zinc-700 focus:bg-zinc-800
            "
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
                  className="
                    mb-1 text-lg font-semibold tracking-tight text-zinc-200
                  "
                >
                  {job.title}
                </motion.p>
                <motion.p layout className="tracking-tighter text-zinc-500">
                  {job.company}
                </motion.p>
              </motion.div>
              <motion.div
                layout
                className={classNames(
                  "grid text-zinc-200 text-sm",
                  view === "rows"
                    ? "grid-cols-4 gap-4"
                    : "grid-cols-2 gap-x-10 gap-y-2 mb-2"
                )}
              >
                <motion.p layout className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>{job.location}</span>
                </motion.p>
                <motion.p layout className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span className="capitalize">{job.type}</span>
                </motion.p>
                <motion.p layout className="flex items-center gap-1.5">
                  <Briefcase size={14} />
                  <span>
                    {job.experience_min} - {job.experience_max} years
                  </span>
                </motion.p>
                <motion.p layout className="flex items-center gap-1.5">
                  <CurrencyDollar size={14} />
                  <span>{job.salary.toLocaleString()}</span>
                </motion.p>
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
                className="flex flex-wrap items-center gap-1.5 text-zinc-500"
              >
                {job.tags.map((tag, index) => (
                  <motion.span
                    layout
                    key={index}
                    className="
                      rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs
                      text-zinc-200 transition-colors
                      group-hover:bg-zinc-900
                      group-focus:bg-zinc-900
                    "
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.p>
              <motion.span
                layout
                className={classNames(
                  "flex items-center justify-center gap-2 text-sm text-zinc-200 bg-zinc-800 group-hover:bg-green-700 transition-colors group-focus:bg-green-700 outline-none py-2 cursor-pointer",
                  view === "rows" ? "w-40" : "w-full"
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
