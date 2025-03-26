"use client"
import * as React from "react"

import { Briefcase, Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react"

export interface Job {
  title: string
  company: string
  skills: string
  location: string
  type: string
  minExperience: number
  maxExperience: number
  salary: string
  link: string
}

interface Props {
  jobs: Job[]
}

const JobPosts: React.FC<Props> = ({ jobs }) => {
  return (
    <section className="max-w-5xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-mono mb-20">
      {jobs.map((job, index) => (
        <a
          key={index}
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-zinc-600 p-4 hover:border-zinc-500 transition-colors group"
        >
          <p className="mb-1.5 text-zinc-200">{job.title}</p>
          <p className="mb-4 text-sm text-zinc-500">{job.company}</p>
          <p className="mb-8 text-sm text-zinc-500">{job.skills}</p>
          <div className="mb-4 grid grid-cols-2 text-sm text-zinc-200">
            <p className="flex gap-1.5 items-center">
              <MapPin size={14} />
              <span>{job.location}</span>
            </p>
            <p className="flex gap-1.5 items-center">
              <Clock size={14} />
              <span>{job.type}</span>
            </p>
            <p className="flex gap-1.5 items-center">
              <Briefcase size={14} />
              <span>
                {job.minExperience}-{job.maxExperience} years
              </span>
            </p>
            <p className="flex gap-1.5 items-center">
              <CurrencyDollar size={14} />
              <span>{job.salary}</span>
            </p>
          </div>
          <button className="text-sm text-zinc-200 bg-zinc-800 group-hover:bg-zinc-700 transition-colors group-focus:bg-zinc-700 outline-none w-full py-2 cursor-pointer">
            Apply
          </button>
        </a>
      ))}
    </section>
  )
}

export default JobPosts
