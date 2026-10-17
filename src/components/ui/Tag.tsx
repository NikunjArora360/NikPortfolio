interface TagProps {
  children: string
}

export function Tag({ children }: TagProps) {
  return <span className="tag">{children}</span>
}

interface TagRowProps {
  tags: string[]
}

export function TagRow({ tags }: TagRowProps) {
  if (tags.length === 0) return null
  return (
    <div className="tag-row">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  )
}
