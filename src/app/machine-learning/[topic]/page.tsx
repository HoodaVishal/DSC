'use client'

export default function MLTopicPage({ params }: { params: { topic: string } }) {
  return <div>Machine Learning: {params.topic}</div>
}