'use client'

import React, { useState } from 'react'
import { TagList } from './tag-list'

interface TagListWrapperProps {
  tags: string[]
}

export function TagListWrapper({ tags }: TagListWrapperProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const handleTagSelect = (tag: string) => {
    setSelectedTag(prevTag => prevTag === tag ? null : tag)
    console.log(`Tag selected: ${tag}`)
    // ここに必要なタグ選択ロジックを追加
  }

  return (
    <TagList
      tags={tags}
      selectedTag={selectedTag}
      onTagSelect={handleTagSelect}
    />
  )
}