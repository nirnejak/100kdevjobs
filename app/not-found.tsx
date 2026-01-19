import * as React from "react"

import { Link } from "next-view-transitions"

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
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-200">
            404
          </h1>
          <p
            className="
              px-10 text-base tracking-tighter text-zinc-300
              md:px-0
            "
          >
            The page you&apos;re looking for cannot be found. Go{" "}
            <Link
              href="/"
              className="
                font-bold
                hover:underline
                focus:underline
              "
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
