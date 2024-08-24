import BlogClient from './BlogClient'
import { getSortedPostsData } from '@/lib/posts'

export default async function BlogPage() {
  const allPosts = await getSortedPostsData()
  
  return <BlogClient initialPosts={allPosts} />
}