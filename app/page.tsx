import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Nextandotのページへようこそ</h1>
      <p className="mb-4">Nextandotで開発したプロジェクトや開発ブログを載せています。</p>
      <Button asChild>
        <a href="/blog">ブログへ</a>
      </Button>
    </div>
  )
}