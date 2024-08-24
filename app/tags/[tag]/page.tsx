import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getAllPosts().filter(post => post.tags.includes(params.tag))

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts tagged with &quot;{params.tag}&quot;</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="bg-gray-100 p-4 rounded">
            <Link href={`/blog/${post.slug}`} className="font-semibold hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
