"use client"
import * as React from "react"

import { Link } from "next-view-transitions"

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-zinc-900">
      <header className="max-w-5xl mx-auto flex justify-between items-center py-4 text-zinc-300">
        <Link
          href="/"
          className="text-lg leading-none font-bold tracking-tight flex gap-2"
        >
          <span>100KDevJobs</span>
          <span className="font-mono text-zinc-200 bg-green-800 rounded-full px-3 py-1 text-xs ">
            $ 100K+
          </span>
        </Link>
        <nav className="flex items-center gap-6">
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
    </div>
  )
}

export default Header
