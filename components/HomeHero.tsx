import * as motion from "motion/react-client"
import type * as React from "react"
import Newsletter from "@/components/Newsletter"
import { BASE_TRANSITION } from "@/utils/animation"

const HomeHero: React.FC = () => {
  return (
    <section className="relative mb-44 flex flex-col items-center">
      <h1 className="mb-4 text-center font-bold font-primary text-2xl/relaxed text-zinc-300 tracking-tighter md:text-4xl/relaxed">
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
        className="mb-18 px-10 text-center text-base text-zinc-400 tracking-tighter md:mb-30 md:px-0"
      >
        Get notified about high paying jobs at top tech companies.
      </motion.p>
      <Newsletter />
    </section>
  )
}

export default HomeHero
