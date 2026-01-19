import * as React from "react"

import * as motion from "motion/react-client"

import { BASE_TRANSITION } from "@/utils/animation"

import Newsletter from "@/components/Newsletter"

const HomeHero: React.FC = () => {
  return (
    <section className="relative mb-44 flex flex-col items-center">
      <h1
        className="
          font-display mb-6 text-center text-5xl/tight font-bold
          tracking-tighter text-zinc-300
        "
      >
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
        className="mb-8 text-lg text-zinc-400"
      >
        Get notified about high paying jobs at top tech companies.
      </motion.p>
      <Newsletter />
    </section>
  )
}

export default HomeHero
