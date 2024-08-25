import SearchClient from './SearchClient'
import { getSortedPostsData } from '@/lib/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '記事検索 | Nextandot',
  description: 'Nextandotの記事を検索できます。キーワードを入力して、興味のある記事を見つけましょう。',
  openGraph: {
    title: '記事検索 | Nextandot',
    description: 'Nextandotの記事を検索できます。キーワードを入力して、興味のある記事を見つけましょう。',
  },
}

export default async function SearchPage() {
  const initialPosts = await getSortedPostsData()
  
  return <SearchClient initialPosts={initialPosts} />
}