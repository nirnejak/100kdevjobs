import * as React from "react"

import type { Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"
import { DM_Mono } from "next/font/google"

import { ReactLenis } from "lenis/react"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import Header from "@/components/Header"
import BackgroundBeams from "@/components/atoms/BackgroundBeams"

import "./main.css"

const primaryFont = DM_Mono({
  variable: "--primary-font",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#18181B",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html lang="en" className={classNames(primaryFont.variable)}>
        <head>{renderSchemaTags()}</head>

        <ReactLenis root>
          <body
            className={"relative overflow-x-hidden bg-zinc-900 font-primary"}
          >
            <Header />
            {children}

            <section className="absolute inset-0 -z-10 h-[70vh]">
              <BackgroundBeams />
            </section>
          </body>
        </ReactLenis>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
