import * as React from "react"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/faq/",
  title: "FAQ | 100k Dev Jobs",
  description: "Frequently asked questions about 100k Dev Jobs",
})

const FAQPage: React.FC = () => {
  return (
    <main>
      <h1>FAQ</h1>
    </main>
  )
}

export default FAQPage
