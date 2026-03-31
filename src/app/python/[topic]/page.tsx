'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

/* ============================================================
   TYPES
   ============================================================ */

interface Topic {
  slug:        string
  title:       string
  description: string
  icon:        string
  level:       'Beginner' | 'Intermediate' | 'Advanced'
  readTime:    number
  order:       number
  tags:        string[]
}

interface TocItem {
  id:    string
  text:  string
  level: number
}

/* ============================================================
   DATA — mirrors python/page.tsx topics array
   In a real app this comes from your content layer / MDX
   ============================================================ */

const TOPICS: Topic[] = [
  {
    slug: 'introduction',      title: 'Introduction to Python',
    description: 'What Python is, why data scientists love it, and how to set up your environment.',
    icon: '👋', level: 'Beginner',     readTime: 8,  order: 1,
    tags: ['setup', 'basics', 'environment'],
  },
  {
    slug: 'variables',         title: 'Variables & Data Types',
    description: 'Integers, floats, strings and booleans. How Python stores and handles different kinds of data.',
    icon: '📦', level: 'Beginner',     readTime: 10, order: 2,
    tags: ['variables', 'types', 'casting'],
  },
  {
    slug: 'data-types',        title: 'Lists, Tuples & Dicts',
    description: 'Python\'s core data structures — how to store, access, and manipulate collections of data.',
    icon: '🗂️', level: 'Beginner',     readTime: 12, order: 3,
    tags: ['lists', 'tuples', 'dictionaries', 'sets'],
  },
  {
    slug: 'functions',         title: 'Functions',
    description: 'Write reusable blocks of code. Parameters, return values, lambda functions and scope.',
    icon: '⚡', level: 'Beginner',     readTime: 10, order: 4,
    tags: ['functions', 'lambda', 'scope', 'args'],
  },
  {
    slug: 'loops',             title: 'Loops & Conditionals',
    description: 'Control flow with if/else, for loops, while loops, list comprehensions and more.',
    icon: '🔄', level: 'Beginner',     readTime: 11, order: 5,
    tags: ['for', 'while', 'if/else', 'comprehensions'],
  },
  {
    slug: 'oop',               title: 'Object-Oriented Python',
    description: 'Classes, objects, inheritance and methods. How Python organises code at scale.',
    icon: '🏗️', level: 'Intermediate', readTime: 15, order: 6,
    tags: ['classes', 'objects', 'inheritance', 'methods'],
  },
  {
    slug: 'numpy',             title: 'NumPy',
    description: 'Fast numerical computation with arrays. The backbone of scientific Python and ML libraries.',
    icon: '🔢', level: 'Intermediate', readTime: 14, order: 7,
    tags: ['arrays', 'vectorization', 'math', 'broadcasting'],
  },
  {
    slug: 'pandas',            title: 'Pandas',
    description: 'Load, clean and analyse tabular data with DataFrames. The most used data science tool.',
    icon: '🐼', level: 'Intermediate', readTime: 16, order: 8,
    tags: ['dataframes', 'csv', 'groupby', 'merge', 'cleaning'],
  },
]

const SUBJECT = {
  name:   'Python',
  slug:   'python',
  color:  '#3BE8B0',
  soft:   'rgba(59,232,176,0.08)',
  border: 'rgba(59,232,176,0.18)',
}

const levelColor: Record<string, string> = {
  Beginner:     '#3BE8B0',
  Intermediate: '#FF9A3C',
  Advanced:     '#FF6B6B',
}

/* ============================================================
   STATIC CONTENT MAP
   Each topic slug maps to its lesson content (HTML string).
   When you add MDX later, this gets replaced by the MDX renderer.
   ============================================================ */

const CONTENT: Record<string, string> = {
  introduction: `
    <h2 id="what-is-python">What is Python?</h2>
    <p>Python is a high-level, interpreted programming language known for its clean, readable syntax. Created by Guido van Rossum in 1991, it has become the dominant language in data science, machine learning, and AI.</p>
    <div class="callout callout-tip"><div class="callout-icon">💡</div><div class="callout-body"><div class="callout-title">Why Python for Data Science?</div><div class="callout-desc">Python has the largest ecosystem of data science libraries — NumPy, Pandas, Scikit-learn, TensorFlow and PyTorch are all Python-first. Learning Python means you can use all of them.</div></div></div>

    <h2 id="installing-python">Installing Python</h2>
    <p>The easiest way to get started is to install <strong>Anaconda</strong>, which bundles Python with the most commonly used data science packages.</p>
    <pre><code><span style="color:#5A5A7A"># Verify Python is installed</span>
<span style="color:#4CC9F0">python</span> <span style="color:#FF9A3C">--version</span>
<span style="color:#5A5A7A"># Python 3.11.5</span>

<span style="color:#5A5A7A"># Open the interactive Python shell</span>
<span style="color:#4CC9F0">python</span>
<span style="color:#5A5A7A">>>> </span><span style="color:#3BE8B0">print</span>(<span style="color:#FFD93D">"Hello, Data Science!"</span>)
<span style="color:#E0E0F0">Hello, Data Science!</span></code></pre>

    <h2 id="your-first-program">Your First Python Program</h2>
    <p>Python code is designed to be readable. Here's a simple program that demonstrates the basics:</p>
    <pre><code><span style="color:#5A5A7A"># This is a comment — Python ignores it</span>
<span style="color:#3BE8B0">print</span>(<span style="color:#FFD93D">"I'm learning Python for Data Science"</span>)

<span style="color:#5A5A7A"># Variables don't need type declarations</span>
<span style="color:#E0E0F0">name</span> = <span style="color:#FFD93D">"Corpus"</span>
<span style="color:#E0E0F0">year</span> = <span style="color:#FF9A3C">2024</span>
<span style="color:#3BE8B0">print</span>(<span style="color:#FFD93D">f"Welcome to {name}, est. {year}"</span>)
<span style="color:#5A5A7A"># Welcome to Corpus, est. 2024</span></code></pre>

    <h2 id="python-vs-r">Python vs R</h2>
    <p>Both Python and R are used in data science. Here's when to use each:</p>
    <table>
      <thead><tr><th>Python</th><th>R</th></tr></thead>
      <tbody>
        <tr><td>General-purpose programming</td><td>Statistical computing</td></tr>
        <tr><td>Machine learning &amp; deep learning</td><td>Academic research</td></tr>
        <tr><td>Production deployment</td><td>Statistical visualization</td></tr>
        <tr><td>Web scraping &amp; automation</td><td>Bioinformatics</td></tr>
      </tbody>
    </table>
    <div class="callout callout-info"><div class="callout-icon">ℹ️</div><div class="callout-body"><div class="callout-title">Recommendation</div><div class="callout-desc">Learn Python first. It covers 95% of data science use cases and opens the door to ML, deep learning, and production systems.</div></div></div>

    <h2 id="next-steps">Next Steps</h2>
    <p>Now that Python is installed and you've run your first program, move to the next topic to learn about <strong>variables and data types</strong> — the building blocks of every Python program.</p>
  `,

  variables: `
    <h2 id="what-are-variables">What are Variables?</h2>
    <p>A variable is a named container that stores a value. In Python, you create a variable simply by assigning a value to a name — no type declaration needed.</p>
    <pre><code><span style="color:#5A5A7A"># Creating variables</span>
<span style="color:#E0E0F0">age</span>         = <span style="color:#FF9A3C">25</span>
<span style="color:#E0E0F0">temperature</span> = <span style="color:#FF9A3C">98.6</span>
<span style="color:#E0E0F0">name</span>        = <span style="color:#FFD93D">"Alice"</span>
<span style="color:#E0E0F0">is_student</span>  = <span style="color:#C77DFF">True</span>

<span style="color:#3BE8B0">print</span>(<span style="color:#E0E0F0">age</span>, <span style="color:#E0E0F0">temperature</span>, <span style="color:#E0E0F0">name</span>, <span style="color:#E0E0F0">is_student</span>)
<span style="color:#5A5A7A"># 25 98.6 Alice True</span></code></pre>

    <h2 id="data-types">Core Data Types</h2>
    <p>Python has four primitive data types you'll use constantly:</p>
    <pre><code><span style="color:#5A5A7A"># int — whole numbers</span>
<span style="color:#E0E0F0">count</span> = <span style="color:#FF9A3C">42</span>
<span style="color:#E0E0F0">negative</span> = <span style="color:#FF9A3C">-7</span>

<span style="color:#5A5A7A"># float — decimal numbers</span>
<span style="color:#E0E0F0">pi</span>     = <span style="color:#FF9A3C">3.14159</span>
<span style="color:#E0E0F0">weight</span> = <span style="color:#FF9A3C">72.5</span>

<span style="color:#5A5A7A"># str — text</span>
<span style="color:#E0E0F0">greeting</span> = <span style="color:#FFD93D">"Hello World"</span>
<span style="color:#E0E0F0">city</span>     = <span style="color:#FFD93D">'London'</span>   <span style="color:#5A5A7A"># single or double quotes both work</span>

<span style="color:#5A5A7A"># bool — True or False</span>
<span style="color:#E0E0F0">is_active</span> = <span style="color:#C77DFF">True</span>
<span style="color:#E0E0F0">has_data</span>  = <span style="color:#C77DFF">False</span></code></pre>

    <h2 id="type-checking">Checking Types</h2>
    <p>Use the built-in <code>type()</code> function to check the type of any variable:</p>
    <pre><code><span style="color:#3BE8B0">print</span>(<span style="color:#3BE8B0">type</span>(<span style="color:#FF9A3C">42</span>))        <span style="color:#5A5A7A"># &lt;class 'int'&gt;</span>
<span style="color:#3BE8B0">print</span>(<span style="color:#3BE8B0">type</span>(<span style="color:#FF9A3C">3.14</span>))      <span style="color:#5A5A7A"># &lt;class 'float'&gt;</span>
<span style="color:#3BE8B0">print</span>(<span style="color:#3BE8B0">type</span>(<span style="color:#FFD93D">"hello"</span>))   <span style="color:#5A5A7A"># &lt;class 'str'&gt;</span>
<span style="color:#3BE8B0">print</span>(<span style="color:#3BE8B0">type</span>(<span style="color:#C77DFF">True</span>))      <span style="color:#5A5A7A"># &lt;class 'bool'&gt;</span></code></pre>

    <h2 id="type-conversion">Type Conversion</h2>
    <p>You can convert between types using built-in functions:</p>
    <pre><code><span style="color:#E0E0F0">x</span> = <span style="color:#FFD93D">"42"</span>              <span style="color:#5A5A7A"># this is a string</span>
<span style="color:#E0E0F0">y</span> = <span style="color:#3BE8B0">int</span>(<span style="color:#E0E0F0">x</span>)           <span style="color:#5A5A7A"># convert to int → 42</span>
<span style="color:#E0E0F0">z</span> = <span style="color:#3BE8B0">float</span>(<span style="color:#E0E0F0">x</span>)         <span style="color:#5A5A7A"># convert to float → 42.0</span>
<span style="color:#E0E0F0">s</span> = <span style="color:#3BE8B0">str</span>(<span style="color:#FF9A3C">100</span>)         <span style="color:#5A5A7A"># convert int to string → "100"</span>

<span style="color:#5A5A7A"># f-strings — the modern way to build strings</span>
<span style="color:#E0E0F0">score</span> = <span style="color:#FF9A3C">95.5</span>
<span style="color:#3BE8B0">print</span>(<span style="color:#FFD93D">f"Your score is {score:.1f}%"</span>)
<span style="color:#5A5A7A"># Your score is 95.5%</span></code></pre>

    <div class="callout callout-warning"><div class="callout-icon">⚠️</div><div class="callout-body"><div class="callout-title">Common Mistake</div><div class="callout-desc">You can't add a string and an integer directly. Use int() or str() to convert first, or use f-strings to combine them.</div></div></div>
  `,
}

/* ============================================================
   MAIN PAGE COMPONENT
   ============================================================ */

export default function TopicPage({
  params,
}: {
  params: { topic: string }
}) {
  const topic   = TOPICS.find(t => t.slug === params.topic) ?? TOPICS[0]
  const content = CONTENT[topic.slug] ?? CONTENT['introduction']

  const currentIndex = TOPICS.findIndex(t => t.slug === topic.slug)
  const prevTopic    = currentIndex > 0             ? TOPICS[currentIndex - 1] : null
  const nextTopic    = currentIndex < TOPICS.length - 1 ? TOPICS[currentIndex + 1] : null

  const lc = levelColor[topic.level] ?? SUBJECT.color

  return (
    <>
      {/* Reading progress bar */}
      <ReadingProgressBar color={SUBJECT.color} />

      <div style={{
        display:   'grid',
        gridTemplateColumns: '260px 1fr 220px',
        minHeight: '100vh',
        background: 'var(--color-ink)',
        maxWidth: 'var(--content-width)',
        margin: '0 auto',
        padding: '0 var(--content-padding)',
        gap: 'var(--space-8)',
      }}
      className="lesson-layout"
      >

        {/* ════════════════════════════════════
            LEFT SIDEBAR — Topic list
            ════════════════════════════════════ */}
        <aside
          style={{
            position:  'sticky',
            top:       'calc(var(--nav-height) + 24px)',
            height:    'fit-content',
            maxHeight: 'calc(100vh - var(--nav-height) - 48px)',
            overflowY: 'auto',
            paddingTop: 'var(--space-7)',
            paddingBottom: 'var(--space-6)',
            scrollbarWidth: 'none',
          }}
          className="left-sidebar"
        >
          {/* Subject link */}
          <Link
            href={`/${SUBJECT.slug}`}
            style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '8px',
              fontFamily: 'var(--font-mono)',
              fontSize:   'var(--text-xs)',
              color:      SUBJECT.color,
              textDecoration: 'none',
              marginBottom:   'var(--space-5)',
              letterSpacing:  'var(--tracking-wider)',
              textTransform:  'uppercase',
            }}
          >
            <ArrowLeft size={12} />
            Python
          </Link>

          {/* Section labels + topic links */}
          {(['Beginner', 'Intermediate'] as const).map(level => {
            const levelTopics = TOPICS.filter(t => t.level === level)
            if (!levelTopics.length) return null
            return (
              <div key={level} style={{ marginBottom: 'var(--space-5)' }}>
                <p style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      'var(--text-xs)',
                  color:         levelColor[level],
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--tracking-wider)',
                  marginBottom:  'var(--space-2)',
                  paddingLeft:   'var(--space-3)',
                }}>
                  {level}
                </p>
                {levelTopics.map(t => (
                  <SidebarLink
                    key={t.slug}
                    topic={t}
                    isActive={t.slug === topic.slug}
                    subjectSlug={SUBJECT.slug}
                    activeColor={SUBJECT.color}
                  />
                ))}
              </div>
            )
          })}
        </aside>

        {/* ════════════════════════════════════
            MAIN CONTENT
            ════════════════════════════════════ */}
        <main style={{
          paddingTop:    'var(--space-7)',
          paddingBottom: 'var(--space-10)',
          minWidth:      0,
        }}>

          {/* Breadcrumb */}
          <nav style={{
            display:    'flex',
            alignItems: 'center',
            gap:        '6px',
            fontFamily: 'var(--font-mono)',
            fontSize:   'var(--text-xs)',
            color:      'var(--color-text-dim)',
            marginBottom: 'var(--space-5)',
          }}>
            <Link href="/" style={{ color: 'var(--color-text-dim)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-main)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-dim)')}
            >Corpus</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/python" style={{ color: 'var(--color-text-dim)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = SUBJECT.color)}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-dim)')}
            >Python</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: SUBJECT.color }}>{topic.title}</span>
          </nav>

          {/* Topic header */}
          <header style={{ marginBottom: 'var(--space-7)' }}>
            {/* Level + read time row */}
            <div style={{
              display:    'flex',
              alignItems: 'center',
              gap:        'var(--space-3)',
              marginBottom: 'var(--space-4)',
              flexWrap:   'wrap',
            }}>
              <span style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      10,
                fontWeight:    600,
                color:         lc,
                background:    `${lc}12`,
                border:        `1px solid ${lc}25`,
                padding:       '3px 10px',
                borderRadius:  'var(--radius-full)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-wide)',
              }}>
                {topic.level}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize:   'var(--text-xs)',
                color:      'var(--color-text-dim)',
              }}>
                {topic.readTime} min read
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize:   'var(--text-xs)',
                color:      'var(--color-text-dim)',
              }}>
                Topic {topic.order} of {TOPICS.length}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight:    800,
              lineHeight:    1.1,
              letterSpacing: 'var(--tracking-tighter)',
              color:         'var(--color-text-bright)',
              marginBottom:  'var(--space-4)',
            }}>
              {topic.icon} {topic.title}
            </h1>

            {/* Description */}
            <p style={{
              fontSize:   'var(--text-md)',
              color:      'var(--color-text-mid)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth:   '60ch',
              marginBottom: 'var(--space-4)',
            }}>
              {topic.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {topic.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily:   'var(--font-mono)',
                  fontSize:     10,
                  color:        'var(--color-text-dim)',
                  background:   'var(--color-ink-muted)',
                  border:       '1px solid var(--color-border-soft)',
                  padding:      '2px 8px',
                  borderRadius: 'var(--radius-sm)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Divider */}
          <div style={{
            height:       '1px',
            background:   `linear-gradient(90deg, ${SUBJECT.color}40, var(--color-border), transparent)`,
            marginBottom: 'var(--space-7)',
          }} />

          {/* MDX / Lesson Content */}
          <article
            className="mdx-content"
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ maxWidth: '72ch' }}
          />

          {/* Divider */}
          <div style={{
            height:      '1px',
            background:  'var(--color-border)',
            marginBlock: 'var(--space-8)',
          }} />

          {/* ── Prev / Next Navigation ── */}
          <nav
            style={{
              display:             'grid',
              gridTemplateColumns: prevTopic ? '1fr 1fr' : '1fr',
              gap:                 'var(--space-4)',
            }}
            aria-label="Topic navigation"
          >
            {prevTopic && (
              <Link
                href={`/python/${prevTopic.slug}`}
                style={{
                  display:       'flex',
                  flexDirection: 'column',
                  gap:           'var(--space-2)',
                  padding:       'var(--space-5)',
                  borderRadius:  'var(--radius-lg)',
                  border:        '1px solid var(--color-border)',
                  background:    'var(--color-ink-muted)',
                  textDecoration:'none',
                  transition:    'border-color var(--transition-fast), transform var(--transition-fast)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${SUBJECT.color}35`
                  el.style.transform   = 'translateX(-3px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.transform   = 'translateX(0)'
                }}
              >
                <span style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      'var(--text-xs)',
                  color:         'var(--color-text-dim)',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--tracking-wider)',
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '6px',
                }}>
                  <ArrowLeft size={11} /> Previous
                </span>
                <span style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'var(--text-sm)',
                  fontWeight:    600,
                  color:         'var(--color-text-bright)',
                }}>
                  {prevTopic.icon} {prevTopic.title}
                </span>
              </Link>
            )}

            {nextTopic && (
              <Link
                href={`/python/${nextTopic.slug}`}
                style={{
                  display:       'flex',
                  flexDirection: 'column',
                  alignItems:    'flex-end',
                  gap:           'var(--space-2)',
                  padding:       'var(--space-5)',
                  borderRadius:  'var(--radius-lg)',
                  border:        '1px solid var(--color-border)',
                  background:    'var(--color-ink-muted)',
                  textDecoration:'none',
                  gridColumn:    prevTopic ? 'auto' : '1',
                  marginLeft:    prevTopic ? '0' : 'auto',
                  width:         prevTopic ? '100%' : '50%',
                  transition:    'border-color var(--transition-fast), transform var(--transition-fast), background var(--transition-fast)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${SUBJECT.color}35`
                  el.style.transform   = 'translateX(3px)'
                  el.style.background  = SUBJECT.soft
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.transform   = 'translateX(0)'
                  el.style.background  = 'var(--color-ink-muted)'
                }}
              >
                <span style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      'var(--text-xs)',
                  color:         SUBJECT.color,
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--tracking-wider)',
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '6px',
                }}>
                  Next <ArrowRight size={11} />
                </span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize:   'var(--text-sm)',
                  fontWeight: 600,
                  color:      'var(--color-text-bright)',
                  textAlign:  'right',
                }}>
                  {nextTopic.icon} {nextTopic.title}
                </span>
              </Link>
            )}
          </nav>
        </main>

        {/* ════════════════════════════════════
            RIGHT SIDEBAR — Table of Contents
            ════════════════════════════════════ */}
        <aside
          style={{
            position:  'sticky',
            top:       'calc(var(--nav-height) + 24px)',
            height:    'fit-content',
            maxHeight: 'calc(100vh - var(--nav-height) - 48px)',
            overflowY: 'auto',
            paddingTop: 'var(--space-7)',
            paddingBottom: 'var(--space-6)',
            scrollbarWidth: 'none',
          }}
          className="right-sidebar"
        >
          <TableOfContents content={content} color={SUBJECT.color} />
        </aside>

      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (max-width: 1100px) {
          .lesson-layout {
            grid-template-columns: 240px 1fr !important;
          }
          .right-sidebar { display: none !important; }
        }
        @media (max-width: 768px) {
          .lesson-layout {
            grid-template-columns: 1fr !important;
            padding: 0 var(--space-4) !important;
            gap: 0 !important;
          }
          .left-sidebar { display: none !important; }
        }

        /* MDX content styles applied inside the article */
        .mdx-content h2 {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--color-text-bright);
          margin-top: var(--space-8);
          margin-bottom: var(--space-4);
          padding-bottom: var(--space-3);
          border-bottom: 1px solid var(--color-border);
          letter-spacing: var(--tracking-tight);
          scroll-margin-top: calc(var(--nav-height) + 24px);
        }
        .mdx-content h3 {
          font-family: var(--font-display);
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--color-text-bright);
          margin-top: var(--space-6);
          margin-bottom: var(--space-3);
          scroll-margin-top: calc(var(--nav-height) + 24px);
        }
        .mdx-content p {
          font-size: var(--text-base);
          color: var(--color-text-main);
          line-height: var(--leading-relaxed);
          margin-bottom: var(--space-4);
        }
        .mdx-content pre {
          background: var(--color-ink-soft);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          overflow-x: auto;
          margin-block: var(--space-5);
          font-family: var(--font-mono);
          font-size: 13px;
          line-height: 1.8;
          position: relative;
        }
        .mdx-content code {
          font-family: var(--font-mono);
        }
        .mdx-content strong {
          font-weight: 600;
          color: var(--color-text-bright);
        }
        .mdx-content table {
          width: 100%;
          border-collapse: collapse;
          margin-block: var(--space-5);
          font-size: var(--text-sm);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .mdx-content th {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--color-text-dim);
          background: var(--color-ink-muted);
          padding: var(--space-3) var(--space-4);
          text-align: left;
          border-bottom: 1px solid var(--color-border);
          text-transform: uppercase;
          letter-spacing: var(--tracking-wider);
        }
        .mdx-content td {
          padding: var(--space-3) var(--space-4);
          border-bottom: 1px solid var(--color-border-soft);
          color: var(--color-text-main);
          font-size: var(--text-sm);
        }
        .mdx-content tr:last-child td { border-bottom: none; }
        .mdx-content tr:hover td { background: var(--color-ink-muted); }
        .mdx-content ul {
          list-style: none;
          margin-bottom: var(--space-4);
          padding-left: var(--space-4);
        }
        .mdx-content ul li {
          position: relative;
          padding-left: var(--space-4);
          margin-bottom: var(--space-2);
          color: var(--color-text-main);
          font-size: var(--text-base);
          line-height: var(--leading-relaxed);
        }
        .mdx-content ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 11px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #3BE8B0;
        }
        .mdx-content a {
          color: var(--color-primary);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(59,232,176,0.3);
        }
        .mdx-content a:hover {
          text-decoration-color: var(--color-primary);
        }
      `}</style>
    </>
  )
}

/* ============================================================
   READING PROGRESS BAR
   ============================================================ */

function ReadingProgressBar({ color }: { color: string }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop    = window.scrollY
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight
      const pct          = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, pct)))
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top:      'var(--nav-height)',
      left:     0,
      right:    0,
      height:   '2px',
      background: 'var(--color-border-soft)',
      zIndex:   999,
    }}>
      <div style={{
        height:     '100%',
        width:      `${progress}%`,
        background: `linear-gradient(90deg, ${color}, #4CC9F0)`,
        transition: 'width 0.1s linear',
        borderRadius: '0 2px 2px 0',
      }} />
    </div>
  )
}

/* ============================================================
   TABLE OF CONTENTS
   ============================================================ */

function TableOfContents({ content, color }: { content: string; color: string }) {
  const [activeId, setActiveId] = useState('')

  /* Parse headings from HTML string */
  const headings: TocItem[] = []
  const regex = /<h([23])\s+id="([^"]+)"[^>]*>([^<]+)/g
  let match
  while ((match = regex.exec(content)) !== null) {
    headings.push({
      level: parseInt(match[1]),
      id:    match[2],
      text:  match[3].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
    })
  }

  /* Intersection observer to highlight active heading */
  useEffect(() => {
    if (!headings.length) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-80px 0px -70% 0px' }
    )
    headings.forEach(h => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [content])

  if (!headings.length) return null

  return (
    <div>
      <p style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      'var(--text-xs)',
        color:         'var(--color-text-dim)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wider)',
        marginBottom:  'var(--space-4)',
      }}>
        On this page
      </p>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {headings.map(h => {
          const isActive = activeId === h.id
          return (
            <a
              key={h.id}
              href={`#${h.id}`}
              style={{
                display:        'block',
                fontFamily:     'var(--font-body)',
                fontSize:       'var(--text-xs)',
                lineHeight:     1.5,
                color:          isActive ? color : 'var(--color-text-dim)',
                textDecoration: 'none',
                paddingBlock:   '4px',
                paddingLeft:    h.level === 3 ? 'var(--space-4)' : 'var(--space-2)',
                borderLeft:     `2px solid ${isActive ? color : 'var(--color-border)'}`,
                transition:     'color var(--transition-fast), border-color var(--transition-fast)',
                fontWeight:     isActive ? 500 : 400,
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLElement
                  el.style.color       = 'var(--color-text-main)'
                  el.style.borderColor = 'var(--color-text-dim)'
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLElement
                  el.style.color       = 'var(--color-text-dim)'
                  el.style.borderColor = 'var(--color-border)'
                }
              }}
            >
              {h.text}
            </a>
          )
        })}
      </nav>
    </div>
  )
}

/* ============================================================
   SIDEBAR LINK
   ============================================================ */

function SidebarLink({
  topic, isActive, subjectSlug, activeColor,
}: {
  topic:        Topic
  isActive:     boolean
  subjectSlug:  string
  activeColor:  string
}) {
  return (
    <Link
      href={`/${subjectSlug}/${topic.slug}`}
      style={{
        display:        'flex',
        alignItems:     'center',
        gap:            '8px',
        padding:        '7px var(--space-3)',
        borderRadius:   'var(--radius-md)',
        textDecoration: 'none',
        background:     isActive ? `${activeColor}12` : 'transparent',
        border:         `1px solid ${isActive ? activeColor + '25' : 'transparent'}`,
        transition:     'background var(--transition-fast), border-color var(--transition-fast)',
        marginBottom:   '2px',
      }}
      onMouseEnter={e => {
        if (!isActive) {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'var(--color-ink-muted)'
        }
      }}
      onMouseLeave={e => {
        if (!isActive) {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'transparent'
        }
      }}
    >
      {/* Order number */}
      <span style={{
        fontFamily:  'var(--font-mono)',
        fontSize:    10,
        color:       isActive ? activeColor : 'var(--color-text-faint)',
        minWidth:    '18px',
        textAlign:   'right',
        flexShrink:  0,
      }}>
        {String(topic.order).padStart(2, '0')}
      </span>

      {/* Title */}
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize:   'var(--text-xs)',
        fontWeight: isActive ? 500 : 400,
        color:      isActive ? activeColor : 'var(--color-text-dim)',
        lineHeight: 1.4,
        flex:       1,
      }}>
        {topic.title}
      </span>

      {/* Active indicator dot */}
      {isActive && (
        <div style={{
          width:        5,
          height:       5,
          borderRadius: '50%',
          background:   activeColor,
          flexShrink:   0,
        }} />
      )}
    </Link>
  )
}

/* ============================================================
   ICONS
   ============================================================ */

function ArrowRight({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M1 7H13M8 2L13 7L8 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowLeft({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M13 7H1M6 2L1 7L6 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}