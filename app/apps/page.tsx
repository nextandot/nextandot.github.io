import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const apps = [
  { name: 'Task Manager', description: 'A simple task management application' },
  { name: 'Social Dashboard', description: 'Monitor your social media accounts' },
  { name: 'E-commerce Platform', description: 'Sell your products online' },
]

export default function AppsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Our Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {apps.map((app, index) => (
          <Card key={index}>
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