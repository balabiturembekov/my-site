interface TocItem {
  id: string
  text: string
  level: number
}

export function getTableOfContents(content: string): TocItem[] {
  const headings = content.match(/^#{1,6}\s+(.+)$/gm)
  
  if (!headings) return []
  
  return headings.map((heading) => {
    const level = heading.match(/^(#{1,6})\s/)?.[1].length || 2
    const text = heading.replace(/^#{1,6}\s+/, '').trim()
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
    
    return { id, text, level }
  })
}
