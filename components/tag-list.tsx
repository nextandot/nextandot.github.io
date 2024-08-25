import React from 'react'

interface TagListProps {
  tags: string[]
  selectedTag: string | null
  onTagSelect: (tag: string) => void
}

export function TagList({ tags, selectedTag, onTagSelect }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`px-2 py-1 text-sm rounded cursor-pointer ${
            selectedTag === tag
              ? 'bg-[#FD674C] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}