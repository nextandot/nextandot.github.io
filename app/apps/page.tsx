import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const apps = [
  { 
    name: 'Urim', 
    description: 'ToDoを管理するネイティブアプリ。対応期日までの日数(URgency)と、ToDoの重要度(IMportance)の二軸で管理します。',
    image: '/images/urim.jpg',
    slug: 'urim'
  },
  { 
    name: 'Score Generator', 
    description: '音源を読み込み、楽譜を表示します。難易度バーを調整することで、譜面の難易度を変更できます。',
    image: '/images/no-image.jpg',
    slug: 'score-generator'
  },
]

export default function AppsPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Our Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app, index) => (
          <Card key={app.slug} className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
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
        ))}
      </div>
    </div>
  )
}