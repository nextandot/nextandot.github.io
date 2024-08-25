'use client'

import { useState } from "react"
import Link from "next/link"
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { SearchBar } from "@/components/search-bar"
import { TagList } from "@/components/tag-list"

interface Post {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  thumbnail?: string;
}

interface BlogClientProps {
  initialPosts: Post[]
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const handleSearch = (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    const filtered = initialPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    )
    setFilteredPosts(filtered)
  }

  const handleTagSelect = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null)
      setFilteredPosts(initialPosts)
    } else {
      setSelectedTag(tag)
      const filtered = initialPosts.filter((post) => post.tags.includes(tag))
      setFilteredPosts(filtered)
    }
  }

  const allTags = Array.from(new Set(initialPosts.flatMap((post) => post.tags)))

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <SearchBar onSearch={handleSearch} />
      <TagList tags={allTags} selectedTag={selectedTag} onTagSelect={handleTagSelect} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"> {/* mt-8 を追加 */}
        {filteredPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              {post.thumbnail && (
                <div className="w-full aspect-video relative mb-4">
                  <Image
                    src={post.thumbnail}
                    alt={`Thumbnail for ${post.title}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <p className="text-sm text-gray-500">{post.date}</p>
              <div className="mt-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="mr-2 text-sm text-blue-500">
                    #{tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}