'use client'
import Link from 'next/link'
import type { Metadata } from 'next'

/* ============================================================
   SEO METADATA
   ============================================================ */

export const metadata: Metadata = {
  title: 'Corpus — Learn Data Science Free',
  description:
    'Master Python, Machine Learning, Deep Learning, NLP, Statistics, Visualization and SQL. Free, open, and built for depth.',
  openGraph: {
    title: 'Corpus — Learn Data Science Free',
    description:
      'Master Python, Machine Learning, Deep Learning, NLP, Statistics, Visualization and SQL.',
    type: 'website',
  },
}

/* ============================================================
   DATA
   ============================================================ */

const subjects = [
  {
    name: 'Python',
    slug: 'python',
    color: '#3BE8B0',
    bgColor: 'rgba(59,232,176,0.07)',
    borderColor: 'rgba(59,232,176,0.15)',
    icon: '🐍',
    description:
      'The foundation of every data scientist\'s toolkit. From variables to Pandas, NumPy to OOP.',
    topics: [
      'Introduction', 'Variables & Types', 'Data Structures',
      'Functions', 'Loops', 'OOP', 'NumPy', 'Pandas',
    ],
    topicCount: 8,
    level: 'Start Here',
  },
  {
    name: 'Machine Learning',
    slug: 'machine-learning',
    color: '#FF6B6B',
    bgColor: 'rgba(255,107,107,0.07)',
    borderColor: 'rgba(255,107,107,0.15)',
    icon: '🤖',
    description:
      'Algorithms that learn patterns from data. Regression, trees, clustering and model evaluation.',
    topics: [
      'Introduction', 'Linear Regression', 'Decision Trees',
      'Random Forest', 'SVM', 'Clustering', 'Model Evaluation',
    ],
    topicCount: 7,
    level: 'Intermediate',
  },
  {
    name: 'Deep Learning',
    slug: 'deep-learning',
    color: '#C77DFF',
    bgColor: 'rgba(199,125,255,0.07)',
    borderColor: 'rgba(199,125,255,0.15)',
    icon: '🧠',
    description:
      'Neural networks, CNNs, RNNs and Transformers. Build and train models with PyTorch.',
    topics: [
      'Introduction', 'Neural Networks', 'CNNs',
      'RNNs', 'Transformers', 'PyTorch',
    ],
    topicCount: 6,
    level: 'Advanced',
  },
  {
    name: 'NLP',
    slug: 'nlp',
    color: '#4CC9F0',
    bgColor: 'rgba(76,201,240,0.07)',
    borderColor: 'rgba(76,201,240,0.15)',
    icon: '💬',
    description:
      'Teaching machines to read, understand and generate language. Tokenization to LLMs.',
    topics: [
      'Introduction', 'Tokenization', 'Text Preprocessing',
      'Word Embeddings', 'Sentiment Analysis', 'Hugging Face',
    ],
    topicCount: 6,
    level: 'Advanced',
  },
  {
    name: 'Statistics',
    slug: 'statistics',
    color: '#FFD93D',
    bgColor: 'rgba(255,217,61,0.07)',
    borderColor: 'rgba(255,217,61,0.15)',
    icon: '📊',
    description:
      'The mathematical backbone of every model. Probability, distributions and hypothesis testing.',
    topics: [
      'Descriptive Stats', 'Probability',
      'Hypothesis Testing', 'Distributions',
    ],
    topicCount: 4,
    level: 'Intermediate',
  },
  {
    name: 'Visualization',
    slug: 'visualization',
    color: '#FF9A3C',
    bgColor: 'rgba(255,154,60,0.07)',
    borderColor: 'rgba(255,154,60,0.15)',
    icon: '📈',
    description:
      'Turn raw data into clear insights. Matplotlib, Seaborn and Plotly for interactive charts.',
    topics: ['Matplotlib', 'Seaborn', 'Plotly'],
    topicCount: 3,
    level: 'Beginner',
  },
  {
    name: 'SQL',
    slug: 'sql',
    color: '#06D6A0',
    bgColor: 'rgba(6,214,160,0.07)',
    borderColor: 'rgba(6,214,160,0.15)',
    icon: '🗄️',
    description:
      'Query, filter and aggregate data from relational databases. The language every analyst needs.',
    topics: ['Basics', 'Joins', 'Aggregations'],
    topicCount: 3,
    level: 'Start Here',
  },
]

const stats = [
  { value: '7',    label: 'Subjects',    color: '#3BE8B0' },
  { value: '37+',  label: 'Topics',      color: '#4CC9F0' },
  { value: '100%', label: 'Free',        color: '#C77DFF' },
  { value: '0',    label: 'Paywalls',    color: '#FF6B6B' },
]

const howItWorks = [
  {
    step: '01',
    title: 'Pick a subject',
    description: 'Choose from 7 core data science tracks. Start with Python if you\'re new — it\'s the foundation for everything else.',
    color: '#3BE8B0',
  },
  {
    step: '02',
    title: 'Read the topic',
    description: 'Each topic is a focused lesson with clear explanations, real code examples, and practical context.',
    color: '#4CC9F0',
  },
  {
    step: '03',
    title: 'Build and apply',
    description: 'Copy the code, run it yourself, break it, fix it. The best way to learn data science is by doing.',
    color: '#C77DFF',
  },
]

/* ============================================================
   PAGE — Homepage
   ============================================================ */

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--color-ink)',
          paddingTop: 'var(--space-10)',
          paddingBottom: 'var(--space-9)',
        }}
      >
        {/* Background glow orbs */}
        <div aria-hidden="true">
          <div style={{
            position: 'absolute', top: '-120px', right: '-80px',
            width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,232,176,0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-80px', left: '-60px',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(199,125,255,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: '40%', left: '50%',
            transform: 'translateX(-50%)',
            width: '800px', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(59,232,176,0.12), transparent)',
            pointerEvents: 'none',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Eyebrow */}
          <div
            className="animate-fade-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: 'var(--space-5)',
              padding: '5px 14px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(59,232,176,0.2)',
              background: 'rgba(59,232,176,0.06)',
            }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--color-primary)',
              display: 'inline-block',
              animation: 'pulse-glow 2s infinite',
            }} />
            Free · Open · No Signup Required
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: 'var(--tracking-tighter)',
              color: 'var(--color-text-bright)',
              maxWidth: '820px',
              marginBottom: 'var(--space-5)',
            }}
          >
            Learn Data Science.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3BE8B0 0%, #4CC9F0 50%, #C77DFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              No cost.
            </span>
            <br />
            No noise.
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up delay-200"
            style={{
              fontSize: 'var(--text-md)',
              color: 'var(--color-text-mid)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '560px',
              marginBottom: 'var(--space-7)',
            }}
          >
            Corpus covers everything from Python basics to Transformers and LLMs.
            Clear lessons, real code, and zero paywalls — built for people who
            actually want to learn.
          </p>

          {/* CTA buttons */}
          <div
            className="animate-fade-up delay-300"
            style={{
              display: 'flex',
              gap: 'var(--space-3)',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: 'var(--space-9)',
            }}
          >
            <Link
              href="/python"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                color: 'var(--color-ink)',
                background: 'var(--color-primary)',
                padding: '13px 28px',
                borderRadius: 'var(--radius-full)',
                textDecoration: 'none',
                transition: 'background var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast)',
                boxShadow: '0 0 0 0 rgba(59,232,176,0)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--color-primary-hover)'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = 'var(--glow-primary)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--color-primary)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 0 0 0 rgba(59,232,176,0)'
              }}
            >
              Start with Python
              <ArrowRight size={16} />
            </Link>

            <Link
              href="#subjects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                fontWeight: 500,
                color: 'var(--color-text-main)',
                background: 'transparent',
                padding: '13px 28px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-border)',
                textDecoration: 'none',
                transition: 'border-color var(--transition-fast), color var(--transition-fast), background var(--transition-fast)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--color-text-dim)'
                el.style.background = 'var(--color-ink-muted)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--color-border)'
                el.style.background = 'transparent'
              }}
            >
              Browse subjects
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="animate-fade-up delay-400"
            style={{
              display: 'flex',
              gap: 'var(--space-7)',
              flexWrap: 'wrap',
            }}
          >
            {stats.map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 800,
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: '4px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-dim)',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--tracking-wider)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SUBJECTS SECTION
          ══════════════════════════════════════════ */}
      <section
        id="subjects"
        className="section"
        style={{ background: 'var(--color-ink)' }}
      >
        <div className="container">
          {/* Section header */}
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
              All Subjects
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-3xl))',
              fontWeight: 800,
              color: 'var(--color-text-bright)',
              letterSpacing: 'var(--tracking-tight)',
              marginBottom: 'var(--space-3)',
            }}>
              Everything you need to know.
            </h2>
            <p style={{
              fontSize: 'var(--text-md)',
              color: 'var(--color-text-dim)',
              maxWidth: '500px',
            }}>
              Seven carefully structured tracks. Start anywhere, go as deep as you want.
            </p>
          </div>

          {/* Subjects grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 'var(--space-4)',
          }}
          className="subjects-grid"
          >
            {subjects.map((subject, i) => (
              <SubjectCard key={subject.slug} subject={subject} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
          ══════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--color-ink-soft)',
          borderTop: '1px solid var(--color-border-soft)',
          borderBottom: '1px solid var(--color-border-soft)',
        }}
        className="section"
      >
        <div className="container">
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
              How It Works
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-3xl))',
              fontWeight: 800,
              color: 'var(--color-text-bright)',
              letterSpacing: 'var(--tracking-tight)',
            }}>
              Simple by design.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-5)',
          }}
          className="how-grid"
          >
            {howItWorks.map((step, i) => (
              <div
                key={step.step}
                style={{
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-ink-muted)',
                  position: 'relative',
                  overflow: 'hidden',
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {/* Step number background watermark */}
                <div style={{
                  position: 'absolute',
                  top: '-10px', right: 'var(--space-4)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '80px',
                  fontWeight: 800,
                  color: step.color,
                  opacity: 0.04,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>
                  {step.step}
                </div>

                {/* Step number badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--radius-md)',
                  background: `${step.color}15`,
                  border: `1px solid ${step.color}30`,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  color: step.color,
                  marginBottom: 'var(--space-4)',
                }}>
                  {step.step}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 700,
                  color: 'var(--color-text-bright)',
                  marginBottom: 'var(--space-3)',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-dim)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SUBJECT QUICK LINKS BAR
          ══════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-ink)',
        borderBottom: '1px solid var(--color-border-soft)',
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        <div style={{
          display: 'flex',
          gap: 'var(--space-1)',
          padding: 'var(--space-4) var(--content-padding)',
          width: 'max-content',
          minWidth: '100%',
          maxWidth: 'var(--content-width)',
          margin: '0 auto',
        }}>
          {subjects.map(s => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                border: `1px solid ${s.borderColor}`,
                background: s.bgColor,
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: s.color,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = `${s.color}18`
                el.style.borderColor = `${s.color}40`
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = s.bgColor
                el.style.borderColor = s.borderColor
                el.style.transform = 'translateY(0)'
              }}
            >
              <span>{s.icon}</span>
              {s.name}
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
          ══════════════════════════════════════════ */}
      <section
        className="section"
        style={{ background: 'var(--color-ink)', position: 'relative', overflow: 'hidden' }}
      >
        {/* Background glow */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(59,232,176,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            maxWidth: '640px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            {/* Icon */}
            <div style={{
              width: 64,
              height: 64,
              borderRadius: 'var(--radius-xl)',
              background: 'rgba(59,232,176,0.1)',
              border: '1px solid rgba(59,232,176,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              margin: '0 auto var(--space-5)',
            }}>
              🚀
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(var(--text-xl), 4vw, var(--text-2xl))',
              fontWeight: 800,
              color: 'var(--color-text-bright)',
              letterSpacing: 'var(--tracking-tight)',
              marginBottom: 'var(--space-4)',
            }}>
              Ready to start learning?
            </h2>

            <p style={{
              fontSize: 'var(--text-md)',
              color: 'var(--color-text-dim)',
              lineHeight: 'var(--leading-relaxed)',
              marginBottom: 'var(--space-6)',
            }}>
              No account needed. No credit card. Just open a subject and start reading.
              Corpus is free now and always will be.
            </p>

            {/* CTA buttons */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-3)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Link
                href="/python"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  background: 'var(--color-primary)',
                  padding: '13px 28px',
                  borderRadius: 'var(--radius-full)',
                  textDecoration: 'none',
                  transition: 'background var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'var(--color-primary-hover)'
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = 'var(--glow-primary)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'var(--color-primary)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                Start with Python
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://github.com/HoodaVishal/Corpus"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500,
                  color: 'var(--color-text-main)',
                  background: 'transparent',
                  padding: '13px 28px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none',
                  transition: 'border-color var(--transition-fast), background var(--transition-fast)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-text-dim)'
                  el.style.background = 'var(--color-ink-muted)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.background = 'transparent'
                }}
              >
                <GitHubIcon />
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .subjects-grid {
            grid-template-columns: 1fr !important;
          }
          .how-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .subjects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

/* ============================================================
   SUBJECT CARD
   ============================================================ */

function SubjectCard({
  subject,
  index,
}: {
  subject: typeof subjects[0]
  index: number
}) {
  return (
    <Link
      href={`/${subject.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 'var(--space-6)',
        borderRadius: 'var(--radius-xl)',
        border: `1px solid ${subject.borderColor}`,
        background: subject.bgColor,
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base)',
        animationDelay: `${index * 60}ms`,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-5px)'
        el.style.borderColor = `${subject.color}40`
        el.style.boxShadow = `var(--shadow-lg), 0 0 32px ${subject.color}18`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.borderColor = subject.borderColor
        el.style.boxShadow = 'none'
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '2px',
        background: `linear-gradient(90deg, ${subject.color}, transparent)`,
      }} />

      {/* Header row */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 'var(--space-4)',
      }}>
        {/* Icon */}
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 'var(--radius-md)',
          background: `${subject.color}15`,
          border: `1px solid ${subject.color}25`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
        }}>
          {subject.icon}
        </div>

        {/* Level badge */}
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          fontWeight: 600,
          color: subject.color,
          background: `${subject.color}12`,
          border: `1px solid ${subject.color}25`,
          padding: '3px 10px',
          borderRadius: 'var(--radius-full)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-wide)',
          whiteSpace: 'nowrap',
        }}>
          {subject.level}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-lg)',
        fontWeight: 700,
        color: 'var(--color-text-bright)',
        marginBottom: 'var(--space-2)',
        letterSpacing: 'var(--tracking-tight)',
      }}>
        {subject.name}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--color-text-dim)',
        lineHeight: 'var(--leading-relaxed)',
        marginBottom: 'var(--space-5)',
        flex: 1,
      }}>
        {subject.description}
      </p>

      {/* Topics preview */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-2)',
        marginBottom: 'var(--space-5)',
      }}>
        {subject.topics.slice(0, 4).map(topic => (
          <span
            key={topic}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--color-text-dim)',
              background: 'var(--color-ink-muted)',
              border: '1px solid var(--color-border-soft)',
              padding: '3px 8px',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            {topic}
          </span>
        ))}
        {subject.topics.length > 4 && (
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--color-text-dim)',
            padding: '3px 8px',
          }}>
            +{subject.topics.length - 4} more
          </span>
        )}
      </div>

      {/* Footer row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 'var(--space-3)',
        borderTop: `1px solid ${subject.color}18`,
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-dim)',
        }}>
          {subject.topicCount} topics
        </span>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: subject.color,
          fontWeight: 500,
        }}>
          Start learning
          <ArrowRight size={12} color={subject.color} />
        </div>
      </div>
    </Link>
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

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}