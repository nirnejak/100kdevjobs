"use client"
import * as React from "react"

import { Link } from "next-view-transitions"

const Header: React.FC = () => {
  return (
    <header className="max-w-5xl mx-auto flex justify-between items-center py-4 text-zinc-300 fixed top-0 left-0 right-0 z-10 bg-zinc-900">
      <Link href="/" className="text-2xl font-bold">
        100KDevJobs
      </Link>
      <nav className="flex items-center gap-4">
        <Link href="/">FAQ</Link>
        <Link href="/jobs">Blog</Link>
        <Link href="/about">Ideas + Feedback</Link>
        <Link
          href={"/submit"}
          className="text-sm text-zinc-800 bg-zinc-200 hover:bg-zinc-400 transition-colors focus:bg-zinc-400 outline-none py-2 px-7 cursor-pointer"
        >
          Post a Job
        </Link>
      </nav>
    </header>
  )
}

export default Header
