import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { getProjects } from '@/lib/projects'

// プロジェクトの型定義を追加
type Project = {
  slug: string;
  name: string;
  image: string;
  description: string;
  content: string;
  [key: string]: any; // その他のプロパティを許可
};

export default function AppsPage() {
  const apps = getProjects() as Project[];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Our Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app) => (
          <Link href={`/apps/${app.slug}`} key={app.slug}>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <div className="w-full h-48 relative overflow-hidden">
                <Image
                  src={app.image}
                  alt={app.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{app.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{app.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}