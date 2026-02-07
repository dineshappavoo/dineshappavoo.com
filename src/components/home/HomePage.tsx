'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export function HomePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const url = `https://dineshappavoo.us19.list-manage.com/subscribe/post-json?u=378a03eeb2358b1416a203297&id=63d42a7294&f_id=007150e0f0&EMAIL=${encodeURIComponent(email)}&c=?`;

    try {
      const script = document.createElement('script');
      const callbackName = 'mailchimpCallback' + Date.now();
      
      (window as any)[callbackName] = (data: any) => {
        delete (window as any)[callbackName];
        document.body.removeChild(script);

        if (data.result === 'success') {
          setStatus('success');
          setEmail('');
        } else {
          setStatus('error');
        }
      };

      script.src = url.replace('&c=?', `&c=${callbackName}`);
      document.body.appendChild(script);

      setTimeout(() => {
        if (status === 'loading') {
          setStatus('error');
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
          delete (window as any)[callbackName];
        }
      }, 10000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="section-xl" style={{ paddingTop: '9rem' }}>
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Location Indicator */}
            <div className="mb-10">
              <div className="location-indicator mb-3">
                <span className="location-dot"></span>
                <p className="text-meta">San Francisco, California</p>
              </div>
              <div className="location-underline" style={{ width: '64px' }}></div>
            </div>

            {/* Name & Title */}
            <h1 className="mb-6">Dinesh Appavoo</h1>
            
            {/* Title - Two Line Layout with Mobile Optimization */}
            <div className="mb-10" style={{ maxWidth: '700px' }}>
              <p className="text-meta ui-font" style={{ 
                fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                letterSpacing: '0.08em',
                marginBottom: '0.75rem',
                color: 'var(--text-tertiary)',
                fontWeight: 500
              }}>
                FOUNDER & CEO
              </p>
              
              <p className="mb-8" style={{ 
                fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                color: 'var(--text-secondary)',
                fontWeight: 400,
                lineHeight: '1.5'
              }}>
                <a 
                  href="https://bean.inc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block transition-all"
                  style={{ 
                    color: 'var(--text-secondary)',
                    borderBottom: '2px solid var(--border-medium)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--orange-accent)';
                    e.currentTarget.style.borderBottomColor = 'var(--orange-accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderBottomColor = 'var(--border-medium)';
                  }}
                >
                  Bean Technology Inc.
                </a>
                <span style={{ margin: '0 0.5rem', color: 'var(--text-muted)' }}>·</span>
                <a 
                  href="https://hyperx.hypersona.space" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block transition-all"
                  style={{ 
                    color: 'var(--text-secondary)',
                    borderBottom: '2px solid var(--border-medium)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--orange-accent)';
                    e.currentTarget.style.borderBottomColor = 'var(--orange-accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderBottomColor = 'var(--border-medium)';
                  }}
                >
                  Hypersona Inc.
                </a>
              </p>
              
              <p style={{ 
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                color: 'var(--text-secondary)',
                fontWeight: 400,
                lineHeight: '1.7'
              }}>
                Building transformative technology at the intersection of <strong>aerospace</strong> and <strong>healthcare</strong>.
              </p>
            </div>

            {/* Role Badges */}
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="badge">Founder</span>
              <span className="badge">Engineer</span>
              <span className="badge">Researcher</span>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap gap-3 mb-16 ui-font">
              <Link href="/research" className="btn btn-primary">
                View Research
              </Link>
              <Link href="/podcast" className="btn btn-outline">
                Listen to Podcast
              </Link>
              <a href="mailto:hello@dineshappavoo.com" className="btn btn-outline">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="mb-4">Companies Founded</h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
              Pioneering innovations in rocket propulsion and computational healthcare
            </p>
          </motion.div>

          <div className="grid-2">
            {/* Hypersona */}
            <motion.a
              href="https://hyperx.hypersona.space"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card card-interactive p-8"
              style={{ position: 'relative' }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60px',
                height: '60px',
                background: `linear-gradient(135deg, transparent 50%, var(--orange-accent) 50%)`,
                opacity: 0.1,
                borderRadius: '0 12px 0 0'
              }}></div>

              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {/* Rocket Icon */}
                  <div className="mb-4">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28 4L34 16L34 36L28 44L22 36L22 16L28 4Z" 
                            stroke="var(--gray-800)" 
                            strokeWidth="1.5" 
                            fill="var(--bg-primary)"/>
                      <path d="M28 4L34 16L22 16L28 4Z" 
                            fill="var(--gray-200)"/>
                      <circle cx="28" cy="22" r="3.5" 
                              stroke="var(--gray-700)" 
                              strokeWidth="1.5" 
                              fill="var(--bg-secondary)"/>
                      <line x1="22" y1="28" x2="34" y2="28" stroke="var(--gray-400)" strokeWidth="1"/>
                      <line x1="22" y1="32" x2="34" y2="32" stroke="var(--gray-400)" strokeWidth="1"/>
                      <path d="M22 36L16 44L18 46L22 40" 
                            stroke="var(--gray-800)" 
                            strokeWidth="1.5" 
                            fill="var(--gray-100)"/>
                      <path d="M34 36L40 44L38 46L34 40" 
                            stroke="var(--gray-800)" 
                            strokeWidth="1.5" 
                            fill="var(--gray-100)"/>
                      <path d="M26 44L25 50C25 50 26 48 28 48C30 48 31 50 31 50L30 44" 
                            fill="var(--orange-accent)" 
                            opacity="0.6"/>
                      <path d="M27 46L26.5 52" 
                            stroke="var(--orange-accent)" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            opacity="0.8"/>
                      <path d="M29 46L29.5 52" 
                            stroke="var(--orange-accent)" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            opacity="0.8"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Hypersona</h3>
                  <div className="badge mb-4" style={{
                    background: 'var(--orange-light)',
                    color: 'var(--orange-accent)',
                    border: '1px solid var(--orange-accent)'
                  }}>Aerospace</div>
                </div>
                
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Revolutionary point-to-point rocket-based Earth transportation. 
                  Developing Full-Flow Staged Combustion (FFSC) engines inspired by SpaceX Raptor 3.
                </p>

                <div className="mt-auto">
                  <div className="flex items-center text-sm font-medium" style={{ color: 'var(--orange-accent)' }}>
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Bean */}
            <motion.a
              href="https://bean.inc"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card card-interactive p-8"
              style={{ position: 'relative' }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60px',
                height: '60px',
                background: `linear-gradient(135deg, transparent 50%, var(--orange-accent) 50%)`,
                opacity: 0.1,
                borderRadius: '0 12px 0 0'
              }}></div>

              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {/* DNA Helix Icon */}
                  <div className="mb-4">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 8C26 12 26 16 22 20C18 24 18 28 22 32C26 36 26 40 22 44C18 48 18 52 22 56" 
                            stroke="var(--gray-800)" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            fill="none"/>
                      <path d="M34 8C30 12 30 16 34 20C38 24 38 28 34 32C30 36 30 40 34 44C38 48 38 52 34 56" 
                            stroke="var(--gray-800)" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            fill="none"/>
                      <g opacity="0.7">
                        <line x1="22" y1="12" x2="34" y2="12" stroke="var(--gray-500)" strokeWidth="1.5"/>
                        <line x1="22" y1="20" x2="34" y2="20" stroke="var(--orange-accent)" strokeWidth="1.5"/>
                        <line x1="22" y1="28" x2="34" y2="28" stroke="var(--gray-500)" strokeWidth="1.5"/>
                        <line x1="22" y1="36" x2="34" y2="36" stroke="var(--orange-accent)" strokeWidth="1.5"/>
                        <line x1="22" y1="44" x2="34" y2="44" stroke="var(--gray-500)" strokeWidth="1.5"/>
                      </g>
                      <circle cx="22" cy="12" r="2" fill="var(--gray-600)"/>
                      <circle cx="34" cy="12" r="2" fill="var(--gray-600)"/>
                      <circle cx="22" cy="20" r="2" fill="var(--orange-accent)"/>
                      <circle cx="34" cy="20" r="2" fill="var(--orange-accent)"/>
                      <circle cx="22" cy="28" r="2" fill="var(--gray-600)"/>
                      <circle cx="34" cy="28" r="2" fill="var(--gray-600)"/>
                      <circle cx="22" cy="36" r="2" fill="var(--orange-accent)"/>
                      <circle cx="34" cy="36" r="2" fill="var(--orange-accent)"/>
                      <circle cx="22" cy="44" r="2" fill="var(--gray-600)"/>
                      <circle cx="34" cy="44" r="2" fill="var(--gray-600)"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Bean</h3>
                  <div className="badge mb-4" style={{
                    background: 'var(--orange-light)',
                    color: 'var(--orange-accent)',
                    border: '1px solid var(--orange-accent)'
                  }}>Healthcare</div>
                </div>
                
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Digital blood twins using AlphaFold 3 technology. 
                  Pioneering computational proteomics for personalized medicine and drug discovery.
                </p>

                <div className="mt-auto">
                  <div className="flex items-center text-sm font-medium" style={{ color: 'var(--orange-accent)' }}>
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="divider-colored mb-12"></div>
            
            <h2 className="mb-10" style={{ fontSize: '2rem' }}>Featured Work</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Latest Research */}
              <Link href="/research" className="card card-interactive" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '1.5rem',
                  bottom: '1.5rem',
                  width: '3px',
                  background: 'var(--orange-accent)',
                  opacity: 0.4,
                  borderRadius: '2px'
                }}></div>

                <div className="mb-3">
                  <span className="badge ui-font" style={{
                    background: 'var(--orange-light)',
                    color: 'var(--orange-accent)',
                    border: '1px solid var(--orange-accent)'
                  }}>LATEST RESEARCH</span>
                </div>
                
                <h3 className="mb-3" style={{ fontSize: '1.5rem' }}>
                  Build a Rocket Engine from Scratch
                </h3>
                
                <p className="text-small mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Design of a Full-Flow Staged Combustion (FFSC) engine from theory through complete 3D modeling.
                </p>

                <div className="flex items-center text-sm font-medium ui-font" style={{ color: 'var(--orange-accent)' }}>
                  <span>Read paper</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>

              {/* Latest Podcast */}
              <Link href="/podcast" className="card card-interactive" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '1.5rem',
                  bottom: '1.5rem',
                  width: '3px',
                  background: 'var(--orange-accent)',
                  opacity: 0.4,
                  borderRadius: '2px'
                }}></div>

                <div className="mb-3">
                  <span className="badge ui-font" style={{
                    background: 'var(--orange-light)',
                    color: 'var(--orange-accent)',
                    border: '1px solid var(--orange-accent)'
                  }}>LATEST EPISODE</span>
                </div>
                
                <h3 className="mb-3" style={{ fontSize: '1.5rem' }}>
                  Episode 0: Introduction
                </h3>
                
                <p className="text-small mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Why I'm building rocket engines and digital blood twins—and what's next for humanity.
                </p>

                <div className="flex items-center text-sm font-medium ui-font" style={{ color: 'var(--orange-accent)' }}>
                  <span>Listen now</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-subtle text-center"
            style={{ padding: '3rem 2rem', position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '3px',
              background: 'var(--orange-accent)',
              opacity: 0.5,
              borderRadius: '0 0 2px 2px'
            }}></div>

            <div className="text-5xl mb-6">✉️</div>
            <h3 className="mb-4">Stay Updated</h3>
            <p className="text-subtitle mb-8 max-w-lg mx-auto">
              Get occasional updates on rocket science, healthcare innovation, and thoughts on technology's future.
            </p>

            {status === 'success' ? (
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-medium)' }}>
                <p className="text-small" style={{ fontWeight: 600 }}>
                  ✓ Thanks for subscribing!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3 flex-col sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={status === 'loading'}
                    style={{
                      opacity: status === 'loading' ? 0.6 : 1,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-primary ui-font"
                    style={{
                      opacity: status === 'loading' ? 0.6 : 1,
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-small mt-2 text-muted">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-lg">
        <div className="container-editorial">
          <div className="divider-colored mb-12"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-meta mb-6" style={{ color: 'var(--orange-accent)' }}>GET IN TOUCH</p>
            <h2 className="mb-8">Let's Connect</h2>
            <p className="text-subtitle mb-12 max-w-xl mx-auto">
              Whether you're interested in collaboration, investment opportunities, or just want to chat about rockets and healthcare innovation.
            </p>
            
            <a 
              href="mailto:hello@dineshappavoo.com" 
              className="text-3xl font-semibold hover:opacity-70 transition-opacity inline-block mb-12"
              style={{ fontFamily: 'Lora, serif', color: 'var(--orange-accent)' }}
            >
              hello@dineshappavoo.com
            </a>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12 ui-font flex-wrap">
              <a 
                href="https://www.linkedin.com/in/dineshappavoo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn
              </a>
              <a 
                href="https://x.com/DineshAppavoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Twitter / X
              </a>
              <a 
                href="https://github.com/dineshappavoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                GitHub
              </a>
              <a 
                href="https://medium.com/@dineshappavoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Medium
              </a>
            </div>

            {/* Resume Link */}
            <div className="mb-12">
              <a 
                href="/resume-dinesh-appavoo.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent ui-font"
              >
                View Resume / CV →
              </a>
            </div>

            <div className="divider mb-8"></div>

            {/* Footer */}
            <p className="text-meta mb-4">
              © {new Date().getFullYear()} Dinesh Appavoo. All rights reserved.
            </p>
            <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
              Built with Next.js • Hosted on GitHub Pages
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}