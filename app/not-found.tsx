import { Link } from "next-view-transitions"
import type * as React from "react"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/",
  title: "Not Found | 100k Dev Jobs",
  description: "Page not found on 100k Dev Jobs",
})

const NotFound: React.FC = () => {
  return (
    <main className="mx-auto max-w-5xl">
      <section className="grid min-h-dvh place-content-center">
        <div className="text-center">
          <h1 className="mb-4 font-bold text-5xl text-zinc-200 tracking-tight">
            404
          </h1>
          <p className="px-10 text-base text-zinc-300 tracking-tighter md:px-0">
            The page you&apos;re looking for cannot be found. Go{" "}
            <Link
              href="/"
              className="font-bold hover:underline focus:underline"
            >
              Home
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default NotFound
