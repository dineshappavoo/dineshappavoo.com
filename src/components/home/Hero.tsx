'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export function Hero() {
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
    <section className="section-xl">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Meta Info with Location Indicator - Orange dot */}
          <div className="mb-10">
            <div className="location-indicator mb-3">
              <span className="location-dot"></span>
              <p className="text-meta">San Francisco, California</p>
            </div>
            <div className="location-underline" style={{ width: '64px' }}></div>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6">
            Dinesh Appavoo
          </h1>
          
          {/* Subheadline */}
          <div className="text-subtitle mb-10" style={{ maxWidth: '600px' }}>
            <p>
              Building transformative technology at the intersection of <strong>aerospace</strong> and <strong>healthcare</strong>.
            </p>
          </div>

          {/* Role Badges */}
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="badge">Founder</span>
            <span className="badge">Engineer</span>
            <span className="badge">Researcher</span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-10 border-t border-b" style={{ borderColor: 'var(--border-light)' }}>
            <div className="stat">
              <div className="stat-number">2</div>
              <div className="stat-label">Companies Founded</div>
            </div>
            <div className="stat">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years in Tech & Entrepreneurship</div>
            </div>
            <div className="stat">
              <div className="stat-number">3</div>
              <div className="stat-label">Major Companies</div>
            </div>
            <div className="stat">
              <div className="stat-number">2</div>
              <div className="stat-label">Research Areas</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4 ui-font">
            {/* Primary CTA */}
            <div className="flex justify-center">
              <a 
                href="#publications" 
                className="btn btn-primary" 
                style={{ 
                  fontSize: '1rem', 
                  padding: '1rem 2.5rem'
                }}
              >
                Patents & Research
              </a>
            </div>

            {/* Secondary CTAs */}
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#blog" className="btn btn-outline">
                Read My Blog
              </a>
              <a href="#companies" className="btn btn-outline">
                Explore My Work
              </a>
              <a href="#about" className="btn btn-outline">
                My Journey
              </a>
              <a href="mailto:hello@dineshappavoo.com" className="btn btn-outline">
                Contact
              </a>
            </div>
          </div>
        </motion.div>

        {/* Featured Quote with Newsletter Signup - Subtle orange accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20"
        >
          <div className="card-subtle" style={{ position: 'relative' }}>
            {/* Subtle orange accent line on left */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: '2rem',
              bottom: '2rem',
              width: '3px',
              background: 'var(--orange-accent)',
              opacity: 0.3,
              borderRadius: '2px'
            }}></div>

            <p className="text-small mb-2" style={{ color: 'var(--orange-accent)', fontWeight: 600 }}>
              Current Focus
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Developing <strong>Full-Flow Staged Combustion rocket engines</strong> for point-to-point Earth transportation 
              and creating <strong>digital blood twins</strong> using AlphaFold 3 for personalized medicine.
            </p>

            {/* Inline Newsletter Signup */}
            <div className="border-t pt-6 mt-6" style={{ borderColor: 'var(--border-medium)' }}>
              <p className="text-small mb-3" style={{ fontWeight: 600 }}>
                Get updates on my latest work
              </p>
              
              {status === 'success' ? (
                <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-medium)' }}>
                  <p className="text-small" style={{ fontWeight: 600 }}>
                    ✓ Thanks for subscribing!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 flex-col sm:flex-row">
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
                      whiteSpace: 'nowrap',
                      padding: '0.75rem 1.5rem',
                      fontSize: '0.875rem'
                    }}
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              )}
              
              {status === 'error' && (
                <p className="text-small mt-2 text-muted">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-small mb-3" style={{ color: 'var(--text-muted)' }}>Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}