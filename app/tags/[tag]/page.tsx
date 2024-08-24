import { getAllPosts } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  const tags = Array.from(new Set(posts.flatMap(post => post.tags)))
  
  return tags.map(tag => ({
    tag: tag,
  }))
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const posts = await getAllPosts()
  const filteredPosts = posts.filter(post => post.tags.includes(params.tag))

  return (
    <div>
      <h1>Posts tagged with &quot;{params.tag}&quot;</h1>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}