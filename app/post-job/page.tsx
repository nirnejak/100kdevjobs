import * as React from "react"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/post-job",
  title: "Post Job | 100k Dev Jobs",
  description: "Post a job on 100k Dev Jobs",
})

const PostJobPage: React.FC = () => {
  return (
    <main>
      <h1>Post Job</h1>
    </main>
  )
}

export default PostJobPage
