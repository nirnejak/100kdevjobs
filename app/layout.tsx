import * as React from "react"

import type { Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"

import {
  Geist_Mono,
  Plus_Jakarta_Sans,
  Playfair_Display,
} from "next/font/google"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import Header from "@/components/Header"

import "../styles/main.css"

const displayFont = Playfair_Display({
  variable: "--display-font",
  subsets: ["latin"],
  display: "swap",
})

const sansFont = Plus_Jakarta_Sans({
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
  themeColor: "#000000",
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

        <body className={"overflow-x-hidden bg-zinc-900 font-sans"}>
          <Header />
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
