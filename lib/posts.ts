import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'contents/blogs');

export interface Post {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  thumbnail?: string;
}

export async function getPostBySlug(slug: string): Promise<Post>  {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    id: slug,
    slug,
    title: data.title,
    date: data.date,
    tags: data.tags || [],
    content: content
  }
}

export async function getAllPosts(): Promise<Post[]>  {
    return getSortedPostsData()
}

export async function getSortedPostsData(): Promise<Post[]> {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
        id,
        slug: id,
        content: matterResult.content,
        ...(matterResult.data as { date: string; title: string; tags: string[]; thumbnail?: string }),
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
        return 1;
        } else {
        return -1;
        }
    });
}
  
export async function searchPosts(query: string): Promise<Post[]> {
    const allPosts = await getSortedPostsData()
    return allPosts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
    )
}

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; tags: string[] }),
  };
}

export async function generateStaticParams() {
    const posts = await getSortedPostsData()
    return posts.map(post => ({
      slug: post.id
    }))
  }