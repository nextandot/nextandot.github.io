import { Button } from "@/components/ui/button"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nextandot - プロジェクトと開発ブログ',
  description: 'Nextandotで開発したプロジェクトや開発ブログを紹介しています。最新の技術トレンドや開発tips、プロジェクト事例をご覧いただけます。',
  openGraph: {
    title: 'Nextandot - プロジェクトと開発ブログ',
    description: 'Nextandotで開発したプロジェクトや開発ブログを紹介しています。最新の技術トレンドや開発tips、プロジェクト事例をご覧いただけます。',
  },
}

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Nextandotのページへようこそ</h1>
      <p className="mb-4">Nextandotで開発したプロジェクトや開発ブログを載せています。</p>
    </div>
  )
}