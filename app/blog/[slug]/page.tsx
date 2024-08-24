import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { TagListWrapper } from "@/components/tag-list-wrapper"

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return <div className="text-center">Post not found</div>
  }

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
      <TagListWrapper tags={post.tags} />
    </article>
  )
}