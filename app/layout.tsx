import * as React from "react"

import type { Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"

import { Geist_Mono, Bricolage_Grotesque, Onest } from "next/font/google"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import Header from "@/components/Header"
import BackgroundBeams from "@/components/atoms/BackgroundBeams"

import "../styles/main.css"

const displayFont = Bricolage_Grotesque({
  variable: "--display-font",
  subsets: ["latin"],
  display: "swap",
})

const sansFont = Onest({
  variable: "--sans-font",
  subsets: ["latin"],
  display: "swap",
})

const monoFont = Geist_Mono({
  variable: "--mono-font",
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
      <html
        lang="en"
        className={classNames(
          displayFont.variable,
          sansFont.variable,
          monoFont.variable
        )}
      >
        <head>{renderSchemaTags()}</head>

        <body className={"overflow-x-hidden bg-zinc-900 font-sans relative"}>
          <Header />
          {children}

          <section className="absolute inset-0 -z-10 h-[70vh]">
            <BackgroundBeams />
          </section>
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
