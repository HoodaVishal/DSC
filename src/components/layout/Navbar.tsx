'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

/* ============================================================
   TYPES
   ============================================================ */

interface Subject {
  name: string
  slug: string
  color: string
  icon: string
  description: string
  topicCount: number
}

/* ============================================================
   DATA — All subjects in the nav
   ============================================================ */

const subjects: Subject[] = [
  {
    name: 'Python',
    slug: 'python',
    color: '#3BE8B0',
    icon: '🐍',
    description: 'Core language for data science',
    topicCount: 8,
  },
  {
    name: 'Machine Learning',
    slug: 'machine-learning',
    color: '#FF6B6B',
    icon: '🤖',
    description: 'Algorithms that learn from data',
    topicCount: 7,
  },
  {
    name: 'Deep Learning',
    slug: 'deep-learning',
    color: '#C77DFF',
    icon: '🧠',
    description: 'Neural networks and beyond',
    topicCount: 6,
  },
  {
    name: 'NLP',
    slug: 'nlp',
    color: '#4CC9F0',
    icon: '💬',
    description: 'Teaching machines to understand language',
    topicCount: 6,
  },
  {
    name: 'Statistics',
    slug: 'statistics',
    color: '#FFD93D',
    icon: '📊',
    description: 'The math behind the models',
    topicCount: 4,
  },
  {
    name: 'Visualization',
    slug: 'visualization',
    color: '#FF9A3C',
    icon: '📈',
    description: 'Communicate data visually',
    topicCount: 3,
  },
  {
    name: 'SQL',
    slug: 'sql',
    color: '#06D6A0',
    icon: '🗄️',
    description: 'Query and manage databases',
    topicCount: 3,
  },
]

/* ============================================================
   NAVBAR COMPONENT
   ============================================================ */

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef  = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* ── Scroll detection — adds border on scroll ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  /* ── Close dropdown when clicking outside ── */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  /* ── Hover handlers with delay so dropdown doesn't flicker ── */
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  /* ── Active subject detection ── */
  const activeSubject = subjects.find(s => pathname.startsWith(`/${s.slug}`))

  return (
    <>
      {/* ════════════════════════════════════════
          MAIN NAVBAR
          ════════════════════════════════════════ */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--nav-height)',
          background: isScrolled
            ? 'rgba(8, 8, 15, 0.92)'
            : 'rgba(8, 8, 15, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled
            ? '1px solid var(--color-border)'
            : '1px solid transparent',
          transition: 'background var(--transition-base), border-color var(--transition-base)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--content-width)',
            margin: '0 auto',
            padding: '0 var(--content-padding)',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-6)',
          }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              textDecoration: 'none',
              flexShrink: 0,
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

          {/* ── Desktop Navigation ── */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-1)',
              flex: 1,
              justifyContent: 'center',
            }}
            className="desktop-nav"
          >
            {/* Subjects dropdown trigger */}
            <div
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative' }}
            >
              <button
                onClick={() => setDropdownOpen(prev => !prev)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  color: dropdownOpen || activeSubject
                    ? 'var(--color-text-bright)'
                    : 'var(--color-text-mid)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-md)',
                  transition: 'color var(--transition-fast), background var(--transition-fast)',
                  backgroundColor: dropdownOpen ? 'var(--color-ink-muted)' : 'transparent',
                }}
              >
                Subjects
                <ChevronIcon
                  style={{
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform var(--transition-fast)',
                  }}
                />
              </button>

              {/* ── Mega Dropdown ── */}
              {dropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 12px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '680px',
                    background: 'var(--color-ink-soft)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-4)',
                    boxShadow: 'var(--shadow-xl)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--space-2)',
                    animation: 'fadeDown 0.2s ease both',
                  }}
                >
                  {/* Dropdown header */}
                  <div
                    style={{
                      gridColumn: '1 / -1',
                      padding: 'var(--space-2) var(--space-3)',
                      marginBottom: 'var(--space-1)',
                      borderBottom: '1px solid var(--color-border-soft)',
                      paddingBottom: 'var(--space-3)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-dim)',
                        textTransform: 'uppercase',
                        letterSpacing: 'var(--tracking-wider)',
                      }}
                    >
                      All Subjects — {subjects.length} tracks
                    </span>
                  </div>

                  {subjects.map(subject => (
                    <DropdownItem
                      key={subject.slug}
                      subject={subject}
                      isActive={pathname.startsWith(`/${subject.slug}`)}
                    />
                  ))}

                  {/* Footer row */}
                  <div
                    style={{
                      gridColumn: '1 / -1',
                      marginTop: 'var(--space-2)',
                      paddingTop: 'var(--space-3)',
                      borderTop: '1px solid var(--color-border-soft)',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Link
                      href="/"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-primary)',
                        letterSpacing: 'var(--tracking-wide)',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                        transition: 'gap var(--transition-fast)',
                      }}
                    >
                      Browse all subjects →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Direct subject links — top 4 shown */}
            {subjects.slice(0, 4).map(subject => (
              <NavLink
                key={subject.slug}
                href={`/${subject.slug}`}
                isActive={pathname.startsWith(`/${subject.slug}`)}
                activeColor={subject.color}
              >
                {subject.name}
              </NavLink>
            ))}
          </nav>

          {/* ── Right side ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              flexShrink: 0,
            }}
          >
            {/* GitHub link */}
            <a
              href="https://github.com/HoodaVishal/Corpus"
              target="_blank"
              rel="noopener noreferrer"
              className="desktop-nav"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 34,
                height: 34,
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-dim)',
                transition: 'color var(--transition-fast), border-color var(--transition-fast)',
                background: 'transparent',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--color-text-main)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-text-dim)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--color-text-dim)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
              }}
            >
              <GitHubIcon />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'transparent',
                color: 'var(--color-text-main)',
                cursor: 'pointer',
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════
          MOBILE MENU OVERLAY
          ════════════════════════════════════════ */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'var(--color-ink)',
            paddingTop: 'var(--nav-height)',
            overflowY: 'auto',
            animation: 'fadeIn 0.2s ease both',
          }}
        >
          <div
            style={{
              padding: 'var(--space-5) var(--space-5)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
            }}
          >
            {/* Section label */}
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-dim)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-wider)',
                padding: 'var(--space-3) var(--space-4)',
                marginBottom: 'var(--space-2)',
              }}
            >
              All Subjects
            </p>

            {subjects.map((subject, i) => (
              <Link
                key={subject.slug}
                href={`/${subject.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  background: pathname.startsWith(`/${subject.slug}`)
                    ? 'var(--color-ink-muted)'
                    : 'transparent',
                  border: `1px solid ${
                    pathname.startsWith(`/${subject.slug}`)
                      ? subject.color + '33'
                      : 'var(--color-border-soft)'
                  }`,
                  textDecoration: 'none',
                  transition: 'background var(--transition-fast)',
                  animationDelay: `${i * 40}ms`,
                  animation: 'fadeUp 0.3s ease both',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 'var(--radius-md)',
                    background: subject.color + '18',
                    border: `1px solid ${subject.color}33`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {subject.icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 600,
                      color: pathname.startsWith(`/${subject.slug}`)
                        ? subject.color
                        : 'var(--color-text-bright)',
                    }}
                  >
                    {subject.name}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-dim)',
                      marginTop: 2,
                    }}
                  >
                    {subject.description}
                  </div>
                </div>

                {/* Topic count */}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-dim)',
                    flexShrink: 0,
                  }}
                >
                  {subject.topicCount} topics
                </span>
              </Link>
            ))}

            {/* GitHub link in mobile menu */}
            <a
              href="https://github.com/HoodaVishal/Corpus"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-soft)',
                color: 'var(--color-text-dim)',
                textDecoration: 'none',
                marginTop: 'var(--space-3)',
                fontSize: 'var(--text-sm)',
              }}
            >
              <GitHubIcon />
              View on GitHub
            </a>
          </div>
        </div>
      )}

      {/* Spacer so page content doesn't hide under fixed navbar */}
      <div style={{ height: 'var(--nav-height)' }} />

      {/* ════════════════════════════════════════
          RESPONSIVE STYLES
          ════════════════════════════════════════ */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  )
}


/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

/* ── Nav Link ── */
function NavLink({
  href,
  children,
  isActive,
  activeColor,
}: {
  href: string
  children: React.ReactNode
  isActive: boolean
  activeColor: string
}) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: isActive ? 500 : 400,
        color: isActive ? activeColor : 'var(--color-text-mid)',
        padding: '6px 12px',
        borderRadius: 'var(--radius-md)',
        textDecoration: 'none',
        transition: 'color var(--transition-fast), background var(--transition-fast)',
        backgroundColor: isActive ? `${activeColor}12` : 'transparent',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => {
        if (!isActive) {
          ;(e.currentTarget as HTMLElement).style.color = 'var(--color-text-main)'
          ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-ink-muted)'
        }
      }}
      onMouseLeave={e => {
        if (!isActive) {
          ;(e.currentTarget as HTMLElement).style.color = 'var(--color-text-mid)'
          ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
        }
      }}
    >
      {children}
    </Link>
  )
}

/* ── Dropdown Item ── */
function DropdownItem({
  subject,
  isActive,
}: {
  subject: Subject
  isActive: boolean
}) {
  return (
    <Link
      href={`/${subject.slug}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-3)',
        borderRadius: 'var(--radius-md)',
        background: isActive ? `${subject.color}10` : 'transparent',
        border: `1px solid ${isActive ? subject.color + '30' : 'transparent'}`,
        textDecoration: 'none',
        transition: 'background var(--transition-fast), border-color var(--transition-fast)',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        if (!isActive) {
          ;(e.currentTarget as HTMLElement).style.background = 'var(--color-ink-muted)'
          ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-soft)'
        }
      }}
      onMouseLeave={e => {
        if (!isActive) {
          ;(e.currentTarget as HTMLElement).style.background = 'transparent'
          ;(e.currentTarget as HTMLElement).style.borderColor = 'transparent'
        }
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 'var(--radius-sm)',
          background: subject.color + '15',
          border: `1px solid ${subject.color}25`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 17,
          flexShrink: 0,
        }}
      >
        {subject.icon}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            color: isActive ? subject.color : 'var(--color-text-bright)',
            marginBottom: 2,
          }}
        >
          {subject.name}
        </div>
        <div
          style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-dim)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {subject.description}
        </div>
      </div>

      {/* Topic count pill */}
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: isActive ? subject.color : 'var(--color-text-dim)',
          background: isActive ? `${subject.color}12` : 'var(--color-surface)',
          padding: '2px 7px',
          borderRadius: 'var(--radius-full)',
          flexShrink: 0,
          border: `1px solid ${isActive ? subject.color + '25' : 'var(--color-border)'}`,
        }}
      >
        {subject.topicCount}
      </span>
    </Link>
  )
}

/* ── Logo Mark SVG ── */
function LogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="8" fill="#3BE8B0" fillOpacity="0.12" />
      <rect width="28" height="28" rx="8" stroke="#3BE8B0" strokeOpacity="0.3" strokeWidth="1" />
      <path
        d="M8 10 L14 7 L20 10 L20 18 L14 21 L8 18 Z"
        stroke="#3BE8B0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14 7 L14 21"
        stroke="#3BE8B0"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <path
        d="M8 10 L20 10"
        stroke="#3BE8B0"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <circle cx="14" cy="14" r="2" fill="#3BE8B0" fillOpacity="0.8" />
    </svg>
  )
}

/* ── Icons ── */
function ChevronIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={style}>
      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 4H16M2 9H16M2 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}