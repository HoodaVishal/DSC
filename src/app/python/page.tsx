'use client'
import Link from 'next/link'
import type { Metadata } from 'next'

/* ============================================================
   SEO METADATA
   ============================================================ */

export const metadata: Metadata = {
  title: 'Python for Data Science — Corpus',
  description:
    'Learn Python for data science from scratch. Variables, data types, functions, OOP, NumPy, Pandas and more. Free, clear, and practical.',
  openGraph: {
    title: 'Python for Data Science — Corpus',
    description:
      'Learn Python for data science from scratch. Free lessons covering variables, functions, NumPy, Pandas and more.',
    type: 'website',
  },
}

/* ============================================================
   DATA
   ============================================================ */

const SUBJECT = {
  name:        'Python',
  slug:        'python',
  icon:        '🐍',
  color:       '#3BE8B0',
  colorSoft:   'rgba(59,232,176,0.08)',
  colorBorder: 'rgba(59,232,176,0.18)',
  colorGlow:   'rgba(59,232,176,0.15)',
  description: 'The foundation of every data scientist\'s toolkit. Master the language before the models.',
  totalTopics: 8,
  totalTime:   '~6 hours',
}

const topics = [
  {
    slug:        'introduction',
    title:       'Introduction to Python',
    description: 'What Python is, why data scientists love it, and how to set up your environment.',
    icon:        '👋',
    level:       'Beginner',
    readTime:    8,
    order:       1,
    tags:        ['setup', 'basics', 'environment'],
  },
  {
    slug:        'variables',
    title:       'Variables & Data Types',
    description: 'Integers, floats, strings and booleans. How Python stores and handles different kinds of data.',
    icon:        '📦',
    level:       'Beginner',
    readTime:    10,
    order:       2,
    tags:        ['variables', 'types', 'casting'],
  },
  {
    slug:        'data-types',
    title:       'Lists, Tuples & Dicts',
    description: 'Python\'s core data structures — how to store, access, and manipulate collections of data.',
    icon:        '🗂️',
    level:       'Beginner',
    readTime:    12,
    order:       3,
    tags:        ['lists', 'tuples', 'dictionaries', 'sets'],
  },
  {
    slug:        'functions',
    title:       'Functions',
    description: 'Write reusable blocks of code. Parameters, return values, lambda functions and scope.',
    icon:        '⚡',
    level:       'Beginner',
    readTime:    10,
    order:       4,
    tags:        ['functions', 'lambda', 'scope', 'args'],
  },
  {
    slug:        'loops',
    title:       'Loops & Conditionals',
    description: 'Control flow with if/else, for loops, while loops, list comprehensions and more.',
    icon:        '🔄',
    level:       'Beginner',
    readTime:    11,
    order:       5,
    tags:        ['for', 'while', 'if/else', 'comprehensions'],
  },
  {
    slug:        'oop',
    title:       'Object-Oriented Python',
    description: 'Classes, objects, inheritance and methods. How Python organises code at scale.',
    icon:        '🏗️',
    level:       'Intermediate',
    readTime:    15,
    order:       6,
    tags:        ['classes', 'objects', 'inheritance', 'methods'],
  },
  {
    slug:        'numpy',
    title:       'NumPy',
    description: 'Fast numerical computation with arrays. The backbone of scientific Python and ML libraries.',
    icon:        '🔢',
    level:       'Intermediate',
    readTime:    14,
    order:       7,
    tags:        ['arrays', 'vectorization', 'math', 'broadcasting'],
  },
  {
    slug:        'pandas',
    title:       'Pandas',
    description: 'Load, clean and analyse tabular data with DataFrames. The most used data science tool.',
    icon:        '🐼',
    level:       'Intermediate',
    readTime:    16,
    order:       8,
    tags:        ['dataframes', 'csv', 'groupby', 'merge', 'cleaning'],
  },
]

const otherSubjects = [
  { name: 'Machine Learning', slug: 'machine-learning', icon: '🤖', color: '#FF6B6B' },
  { name: 'Deep Learning',    slug: 'deep-learning',    icon: '🧠', color: '#C77DFF' },
  { name: 'NLP',              slug: 'nlp',              icon: '💬', color: '#4CC9F0' },
  { name: 'Statistics',       slug: 'statistics',       icon: '📊', color: '#FFD93D' },
  { name: 'Visualization',    slug: 'visualization',    icon: '📈', color: '#FF9A3C' },
  { name: 'SQL',              slug: 'sql',              icon: '🗄️', color: '#06D6A0' },
]

const levelColor: Record<string, string> = {
  Beginner:     '#3BE8B0',
  Intermediate: '#FF9A3C',
  Advanced:     '#FF6B6B',
}

/* ============================================================
   PAGE
   ============================================================ */

export default function PythonPage() {
  const beginnerTopics     = topics.filter(t => t.level === 'Beginner')
  const intermediateTopics = topics.filter(t => t.level === 'Intermediate')

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
          ══════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--color-ink)',
          paddingTop: 'var(--space-9)',
          paddingBottom: 'var(--space-8)',
          borderBottom: '1px solid var(--color-border-soft)',
        }}
      >
        {/* Glow orb */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          top: '-100px', right: '-100px',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${SUBJECT.colorGlow} 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />

        {/* Subtle grid pattern */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,232,176,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,232,176,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Breadcrumb */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-text-dim)',
              marginBottom: 'var(--space-5)',
            }}
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              style={{
                color: 'var(--color-text-dim)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-main)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-dim)')}
            >
              Corpus
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: SUBJECT.color }}>Python</span>
          </nav>

          {/* Subject pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 14px',
              borderRadius: 'var(--radius-full)',
              border: `1px solid ${SUBJECT.colorBorder}`,
              background: SUBJECT.colorSoft,
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: SUBJECT.color,
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-5)',
            }}
          >
            <span style={{ fontSize: 14 }}>🐍</span>
            Python Track
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: 'var(--tracking-tighter)',
              color: 'var(--color-text-bright)',
              maxWidth: '700px',
              marginBottom: 'var(--space-4)',
            }}
          >
            Python for{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3BE8B0, #4CC9F0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Data Science
            </span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: 'var(--text-md)',
              color: 'var(--color-text-mid)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '560px',
              marginBottom: 'var(--space-6)',
            }}
          >
            {SUBJECT.description} From your very first variable to writing
            production-ready data pipelines with Pandas and NumPy.
          </p>

          {/* Meta strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-5)',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-6)',
            }}
          >
            {[
              { label: 'Topics',    value: `${SUBJECT.totalTopics}` },
              { label: 'Est. Time', value: SUBJECT.totalTime         },
              { label: 'Level',     value: 'Beginner → Intermediate'  },
              { label: 'Free',      value: 'Always'                  },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-dim)',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--tracking-wider)',
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: SUBJECT.color,
                  fontWeight: 600,
                }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Start CTA */}
          <Link
            href={`/python/${topics[0].slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              color: 'var(--color-ink)',
              background: SUBJECT.color,
              padding: '12px 26px',
              borderRadius: 'var(--radius-full)',
              textDecoration: 'none',
              transition: 'background var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#52FFCA'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = 'var(--glow-python)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = SUBJECT.color
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            Start from the beginning
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROGRESS OVERVIEW BAR
          ══════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-ink-soft)',
        borderBottom: '1px solid var(--color-border-soft)',
        padding: 'var(--space-4) 0',
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            flexWrap: 'wrap',
          }}>
            {/* Topic count by level */}
            <div style={{ display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
              {[
                { label: 'Beginner',     count: beginnerTopics.length,     color: '#3BE8B0' },
                { label: 'Intermediate', count: intermediateTopics.length,  color: '#FF9A3C' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: item.color,
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-dim)',
                  }}>
                    {item.count} {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Track progress visual */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              flex: 1,
              maxWidth: '320px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-dim)',
                flexShrink: 0,
              }}>
                Track
              </span>
              <div style={{
                flex: 1,
                height: 4,
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: '100%',
                  background: `linear-gradient(90deg, ${SUBJECT.color}, #4CC9F0)`,
                  borderRadius: 'var(--radius-full)',
                }} />
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: SUBJECT.color,
                flexShrink: 0,
              }}>
                {SUBJECT.totalTopics} topics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TOPICS — BEGINNER
          ══════════════════════════════════════════ */}
      <section
        className="section-sm"
        style={{ background: 'var(--color-ink)' }}
      >
        <div className="container">

          {/* Section label */}
          <div style={{ marginBottom: 'var(--space-5)' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: '#3BE8B0',
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-wider)',
              marginBottom: 'var(--space-2)',
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#3BE8B0',
              }} />
              Beginner
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              color: 'var(--color-text-bright)',
              letterSpacing: 'var(--tracking-tight)',
            }}>
              Start here
            </h2>
          </div>

          {/* Topics grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 'var(--space-4)',
            }}
            className="topics-grid"
          >
            {beginnerTopics.map((topic, i) => (
              <TopicCard
                key={topic.slug}
                topic={topic}
                subjectSlug={SUBJECT.slug}
                subjectColor={SUBJECT.color}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TOPICS — INTERMEDIATE
          ══════════════════════════════════════════ */}
      <section
        className="section-sm"
        style={{
          background: 'var(--color-ink-soft)',
          borderTop: '1px solid var(--color-border-soft)',
        }}
      >
        <div className="container">

          {/* Section label */}
          <div style={{ marginBottom: 'var(--space-5)' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: '#FF9A3C',
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-wider)',
              marginBottom: 'var(--space-2)',
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#FF9A3C',
              }} />
              Intermediate
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              color: 'var(--color-text-bright)',
              letterSpacing: 'var(--tracking-tight)',
            }}>
              Go deeper
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 'var(--space-4)',
            }}
            className="topics-grid"
          >
            {intermediateTopics.map((topic, i) => (
              <TopicCard
                key={topic.slug}
                topic={topic}
                subjectSlug={SUBJECT.slug}
                subjectColor={SUBJECT.color}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ORDERED TOPIC LIST (Full curriculum)
          ══════════════════════════════════════════ */}
      <section
        className="section-sm"
        style={{
          background: 'var(--color-ink)',
          borderTop: '1px solid var(--color-border-soft)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
              Full Curriculum
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              color: 'var(--color-text-bright)',
              letterSpacing: 'var(--tracking-tight)',
            }}>
              All {SUBJECT.totalTopics} topics in order
            </h2>
          </div>

          {/* Ordered list */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            maxWidth: '680px',
          }}>
            {topics.map((topic, i) => (
              <CurriculumRow
                key={topic.slug}
                topic={topic}
                subjectSlug={SUBJECT.slug}
                subjectColor={SUBJECT.color}
                index={i}
                isLast={i === topics.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT YOU'LL LEARN
          ══════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--color-ink-soft)',
          borderTop: '1px solid var(--color-border-soft)',
          borderBottom: '1px solid var(--color-border-soft)',
        }}
        className="section-sm"
      >
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-8)',
            alignItems: 'center',
          }}
          className="learn-grid"
          >
            {/* Left — text */}
            <div>
              <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
                What you'll learn
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(var(--text-xl), 3vw, var(--text-2xl))',
                fontWeight: 800,
                color: 'var(--color-text-bright)',
                letterSpacing: 'var(--tracking-tight)',
                marginBottom: 'var(--space-4)',
              }}>
                From zero to data-ready Python.
              </h2>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-dim)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-5)',
              }}>
                By the end of this track you'll be comfortable writing Python
                scripts for data tasks, manipulating datasets with Pandas, and
                running numerical operations with NumPy — the foundation every
                ML and DL library is built on.
              </p>
              <Link
                href={`/python/${topics[0].slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: SUBJECT.color,
                  textDecoration: 'none',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: `1px solid ${SUBJECT.colorBorder}`,
                  background: SUBJECT.colorSoft,
                  transition: 'background var(--transition-fast), transform var(--transition-fast)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(59,232,176,0.14)'
                  el.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = SUBJECT.colorSoft
                  el.style.transform = 'translateY(0)'
                }}
              >
                Begin the track
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right — skills checklist */}
            <div style={{
              background: 'var(--color-ink-muted)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6)',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-dim)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-wider)',
                marginBottom: 'var(--space-4)',
              }}>
                Skills you'll gain
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {[
                  'Write clean, readable Python code',
                  'Work with lists, dicts, and sets',
                  'Build reusable functions and classes',
                  'Process data with loops and comprehensions',
                  'Run fast array math with NumPy',
                  'Load, clean and analyse data with Pandas',
                  'Read and write CSV, JSON, Excel files',
                  'Prepare datasets for ML models',
                ].map(skill => (
                  <div
                    key={skill}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-3)',
                    }}
                  >
                    <div style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      background: 'rgba(59,232,176,0.12)',
                      border: '1px solid rgba(59,232,176,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <CheckIcon />
                    </div>
                    <span style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-main)',
                      lineHeight: 1.5,
                    }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPLORE OTHER SUBJECTS
          ══════════════════════════════════════════ */}
      <section
        className="section-sm"
        style={{ background: 'var(--color-ink)' }}
      >
        <div className="container">
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
              What's next
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              color: 'var(--color-text-bright)',
              letterSpacing: 'var(--tracking-tight)',
            }}>
              Explore other subjects
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 'var(--space-3)',
          }}>
            {otherSubjects.map(subject => (
              <Link
                key={subject.slug}
                href={`/${subject.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-ink-muted)',
                  textDecoration: 'none',
                  transition: 'border-color var(--transition-fast), transform var(--transition-fast), background var(--transition-fast)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${subject.color}35`
                  el.style.background = `${subject.color}08`
                  el.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.background = 'var(--color-ink-muted)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <span style={{ fontSize: 20 }}>{subject.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--color-text-main)',
                }}>
                  {subject.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .topics-grid  { grid-template-columns: 1fr !important; }
          .learn-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

/* ============================================================
   TOPIC CARD — used in the grid sections
   ============================================================ */

function TopicCard({
  topic,
  subjectSlug,
  subjectColor,
  index,
}: {
  topic: typeof topics[0]
  subjectSlug: string
  subjectColor: string
  index: number
}) {
  const lc = levelColor[topic.level] ?? subjectColor

  return (
    <Link
      href={`/${subjectSlug}/${topic.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 'var(--space-5)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border)',
        background: 'var(--color-ink-muted)',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base)',
        animationDelay: `${index * 60}ms`,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-4px)'
        el.style.borderColor = `${subjectColor}35`
        el.style.boxShadow = `var(--shadow-md), 0 0 24px ${subjectColor}14`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.borderColor = 'var(--color-border)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: '3px',
        background: `linear-gradient(180deg, ${subjectColor}, transparent)`,
        borderRadius: '3px 0 0 3px',
      }} />

      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 'var(--space-3)',
        paddingLeft: 'var(--space-2)',
      }}>
        {/* Order + icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-faint)',
            minWidth: '20px',
          }}>
            {String(topic.order).padStart(2, '0')}
          </span>
          <span style={{ fontSize: 20 }}>{topic.icon}</span>
        </div>

        {/* Level badge */}
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          fontWeight: 600,
          color: lc,
          background: `${lc}12`,
          border: `1px solid ${lc}25`,
          padding: '2px 8px',
          borderRadius: 'var(--radius-full)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-wide)',
          whiteSpace: 'nowrap',
        }}>
          {topic.level}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-md)',
        fontWeight: 700,
        color: 'var(--color-text-bright)',
        marginBottom: 'var(--space-2)',
        paddingLeft: 'var(--space-2)',
        letterSpacing: 'var(--tracking-tight)',
      }}>
        {topic.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--color-text-dim)',
        lineHeight: 'var(--leading-relaxed)',
        paddingLeft: 'var(--space-2)',
        flex: 1,
        marginBottom: 'var(--space-4)',
      }}>
        {topic.description}
      </p>

      {/* Tags */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        paddingLeft: 'var(--space-2)',
        marginBottom: 'var(--space-4)',
      }}>
        {topic.tags.slice(0, 3).map(tag => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--color-text-faint)',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border-soft)',
              padding: '2px 7px',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 'var(--space-2)',
        paddingTop: 'var(--space-3)',
        borderTop: '1px solid var(--color-border-soft)',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-dim)',
        }}>
          {topic.readTime} min read
        </span>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: subjectColor,
        }}>
          Read
          <ArrowRight size={11} color={subjectColor} />
        </div>
      </div>
    </Link>
  )
}

/* ============================================================
   CURRICULUM ROW — ordered list view
   ============================================================ */

function CurriculumRow({
  topic,
  subjectSlug,
  subjectColor,
  index,
  isLast,
}: {
  topic: typeof topics[0]
  subjectSlug: string
  subjectColor: string
  index: number
  isLast: boolean
}) {
  const lc = levelColor[topic.level] ?? subjectColor

  return (
    <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'stretch' }}>
      {/* Timeline line */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
        paddingTop: '18px',
      }}>
        {/* Circle */}
        <div style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: `${subjectColor}15`,
          border: `1.5px solid ${subjectColor}35`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          fontWeight: 700,
          color: subjectColor,
          flexShrink: 0,
          zIndex: 1,
        }}>
          {topic.order}
        </div>
        {/* Connector line */}
        {!isLast && (
          <div style={{
            width: '1px',
            flex: 1,
            background: `linear-gradient(${subjectColor}30, transparent)`,
            marginTop: '4px',
            minHeight: '20px',
          }} />
        )}
      </div>

      {/* Row card */}
      <Link
        href={`/${subjectSlug}/${topic.slug}`}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-4)',
          padding: 'var(--space-4) var(--space-5)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border-soft)',
          background: 'var(--color-ink-muted)',
          textDecoration: 'none',
          marginBottom: isLast ? 0 : 'var(--space-1)',
          transition: 'border-color var(--transition-fast), transform var(--transition-fast), background var(--transition-fast)',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = `${subjectColor}30`
          el.style.transform = 'translateX(4px)'
          el.style.background = `${subjectColor}06`
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'var(--color-border-soft)'
          el.style.transform = 'translateX(0)'
          el.style.background = 'var(--color-ink-muted)'
        }}
      >
        {/* Icon */}
        <span style={{ fontSize: 18, flexShrink: 0 }}>{topic.icon}</span>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            color: 'var(--color-text-bright)',
            marginBottom: '2px',
          }}>
            {topic.title}
          </div>
          <div style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-dim)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {topic.description}
          </div>
        </div>

        {/* Meta */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          flexShrink: 0,
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: lc,
            background: `${lc}12`,
            border: `1px solid ${lc}22`,
            padding: '2px 8px',
            borderRadius: 'var(--radius-full)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-wide)',
          }}>
            {topic.level}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-dim)',
            whiteSpace: 'nowrap',
          }}>
            {topic.readTime}m
          </span>
          <ArrowRight size={12} color="var(--color-text-dim)" />
        </div>
      </Link>
    </div>
  )
}

/* ============================================================
   ICONS
   ============================================================ */

function ArrowRight({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path
        d="M1 7H13M8 2L13 7L8 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M2 5L4.5 7.5L8 3"
        stroke="#3BE8B0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}