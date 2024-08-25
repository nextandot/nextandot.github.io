import BlogClient from './BlogClient'
import { getSortedPostsData } from '@/lib/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ブログ | Nextandot',
  description: 'Nextandotのブログ記事一覧です。',
  openGraph: {
    title: 'ブログ | Nextandot',
    description: 'Nextandotのブログ記事一覧です。',
  },
}

export default async function BlogPage() {
  const allPosts = await getSortedPostsData()
  
  return <BlogClient initialPosts={allPosts} />
}