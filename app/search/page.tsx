import SearchClient from './SearchClient'
import { getSortedPostsData } from '@/lib/posts'

export default async function SearchPage() {
  const initialPosts = await getSortedPostsData()
  
  return <SearchClient initialPosts={initialPosts} />
}