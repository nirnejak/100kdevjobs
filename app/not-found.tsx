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
          <h1
            className="
              font-display mb-3 text-5xl font-bold tracking-tighter
              text-zinc-200
            "
          >
            404
          </h1>
          <p className="text-base text-zinc-300">
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
