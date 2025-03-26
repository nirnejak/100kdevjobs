import * as React from "react"

import * as motion from "motion/react-client"

import { BASE_TRANSITION } from "@/utils/animation"
import { getMetadata } from "@/utils/metadata"

import JobPosts from "@/components/JobPosts"

export const metadata = getMetadata({
  path: "/",
  title: "100k Dev Jobs",
  description: "Find tech jobs that pays $100k+ in USA, Europe, India. ",
})

const Home: React.FC = () => {
  return (
    <main className="">
      <section className="mt-52 mb-24 max-w-5xl mx-auto">
        <motion.h1
          initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ delay: 0, ...BASE_TRANSITION }}
          className="text-6xl font-bold tracking-tighter leading-normal text-zinc-300"
        >
          Find tech jobs that pays <br />
          $100k+ in USA, Europe, India.
        </motion.h1>
      </section>
      <JobPosts />
    </main>
  )
}

export default Home
