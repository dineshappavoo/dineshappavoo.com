'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-light)' : 'none',
      }}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between py-6">
          {/* Logo/Name */}
          <Link 
            href="/"
            className="text-lg font-semibold transition-opacity hover:opacity-70"
            style={{ 
              fontFamily: 'Lora, serif',
              color: 'var(--text-primary)'
            }}
          >
            DA
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 ui-font">
            <Link
              href="/research"
              className="nav-link"
              style={{
                color: isActive('/research') ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: isActive('/research') ? 600 : 500,
                fontSize: '0.9375rem',
                position: 'relative',
                transition: 'color 0.2s ease',
              }}
            >
              Research
              {isActive('/research') && (
                <span 
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--orange-accent)',
                    borderRadius: '2px',
                  }}
                />
              )}
            </Link>

            <Link
              href="/podcast"
              className="nav-link"
              style={{
                color: isActive('/podcast') ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: isActive('/podcast') ? 600 : 500,
                fontSize: '0.9375rem',
                position: 'relative',
                transition: 'color 0.2s ease',
              }}
            >
              Podcast
              {isActive('/podcast') && (
                <span 
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--orange-accent)',
                    borderRadius: '2px',
                  }}
                />
              )}
            </Link>

            <Link
              href="/companies"
              className="nav-link"
              style={{
                color: isActive('/companies') ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: isActive('/companies') ? 600 : 500,
                fontSize: '0.9375rem',
                position: 'relative',
                transition: 'color 0.2s ease',
              }}
            >
              Companies
              {isActive('/companies') && (
                <span 
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--orange-accent)',
                    borderRadius: '2px',
                  }}
                />
              )}
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link:hover {
          color: var(--text-primary) !important;
        }
      `}</style>
    </nav>
  );
}
