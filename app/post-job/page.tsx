import * as React from "react"
import * as motion from "motion/react-client"

import { getMetadata } from "@/utils/metadata"
import { BASE_TRANSITION } from "@/utils/animation"

import PostJobForm from "@/components/PostJobForm"

export const metadata = getMetadata({
  path: "/post-job/",
  title: "Post Job | 100k Dev Jobs",
  description: "Post a job on 100k Dev Jobs",
})

const PostJobPage: React.FC = () => {
  return (
    <main className="pt-48">
      <section className="relative mx-auto max-w-2xl px-4 pb-44">
        <motion.h1
          initial={{ translateY: 10, opacity: 0, filter: "blur(5px)" }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ ...BASE_TRANSITION, duration: 0.2, delay: 0 }}
          className="
            mb-12 text-center font-display text-4xl/tight font-bold
            tracking-tighter text-zinc-300
          "
        >
          Post a Job
        </motion.h1>

        <PostJobForm />
      </section>
    </main>
  )
}

export default PostJobPage
