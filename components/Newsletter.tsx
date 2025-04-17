"use client"
import * as React from "react"

import * as motion from "motion/react-client"

import { BASE_TRANSITION } from "@/utils/animation"

const Newsletter: React.FC = () => {
  const [email, setEmail] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  const [success, setSuccess] = React.useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error)
      }

      setSuccess("You've been subscribed to the newsletter")
      setEmail("")

      setTimeout(() => {
        setSuccess(null)
      }, 3000)
    } catch (error) {
      console.error("Error subscribing:", error)
      setError(error instanceof Error ? error.message : "Failed to subscribe")

      setTimeout(() => {
        setError(null)
      }, 3000)
    }
  }

  return (
    <motion.div
      initial={{ translateY: 10, opacity: 0, filter: "blur(5px)" }}
      animate={{ translateY: 0, opacity: 1, filter: "none" }}
      transition={{ ...BASE_TRANSITION, duration: 0.2, delay: 0.3 }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex max-w-[400px] mb-2 rounded-xl overflow-hidden"
      >
        <input
          required
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        {success || error || "No spam. Unsubscribe anytime."}
      </p>
    </motion.div>
  )
}

export default Newsletter
