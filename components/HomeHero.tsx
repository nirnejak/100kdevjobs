import * as React from "react"

interface Props {}

const HomeHero: React.FC<Props> = () => {
  return (
    <section className="mt-52 mb-24 max-w-5xl mx-auto">
      <h1 className="text-6xl font-bold tracking-tighter leading-normal text-zinc-300">
        Find tech jobs that pays <br />
        $100k+ in USA, Europe, India.
      </h1>
    </section>
  )
}

export default HomeHero
