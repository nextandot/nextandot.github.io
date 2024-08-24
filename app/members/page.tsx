import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const members = [
  { name: 'John Doe', role: 'Developer' },
  { name: 'Jane Smith', role: 'Designer' },
  { name: 'Bob Johnson', role: 'Project Manager' },
]

export default function MembersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Our Team Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}