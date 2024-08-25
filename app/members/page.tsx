import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'メンバー紹介 | Nextandot',
  description: 'Nextandotのチームメンバーを紹介します。多様な経験と専門性を持つメンバーが集まっています。',
  openGraph: {
    title: 'メンバー紹介 | Nextandot',
    description: 'Nextandotのチームメンバーを紹介します。多様な経験と専門性を持つメンバーが集まっています。',
  },
}

const members = [
    {
      name: 'TauX',
      role: '音楽と猫が好きな家電エンジニア',
      description: [
        'シリコンバレー出張が自慢',
        'C++とpythonがメイン。AWS勉強中。',
      ],
      imageUrl: '/images/members/taux.jpg'
    },
    {
      name: 'Ryu',
      role: 'データサイエンティスト 1年生、元SE',
      description: [
        '新しいもの好き。',
        'DataSaberめざしてます。'
      ],
      imageUrl: '/images/members/ryu.jpg'
    },
    {
      name: 'asaiasa',
      role: 'にゃんこ好きな医療機器エンジニア',
      description: [
        'ジム通いでマッチョを目指す',
      ],
      imageUrl: '/images/members/asaiasa.jpg'
    },
    {
      name: 'narugit',
      role: '食が大好きなエンジニア',
      description: [
        'スパイスカレー修行中',
      ],
      imageUrl: '/images/members/narugit.jpg'
    },
    {
      name: 'youseegreen',
      role: 'ぷよぷよと将棋が趣味の大学院生',
      description: [
        'マンホーラーでもある：<a href="https://twitter.com/ManholeBeginner" target="_blank" class="text-blue-500 underline">ManholeBot</a>',
      ],
      imageUrl: '/images/members/youseegreen.jpg'
    },
    {
      name: 'Morita',
      role: '野球（観戦）と犬好きな一般事務職',
      description: [
        '簿記/FP 3級勉強中',
      ],
      imageUrl: '/images/members/morita.jpg'
    },
  ]

  export default function MembersPage() {
    return (
      <div>
      <h1 className="text-3xl font-bold mb-8">Our Team Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <Card key={index} className="overflow-hidden flex flex-col items-center pt-8">
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src={member.imageUrl} alt={member.name} />
                <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
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