import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { TagListWrapper } from "@/components/tag-list-wrapper"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

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
      <ReactMarkdown 
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        className="mt-4"
      >
        {post.content}
      </ReactMarkdown>
      <TagListWrapper tags={post.tags} />
    </article>
  )
}