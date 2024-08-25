import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'contents/projects');

export function getProjects() {
    const projectDirs = fs.readdirSync(projectsDirectory);
    return projectDirs.map(dir => {
      const fullPath = path.join(projectsDirectory, dir, 'README.md');
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug: dir,
        name: data.name || dir,
        image: data.image || '/images/projects/no-image.jpg',
        description: data.summary || '',
        content,
        ...data
      };
    });
  }

export function getProjectBySlug(slug: string) {
    const fullPath = path.join(projectsDirectory, slug, 'README.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const subpages = fs.readdirSync(path.join(projectsDirectory, slug), { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    return {
      slug,
      name: data.name || slug, // nameプロパティを追加
      content,
      subpages,
      ...data // その他のフロントマターデータも含める
    };
  }

export function getSubpages(slug: string) {
  const projectDir = path.join(projectsDirectory, slug);
  return fs.readdirSync(projectDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

export function getSubpageBySlug(slug: string, subpage: string) {
    const fullPath = path.join(projectsDirectory, slug, subpage, 'README.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      title: data.title || subpage,
      description: data.description || `${data.title || subpage}の詳細ページです。`,
      content,
      ...data
    };
  }