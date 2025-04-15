import * as React from "react"

import * as motion from "motion/react-client"

import { BASE_TRANSITION } from "@/utils/animation"

import { BackgroundBeams } from "@/components/BackgroundBeams"

const HomeHero: React.FC = () => {
  return (
    <section className="relative mb-12 h-[80vh] flex justify-center items-center">
      <BackgroundBeams />
      <div className="max-w-5xl flex-1 flex flex-col items-center">
        <h1 className="font-display text-6xl font-bold tracking-tighter text-center leading-tight text-zinc-300 mb-6">
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
            <span className="text-green-500">$100k+</span> in USA, Europe,
            India.
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
        <motion.div
          initial={{ translateY: 10, opacity: 0, filter: "blur(5px)" }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ ...BASE_TRANSITION, duration: 0.2, delay: 0.3 }}
        >
          <form className="flex max-w-[400px] mb-2 rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-zinc-800 hover:bg-zinc-950/50 focus:bg-zinc-950/50 px-4 py-3 text-sm text-zinc-200 outline-hidden transition-colors leading-none"
            />
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-900 focus:bg-green-900 px-4 py-3 text-sm text-zinc-200 outline-hidden transition-colors leading-none"
            >
              Get notified
            </button>
          </form>
          <p className="text-zinc-400 text-xs text-center">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeHero
