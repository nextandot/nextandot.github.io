import { getAllPosts, Post } from '@/lib/posts'

export default async function TagPage({ params }: { params: { tag: string } }) {
  const allPosts = await getAllPosts()
  const posts = allPosts.filter(post => post.tags.includes(params.tag))

  return (
    <div>
      <h1>Posts tagged with &quot;{params.tag}&quot;</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}