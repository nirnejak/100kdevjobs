import * as React from "react"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/ideas-feedback/",
  title: "Ideas & Feedback | 100k Dev Jobs",
  description: "Share your ideas and feedback for 100k Dev Jobs",
})

const IdeasFeedbackPage: React.FC = () => {
  return (
    <main>
      <h1>Ideas & Feedback</h1>
    </main>
  )
}

export default IdeasFeedbackPage
