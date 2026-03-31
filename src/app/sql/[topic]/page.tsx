'use client'

export default function SQLTopicPage({ params }: { params: { topic: string } }) {
  return <div>SQL: {params.topic}</div>
}
