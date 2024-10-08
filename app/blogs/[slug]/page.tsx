import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { TagListWrapper } from "@/components/tag-list-wrapper"
import ReactMarkdown, { Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Nextandot',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | ブログ | Nextandot`,
    description: post.content.substring(0, 160), // 最初の160文字を説明文として使用
    openGraph: {
      title: `${post.title} | ブログ | Nextandot`,
      description: post.content.substring(0, 160),
      images: [{ url: post.thumbnail || '/images/default-blog-og-image.jpg' }],
    },
  }
}

const customComponents: Components = {
  span: ({ className, children, ...props }) => {
    if (className === 'red-text' || className === 'blue-text') {
      return <span className={className} {...props}>{children}</span>;
    }
    return <span {...props}>{children}</span>;
  },
};


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
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <ReactMarkdown 
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={customComponents}
        className="mt-4 text-base"
      >
        {post.content}
      </ReactMarkdown>
      <TagListWrapper tags={post.tags} />
    </article>
  )
}