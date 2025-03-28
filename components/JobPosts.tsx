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
    <section className="max-w-5xl mx-auto grid gap-4 grid-cols-1 mb-20">
      {jobs.map((job, index) => (
        <a
          key={index}
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-zinc-600 p-4 hover:border-zinc-500 transition-colors group"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="mb-1.5 text-zinc-200 text-lg font-semibold">
                {job.title}
              </p>
              <p className="mb-4 text-sm text-zinc-500">{job.company}</p>
            </div>
            <div className="grid grid-cols-4 gap-4 text-zinc-200">
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
              <p className="flex gap-1.5 items-center ">
                <CurrencyDollar size={14} />
                <span>{job.salary}</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-zinc-500 flex gap-1.5 items-center">
              {job.skills.split(",").map((skill) => (
                <span className="font-mono text-zinc-200 bg-zinc-800 rounded-full px-3 py-1 text-xs ">
                  {skill}
                </span>
              ))}
            </p>
            <button className="w-[160px] text-sm text-zinc-200 bg-zinc-800 group-hover:bg-zinc-700 transition-colors group-focus:bg-zinc-700 outline-none py-2 cursor-pointer">
              Apply
            </button>
          </div>
        </a>
      ))}
    </section>
  )
}

export default JobPosts
