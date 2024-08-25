import { getProjects, getProjectBySlug } from '@/lib/apps'
import ReactMarkdown, { Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import type { Metadata } from 'next'

type Project = {
    slug: string;
    name: string;
    content: string;
    subpages: string[];
    [key: string]: any; // その他のプロパティを許可
  };

  export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = getProjectBySlug(params.slug) as Project;
    return {
      title: `${project.name} | アプリ | Nextandot`,
      description: project.description || `${project.name}の詳細ページです。`,
      openGraph: {
        title: `${project.name} | アプリ | Nextandot`,
        description: project.description || `${project.name}の詳細ページです。`,
        images: [{ url: project.image }],
      },
    }
  }

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
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug) as Project;

  if (!project) {
    return <div className="text-center">Project not found</div>
  }

  const customComponents = createCustomComponents(params.slug);

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
      <ReactMarkdown 
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={customComponents}
        className="mt-4 text-base"
      >
        {project.content}
      </ReactMarkdown>
    </article>
  )
}