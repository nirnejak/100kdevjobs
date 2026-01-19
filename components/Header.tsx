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
        "fixed top-0 left-0 right-0 z-20 transition-colors px-4 md:px-0",
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
            flex items-center gap-2 text-base leading-none font-bold
            tracking-tight
            md:text-lg
          "
        >
          <span>100KDevJobs</span>
          <span
            className="
              rounded-full bg-green-800 px-2.5 py-1.5 font-mono text-xs
              leading-none text-zinc-200
              md:px-3
            "
          >
            $ 100K+
          </span>
        </Link>
        <nav className="flex items-center gap-6 tracking-tight">
          <Link
            href="/faq/"
            className="
              text-sm
              md:text-base
            "
          >
            FAQ
          </Link>
          <Link
            href={"/post-job/"}
            className="
              cursor-pointer rounded-xl bg-zinc-200 px-3.5 py-2 text-xs
              font-semibold text-zinc-800 transition-colors outline-none
              hover:bg-zinc-400
              focus:bg-zinc-400
              md:px-5 md:text-sm
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
