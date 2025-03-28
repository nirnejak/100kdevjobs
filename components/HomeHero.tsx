import * as React from "react"

interface Props {}

const HomeHero: React.FC<Props> = () => {
  return (
    <section className="mt-60 mb-48 max-w-5xl mx-auto">
      <h1 className="text-6xl font-bold tracking-tighter leading-normal text-zinc-300 mb-6">
        Find tech jobs that pays <br />
        <span className="text-green-500">$100k+</span> in USA, Europe, India.
      </h1>
      <p className="text-zinc-400 text-lg mb-8">
        Get notified about high paying jobs at top tech companies.
      </p>
      <form className="flex max-w-[400px] mb-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-zinc-800 px-4 py-2.5 text-zinc-200 text-sm"
        />
        <button
          type="submit"
          className="bg-green-800 text-white px-4 py-2.5 text-sm"
        >
          Get notified
        </button>
      </form>
      <p className="text-zinc-400 text-sm">No spam. Unsubscribe anytime.</p>
    </section>
  )
}

export default HomeHero
