'use client'

import Link from 'next/link'

/* ============================================================
   TYPES
   ============================================================ */

interface SubjectLink {
  name: string
  slug: string
  color: string
  icon: string
}

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

/* ============================================================
   DATA
   ============================================================ */

const subjects: SubjectLink[] = [
  { name: 'Python',           slug: 'python',           color: '#3BE8B0', icon: '🐍' },
  { name: 'Machine Learning', slug: 'machine-learning', color: '#FF6B6B', icon: '🤖' },
  { name: 'Deep Learning',    slug: 'deep-learning',    color: '#C77DFF', icon: '🧠' },
  { name: 'NLP',              slug: 'nlp',              color: '#4CC9F0', icon: '💬' },
  { name: 'Statistics',       slug: 'statistics',       color: '#FFD93D', icon: '📊' },
  { name: 'Visualization',    slug: 'visualization',    color: '#FF9A3C', icon: '📈' },
  { name: 'SQL',              slug: 'sql',              color: '#06D6A0', icon: '🗄️' },
]

const resourceLinks: FooterLink[] = [
  { label: 'All Subjects',   href: '/'               },
  { label: 'Python',         href: '/python'          },
  { label: 'Machine Learning', href: '/machine-learning' },
  { label: 'Deep Learning',  href: '/deep-learning'   },
  { label: 'NLP',            href: '/nlp'             },
  { label: 'Statistics',     href: '/statistics'      },
  { label: 'Visualization',  href: '/visualization'   },
  { label: 'SQL',            href: '/sql'             },
]

const communityLinks: FooterLink[] = [
  { label: 'GitHub',          href: 'https://github.com/HoodaVishal/Corpus', external: true },
  { label: 'YouTube',         href: 'https://youtube.com/@TheLatentSpace',   external: true },
  { label: 'Report an Issue', href: 'https://github.com/HoodaVishal/Corpus/issues', external: true },
  { label: 'Contribute',      href: 'https://github.com/HoodaVishal/Corpus/blob/main/CONTRIBUTING.md', external: true },
]

const currentYear = new Date().getFullYear()

/* ============================================================
   FOOTER COMPONENT
   ============================================================ */

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-ink-soft)',
        borderTop: '1px solid var(--color-border)',
        marginTop: 'auto',
      }}
    >
      {/* ── Subject strip at top of footer ── */}
      <div
        style={{
          borderBottom: '1px solid var(--color-border-soft)',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--content-width)',
            margin: '0 auto',
            padding: '0 var(--content-padding)',
            display: 'flex',
            gap: 'var(--space-1)',
            paddingBlock: 'var(--space-3)',
            width: 'max-content',
            minWidth: '100%',
          }}
        >
          {subjects.map(subject => (
            <SubjectPill key={subject.slug} subject={subject} />
          ))}
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div
        style={{
          maxWidth: 'var(--content-width)',
          margin: '0 auto',
          padding: 'var(--space-9) var(--content-padding) var(--space-7)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: 'var(--space-8)',
          }}
          className="footer-grid"
        >
          {/* ── Brand column ── */}
          <div>
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                textDecoration: 'none',
                marginBottom: 'var(--space-4)',
              }}
            >
              <LogoMark />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 800,
                  color: 'var(--color-text-bright)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                Corpus
              </span>
            </Link>

            {/* Tagline */}
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-dim)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '300px',
                marginBottom: 'var(--space-5)',
              }}
            >
              A free, open data science learning platform. Clear explanations,
              real code, zero paywalls.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <SocialButton
                href="https://github.com/HoodaVishal/Corpus"
                label="GitHub"
              >
                <GitHubIcon />
              </SocialButton>
              <SocialButton
                href="https://youtube.com/@TheLatentSpace"
                label="YouTube"
              >
                <YouTubeIcon />
              </SocialButton>
            </div>

            {/* Open source badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                marginTop: 'var(--space-5)',
                padding: '5px 12px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-ink-muted)',
              }}
            >
              <span style={{ fontSize: 11 }}>⭐</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-dim)',
                  letterSpacing: 'var(--tracking-wide)',
                }}
              >
                Open Source · MIT License
              </span>
            </div>
          </div>

          {/* ── Learn column ── */}
          <div>
            <FooterColumnHeader>Learn</FooterColumnHeader>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {resourceLinks.map(link => (
                <li key={link.href}>
                  <FooterLink href={link.href} external={link.external}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Community column ── */}
          <div>
            <FooterColumnHeader>Community</FooterColumnHeader>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {communityLinks.map(link => (
                <li key={link.href}>
                  <FooterLink href={link.href} external={link.external}>
                    {link.label}
                    {link.external && (
                      <ExternalIcon />
                    )}
                  </FooterLink>
                </li>
              ))}
            </ul>

            {/* Built with badge */}
            <div
              style={{
                marginTop: 'var(--space-6)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-ink-muted)',
                border: '1px solid var(--color-border-soft)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-dim)',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--tracking-wider)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Built with
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {[
                  { name: 'Next.js 15',    color: '#fff' },
                  { name: 'TypeScript',    color: '#4CC9F0' },
                  { name: 'Tailwind CSS',  color: '#4CC9F0' },
                  { name: 'Deployed on Vercel', color: '#fff' },
                ].map(tech => (
                  <div
                    key={tech.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                    }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: tech.color,
                        opacity: 0.6,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-dim)',
                      }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: '1px solid var(--color-border-soft)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--content-width)',
            margin: '0 auto',
            padding: 'var(--space-4) var(--content-padding)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-3)',
          }}
        >
          {/* Copyright */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-text-faint)',
              letterSpacing: 'var(--tracking-wide)',
            }}
          >
            © {currentYear} Corpus. Free forever.
          </p>

          {/* Subject color dots */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-faint)',
                marginRight: 'var(--space-2)',
              }}
            >
              7 subjects
            </span>
            {subjects.map(subject => (
              <div
                key={subject.slug}
                title={subject.name}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: subject.color,
                  opacity: 0.6,
                  cursor: 'default',
                  transition: 'opacity var(--transition-fast), transform var(--transition-fast)',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.opacity = '1'
                  ;(e.currentTarget as HTMLElement).style.transform = 'scale(1.4)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.opacity = '0.6'
                  ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                }}
              />
            ))}
          </div>

          {/* Made with love */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-text-faint)',
              letterSpacing: 'var(--tracking-wide)',
            }}
          >
            Made with{' '}
            <span style={{ color: '#FF6B6B' }}>♥</span>
            {' '}for learners
          </p>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-7) !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

/* ── Subject Pill ── */
function SubjectPill({ subject }: { subject: SubjectLink }) {
  return (
    <Link
      href={`/${subject.slug}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '5px 12px',
        borderRadius: 'var(--radius-full)',
        border: `1px solid ${subject.color}25`,
        background: `${subject.color}0A`,
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        color: subject.color,
        textDecoration: 'none',
        letterSpacing: 'var(--tracking-wide)',
        whiteSpace: 'nowrap',
        transition: 'background var(--transition-fast), border-color var(--transition-fast)',
        opacity: 0.8,
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLElement).style.background = `${subject.color}18`
        ;(e.currentTarget as HTMLElement).style.borderColor = `${subject.color}50`
        ;(e.currentTarget as HTMLElement).style.opacity = '1'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLElement).style.background = `${subject.color}0A`
        ;(e.currentTarget as HTMLElement).style.borderColor = `${subject.color}25`
        ;(e.currentTarget as HTMLElement).style.opacity = '0.8'
      }}
    >
      <span style={{ fontSize: 11 }}>{subject.icon}</span>
      {subject.name}
    </Link>
  )
}

/* ── Footer Column Header ── */
function FooterColumnHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        fontWeight: 600,
        color: 'var(--color-text-mid)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wider)',
        marginBottom: 'var(--space-4)',
      }}
    >
      {children}
    </h3>
  )
}

/* ── Footer Link ── */
function FooterLink({
  href,
  external,
  children,
}: {
  href: string
  external?: boolean
  children: React.ReactNode
}) {
  const props = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      {...props}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-1)',
        fontSize: 'var(--text-sm)',
        color: 'var(--color-text-dim)',
        textDecoration: 'none',
        transition: 'color var(--transition-fast)',
        lineHeight: 1.5,
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLElement).style.color = 'var(--color-text-main)'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLElement).style.color = 'var(--color-text-dim)'
      }}
    >
      {children}
    </Link>
  )
}

/* ── Social Button ── */
function SocialButton({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 34,
        height: 34,
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        background: 'transparent',
        color: 'var(--color-text-dim)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        transition: 'color var(--transition-fast), border-color var(--transition-fast), background var(--transition-fast)',
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLElement).style.color = 'var(--color-text-bright)'
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-text-dim)'
        ;(e.currentTarget as HTMLElement).style.background = 'var(--color-ink-muted)'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLElement).style.color = 'var(--color-text-dim)'
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
        ;(e.currentTarget as HTMLElement).style.background = 'transparent'
      }}
    >
      {children}
    </a>
  )
}

/* ── Logo Mark ── */
function LogoMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="8" fill="#3BE8B0" fillOpacity="0.12" />
      <rect width="28" height="28" rx="8" stroke="#3BE8B0" strokeOpacity="0.3" strokeWidth="1" />
      <path d="M8 10 L14 7 L20 10 L20 18 L14 21 L8 18 Z" stroke="#3BE8B0" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M14 7 L14 21" stroke="#3BE8B0" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M8 10 L20 10" stroke="#3BE8B0" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="14" cy="14" r="2" fill="#3BE8B0" fillOpacity="0.8" />
    </svg>
  )
}

/* ── Icons ── */
function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      style={{ opacity: 0.4, flexShrink: 0 }}
    >
      <path
        d="M1 9L9 1M9 1H4M9 1V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
