"use client"
import * as React from "react"

import { Link } from "next-view-transitions"

import classNames from "@/utils/classNames"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 right-0 z-20 transition-colors",
        isScrolled ? "bg-zinc-900/90 backdrop-blur-sm" : ""
      )}
    >
      <header
        className="
          mx-auto flex max-w-5xl items-center justify-between py-4 text-zinc-300
        "
      >
        <Link
          href="/"
          className="
            flex items-center gap-2 text-lg leading-none font-bold
            tracking-tight
          "
        >
          <span>100KDevJobs</span>
          <span
            className="
              rounded-full bg-green-800 px-3 py-1.5 font-mono text-xs
              leading-none text-zinc-200
            "
          >
            $ 100K+
          </span>
        </Link>
        <nav className="flex items-center gap-6 tracking-tight">
          <Link href="/faq/">FAQ</Link>
          <Link
            href={"/post-job/"}
            className="
              cursor-pointer rounded-xl bg-zinc-200 px-7 py-2 text-sm
              font-medium text-zinc-800 transition-colors outline-none
              hover:bg-zinc-400
              focus:bg-zinc-400
            "
          >
            Post a Job
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Header
