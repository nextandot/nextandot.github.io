import { getProjects, getSubpages, getSubpageBySlug } from '@/lib/projects'
import ReactMarkdown, { Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'  // この行を追加

const createCustomComponents = (slug: string): Components => ({
  span: ({ className, children, ...props }) => {
    if (className === 'red-text' || className === 'blue-text') {
      return <span className={className} {...props}>{children}</span>;
    }
    return <span {...props}>{children}</span>;
  },
  a: ({ href, children }) => {
    if (href?.startsWith('http')) {
      return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
    }
    return <Link href={`/apps/${slug}/${href}`}>{children}</Link>;
  }
});

export async function generateStaticParams() {
  const projects = getProjects();
  const paths = [];
  for (const project of projects) {
    const subpages = getSubpages(project.slug);
    for (const subpage of subpages) {
      paths.push({ slug: project.slug, subpage });
    }
  }
  return paths;
}

export default async function SubPage({ params }: { params: { slug: string, subpage: string } }) {
  const subpageData = getSubpageBySlug(params.slug, params.subpage);

  if (!subpageData) {
    return <div className="text-center">Subpage not found</div>
  }

  const customComponents = createCustomComponents(params.slug);

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{subpageData.title}</h1>
      <ReactMarkdown 
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={customComponents}
        className="mt-4 text-base"
      >
        {subpageData.content}
      </ReactMarkdown>
    </article>
  )
}