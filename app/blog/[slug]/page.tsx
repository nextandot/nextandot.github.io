import { getPostBySlug } from '@/lib/posts'
import Link from 'next/link'
import { TagList } from "@/components/tag-list"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return <div className="text-center">Post not found</div>
  }

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
      <TagList tags={post.tags} />
    </article>
  )
}
