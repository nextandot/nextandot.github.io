'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Post {
  slug: string;
  title: string;
  tags: string[];
  content: string;
}

interface SearchClientProps {
  initialPosts: Post[];
}

export default function SearchClient({ initialPosts }: SearchClientProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(initialPosts)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    setResults(searchPosts(newQuery, initialPosts))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search Posts</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search posts..."
        className="w-full p-2 border rounded mb-4"
      />
      <ul className="space-y-4">
        {results.map((post) => (
          <li key={post.slug} className="bg-gray-100 p-4 rounded">
            <Link href={`/blog/${post.slug}`} className="font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-600">
              Tags: {post.tags.join(', ')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function searchPosts(query: string, posts: Post[]): Post[] {
  return posts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.content.toLowerCase().includes(query.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  )
}