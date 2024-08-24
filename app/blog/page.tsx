// app/blog/page.tsx
import { getSortedPostsData } from "@/lib/posts"
import BlogClient from "./BlogClient"

export default async function BlogPage() {
  const allPosts = getSortedPostsData()

  return <BlogClient initialPosts={allPosts} />
}