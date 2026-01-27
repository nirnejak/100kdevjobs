import * as React from "react"
import { Suspense } from "react"

import { getMetadata } from "@/utils/metadata"

import { db } from "@/db"
import { jobs } from "@/db/schema"

import JobPosts, { type Job } from "@/components/JobPosts"
import HomeHero from "@/components/HomeHero"

export const metadata = getMetadata({
  path: "/",
  title: "100k Dev Jobs",
  description: "Find tech jobs that pays $100k+ in USA, Europe, India. ",
})

const Home: React.FC = async () => {
  const allJobs = await db.select().from(jobs).orderBy(jobs.createdAt)

  return (
    <main className="pt-48">
      <HomeHero />
      <Suspense fallback={<div>Loading jobs...</div>}>
        <JobPosts jobs={allJobs as Job[]} />
      </Suspense>
    </main>
  )
}

export default Home
