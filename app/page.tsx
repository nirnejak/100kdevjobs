import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import JobPosts from "@/components/JobPosts"
import HomeHero from "@/components/HomeHero"

export const metadata = getMetadata({
  path: "/",
  title: "100k Dev Jobs",
  description: "Find tech jobs that pays $100k+ in USA, Europe, India. ",
})

const Home: React.FC = () => {
  return (
    <main>
      <HomeHero />
      <JobPosts />
    </main>
  )
}

export default Home
