import * as React from "react"

import * as motion from "motion/react-client"

import { BASE_TRANSITION } from "@/utils/animation"
import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/",
  title: "100k Dev Jobs",
  description: "Find tech jobs that pays $100k+ in USA, Europe, India. ",
})

const Home: React.FC = () => {
  return (
    <main className="grid h-dvh place-content-center">
      <motion.h1
        initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
        animate={{ translateY: 0, opacity: 1, filter: "none" }}
        transition={{ delay: 0, ...BASE_TRANSITION }}
        className="text-5xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-300"
      >
        Find tech jobs that pays $100k+ in USA, Europe, India.
      </motion.h1>
    </main>
  )
}

export default Home
