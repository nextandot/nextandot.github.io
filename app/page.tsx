import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Team Site</h1>
      <p className="mb-4">Here you can find information about our team, apps, and blog posts.</p>
      <Button asChild>
        <a href="/blog">Check out our blog</a>
      </Button>
    </div>
  )
}