import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const members = [
    {
      name: 'TauX',
      role: '音楽と猫が好きな家電エンジニア',
      description: [
        'シリコンバレー出張が自慢',
        'C++とpythonがメイン。AWS勉強中。',
      ],
      imageUrl: '/images/taux.jpg'
    },
    {
      name: 'Ryu',
      role: 'データサイエンティスト 1年生、元SE',
      description: [
        '新しいもの好き。',
        'DataSaberめざしてます。'
      ],
      imageUrl: '/images/ryu.jpg'
    },
    {
      name: 'asaiasa',
      role: 'にゃんこ好きな医療機器エンジニア',
      description: [
        'ジム通いでマッチョを目指す',
      ],
      imageUrl: '/images/asaiasa.jpg'
    },
    {
      name: 'narugit',
      role: '食が大好きなエンジニア',
      description: [
        'スパイスカレー修行中',
      ],
      imageUrl: '/images/narugit.jpg'
    },
    {
      name: 'youseegreen',
      role: 'ぷよぷよと将棋が趣味の大学院生',
      description: [
        'マンホーラーでもある：<a href="https://twitter.com/ManholeBeginner" target="_blank" class="text-blue-500 underline">ManholeBot</a>',
      ],
      imageUrl: '/images/youseegreen.jpg'
    },
    {
      name: 'Morita',
      role: '野球（観戦）と犬好きな一般事務職',
      description: [
        '簿記/FP 3級勉強中',
      ],
      imageUrl: '/images/morita.jpg'
    },
  ]

  export default function MembersPage() {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Team Members</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Card key={index} className="overflow-hidden flex flex-col items-center">
              <div className="w-64 h-64 overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <p className="text-sm text-gray-500">{member.role}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {member.description.map((item, i) => (
                    <li key={i} className="text-sm" dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }