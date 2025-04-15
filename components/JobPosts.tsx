"use client"
import * as React from "react"

import {
  ArrowRight,
  Briefcase,
  Clock,
  CurrencyDollar,
  MapPin,
} from "@phosphor-icons/react"

import { motion } from "motion/react"

import { BASE_TRANSITION } from "@/utils/animation"

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
        <motion.a
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ ...BASE_TRANSITION, delay: index * 0.1 }}
          key={index}
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-zinc-600 p-4 hover:border-zinc-500 focus:border-zinc-500 hover:bg-zinc-200/5 focus:bg-zinc-200/5 rounded-xl transition-colors outline-hidden group"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="mb-1 text-zinc-200 text-lg font-semibold">
                {job.title}
              </p>
              <p className="mb-4 text-zinc-500">{job.company}</p>
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
                  {job.minExperience} - {job.maxExperience} years
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
              {job.skills.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="font-mono text-zinc-200 bg-zinc-800 rounded-full px-3 py-1 text-xs "
                >
                  {skill}
                </span>
              ))}
            </p>
            <span className="w-[160px] flex items-center justify-center gap-2 text-sm text-zinc-200 bg-zinc-800 group-hover:bg-green-700 transition-colors group-focus:bg-green-700 outline-none py-2 cursor-pointer">
              <span>Apply</span>
              <ArrowRight size={16} />
            </span>
          </div>
        </motion.a>
      ))}
    </section>
  )
}

export default JobPosts
