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
          {/* Meta Info */}
          <div className="mb-10">
            <p className="text-meta mb-3" style={{ color: 'var(--accent-blue)' }}>SAN FRANCISCO, CALIFORNIA</p>
            <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-green))' }}></div>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6">
            Dinesh <span className="text-gradient-blue">Appavoo</span>
          </h1>
          
          {/* Subheadline */}
          <div className="text-subtitle mb-10 max-w-xl">
            <p>
              Building transformative technology at the intersection of <strong style={{ color: 'var(--accent-blue)' }}>aerospace</strong> and <strong style={{ color: 'var(--accent-green)' }}>healthcare</strong>.
            </p>
          </div>

          {/* Role Badges */}
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="badge badge-blue">Founder</span>
            <span className="badge badge-green">Engineer</span>
            <span className="badge badge-green">Leader</span>
            <span className="badge badge-orange">Researcher</span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-10 border-t border-b" style={{ borderColor: 'var(--border-light)' }}>
            <div className="stat">
              <div className="stat-number" style={{ color: 'var(--accent-blue)' }}>2</div>
              <div className="stat-label">Companies Founded</div>
            </div>
            <div className="stat">
              <div className="stat-number" style={{ color: 'var(--accent-blue)' }}>12+</div>
              <div className="stat-label">Years in Tech & Entrepreneurship</div>
            </div>
            <div className="stat">
              <div className="stat-number" style={{ color: 'var(--accent-blue)' }}>3</div>
              <div className="stat-label">Major Companies</div>
            </div>
            <div className="stat">
              <div className="stat-number" style={{ color: 'var(--accent-blue)' }}>2</div>
              <div className="stat-label">Research Areas</div>
            </div>
          </div>

          {/* CTA Buttons - Centered & Filled */}
          <div className="space-y-4 ui-font">
            {/* Primary CTA - Centered */}
            <div className="flex justify-center">
              <a href="#publications" className="btn btn-blue" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                Patents & Research
              </a>
            </div>

            {/* Secondary CTAs - Centered (Newsletter removed) */}
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
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>

        {/* Featured Quote with Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20"
        >
          <div className="card-blue p-8">
            <p className="text-small mb-2" style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>
              Current Focus
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Developing <strong>Full-Flow Staged Combustion rocket engines</strong> for point-to-point Earth transportation 
              and creating <strong>digital blood twins</strong> using AlphaFold 3 for personalized medicine.
            </p>

            {/* Inline Newsletter Signup */}
            <div className="border-t pt-6 mt-6" style={{ borderColor: 'var(--accent-blue)' }}>
              <p className="text-small mb-3" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                Get updates on my latest work
              </p>
              
              {status === 'success' ? (
                <div className="p-4 rounded-lg" style={{ background: 'rgba(0, 137, 123, 0.1)' }}>
                  <p className="text-small" style={{ color: 'var(--accent-green)', fontWeight: 600 }}>
                    ✓ Thanks for subscribing!.
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
                    className="flex-1 px-4 py-2 rounded-full border-2 ui-font text-sm"
                    style={{
                      borderColor: 'var(--accent-blue)',
                      background: 'white',
                      outline: 'none',
                      opacity: status === 'loading' ? 0.6 : 1,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="ui-font font-semibold px-6 py-2 rounded-full text-sm whitespace-nowrap"
                    style={{
                      background: 'var(--accent-blue)',
                      color: 'white',
                      border: 'none',
                      opacity: status === 'loading' ? 0.6 : 1,
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              )}
              
              {status === 'error' && (
                <p className="text-small mt-2" style={{ color: 'var(--accent-orange)' }}>
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
          <p className="text-small mb-3" style={{ color: 'var(--text-tertiary)' }}>Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}