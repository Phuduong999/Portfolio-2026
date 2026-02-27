'use client';

import Link from 'next/link';
import { personal } from '@/data/personal';
import LazyMetallicPaint from '@/components/LazyMetallicPaint';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card-bg/50 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Name & nav */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div style={{ width: 32, height: 32, borderRadius: 6, overflow: 'hidden' }}>
                <LazyMetallicPaint
                  imageSrc="/logo-pd.svg"
                  lightColor="#b19eef"
                  darkColor="#1a1a1a"
                  tintColor="#7c5cff"
                  speed={0.15}
                  scale={3}
                />
              </div>
              <span className="text-lg font-bold tracking-tight">{personal.name}</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-1 text-sm text-muted">
              <Link href="/" className="hover:text-foreground transition-colors px-3 py-2 min-h-[44px] flex items-center">Home</Link>
              <Link href="/projects" className="hover:text-foreground transition-colors px-3 py-2 min-h-[44px] flex items-center">Projects</Link>
              <Link href="/experience" className="hover:text-foreground transition-colors px-3 py-2 min-h-[44px] flex items-center">Experience</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors px-3 py-2 min-h-[44px] flex items-center">Contact</Link>
            </nav>
          </div>

          {/* Right: Socials */}
          <div className="flex gap-2 text-muted">
            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            )}
            {personal.instagram && (
              <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            )}
            {personal.facebook && (
              <a href={personal.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            )}
            {personal.email && (
              <a href={`mailto:${personal.email}`} className="hover:text-foreground transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            )}
          </div>
        </div>

        {/* Bottom: Copyright + CC License */}
        <div className="mt-6 sm:mt-8 pt-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {year} {personal.name}. All rights reserved.</p>
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
            rel="noopener noreferrer license"
            className="flex items-center gap-2 hover:text-foreground transition-colors py-2 min-h-[44px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.98 0C5.37 0 0 5.37 0 11.98s5.37 11.98 11.98 11.98 11.98-5.37 11.98-11.98S18.59 0 11.98 0zM5.99 11.98c0-3.31 2.68-5.99 5.99-5.99a5.94 5.94 0 0 1 4.24 1.76l-1.42 1.42A3.94 3.94 0 0 0 11.98 8c-2.2 0-3.98 1.78-3.98 3.98s1.78 3.98 3.98 3.98a3.94 3.94 0 0 0 2.82-1.17l1.42 1.42a5.94 5.94 0 0 1-4.24 1.76c-3.31 0-5.99-2.68-5.99-5.99z"/></svg>
            <span>CC BY-NC 4.0</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
