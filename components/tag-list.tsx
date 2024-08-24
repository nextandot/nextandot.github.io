"use client"

import { Button } from "@/components/ui/button"

interface TagListProps {
  tags: string[]
  selectedTag: string | null
  onTagSelect: (tag: string) => void
}

export function TagList({ tags, selectedTag, onTagSelect }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  )
}
