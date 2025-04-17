import * as React from "react"

import * as motion from "motion/react-client"

import { BASE_TRANSITION } from "@/utils/animation"

import Newsletter from "@/components/Newsletter"

const HomeHero: React.FC = () => {
  return (
    <section className="mb-44 flex flex-col items-center relative">
      <h1 className="font-display text-5xl font-bold tracking-tighter text-center leading-tight text-zinc-300 mb-6">
        <motion.span
          initial={{ translateY: 10, opacity: 0, filter: "blur(5px)" }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ ...BASE_TRANSITION, duration: 0.2, delay: 0 }}
          className="block"
        >
          Find tech jobs that pays
        </motion.span>
        <motion.span
          initial={{ translateY: 10, opacity: 0, filter: "blur(5px)" }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ ...BASE_TRANSITION, duration: 0.2, delay: 0.1 }}
          className="block"
        >
          <span className="text-green-500">$100k+</span> in USA, Europe, India.
        </motion.span>
      </h1>
      <motion.p
        initial={{ translateY: 10, opacity: 0, filter: "blur(5px)" }}
        animate={{ translateY: 0, opacity: 1, filter: "none" }}
        transition={{ ...BASE_TRANSITION, duration: 0.2, delay: 0.2 }}
        className="text-zinc-400 text-lg mb-8"
      >
        Get notified about high paying jobs at top tech companies.
      </motion.p>
      <Newsletter />
    </section>
  )
}

export default HomeHero
