import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Corpus — Learn Data Science Free',
  description: 'Free data science learning platform covering Python, Machine Learning, Deep Learning, NLP, Statistics, Visualization and SQL.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}