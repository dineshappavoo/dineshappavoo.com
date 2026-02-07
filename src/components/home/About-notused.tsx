'use client';

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-editorial">
        <div className="divider-colored"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-meta text-accent mb-6">BACKGROUND</p>
          <h2 className="mb-6">The Journey</h2>
          <p className="text-subtitle">
            From engineering at major tech companies to founding ventures at the frontier of science.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="mb-8">Professional Experience</h3>
          
          <div className="space-y-0">
            <div className="timeline-item">
              <div className="flex justify-between items-baseline mb-3 flex-wrap gap-2">
                <div>
                  <h4 className="mb-1" style={{ fontSize: '1.25rem' }}>Engineering Manager</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Affirm</p>
                </div>
                <span className="text-meta text-accent">2020 — 2023</span>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Led the Affirm Card from inception to scale, building the product that would 
                redefine how millions of Americans access credit. Focused on user experience, 
                growth mechanics, and platform reliability.
              </p>
            </div>

            <div className="timeline-item">
              <div className="flex justify-between items-baseline mb-3 flex-wrap gap-2">
                <div>
                  <h4 className="mb-1" style={{ fontSize: '1.25rem' }}>Software Engineer</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Twitter</p>
                </div>
                <span className="text-meta text-accent">2016 — 2020</span>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Built core infrastructure for Twitter's timeline, messaging, and authentication 
                systems. Worked on products serving hundreds of millions of daily users.
              </p>
            </div>

            <div className="timeline-item">
              <div className="flex justify-between items-baseline mb-3 flex-wrap gap-2">
                <div>
                  <h4 className="mb-1" style={{ fontSize: '1.25rem' }}>Software Engineer</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Amazon Web Services</p>
                </div>
                <span className="text-meta text-accent">2015 — 2016</span>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Launched and scaled AWS Application Load Balancer across multiple regions, 
                building infrastructure that supports millions of machines globally.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="divider"></div>

        {/* Education & Early Ventures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="mb-8">Education & Early Ventures</h3>
          
          <div className="card-accent mb-8">
            <h4 className="mb-2" style={{ fontSize: '1.25rem' }}>MS in Computer Science</h4>
            <p style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
              The University of Texas at Dallas
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-tertiary)' }}>
              Focused on distributed systems, algorithms, and machine learning foundations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card" style={{ position: 'relative' }}>
              {/* Orange accent line for early ventures */}
              <div style={{
                position: 'absolute',
                left: 0,
                top: '1.5rem',
                bottom: '1.5rem',
                width: '3px',
                background: 'var(--orange-accent)',
                opacity: 0.3,
                borderRadius: '2px'
              }}></div>

              <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                <h4 style={{ fontSize: '1.25rem' }}>Founder & CEO, Labineer</h4>
                <span className="text-meta" style={{ color: 'var(--orange-accent)' }}>2010 — 2011</span>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Built a healthcare equipment marketplace focused on price transparency and 
                quality—a precursor to my current work in healthcare innovation.
              </p>
            </div>

            <div className="card" style={{ position: 'relative' }}>
              {/* Orange accent line */}
              <div style={{
                position: 'absolute',
                left: 0,
                top: '1.5rem',
                bottom: '1.5rem',
                width: '3px',
                background: 'var(--orange-accent)',
                opacity: 0.3,
                borderRadius: '2px'
              }}></div>

              <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                <h4 style={{ fontSize: '1.25rem' }}>Board of Directors, RRRcomputer.org</h4>
                <span className="text-meta" style={{ color: 'var(--orange-accent)' }}>2020 — 2021</span>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Led strategic initiatives to bridge the digital divide through technology access 
                programs and community partnerships.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="card-accent text-center" style={{ padding: '2.5rem', position: 'relative' }}>
            {/* Subtle orange accent on top */}
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

            <p className="text-small mb-3" style={{ color: 'var(--orange-accent)', fontWeight: 600 }}>
              FULL RESUME
            </p>
            <h4 className="mb-4">View Complete CV</h4>
            <p className="text-small mb-6" style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
              View my complete professional history, technical skills, and detailed project descriptions.
            </p>
            
            {/* Primary CTA - View Online */}
            <div className="flex justify-center gap-3 mb-4 flex-wrap">
              <a 
                href="/resume-dinesh-appavoo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn ui-font inline-flex items-center gap-2"
                style={{
                  background: 'var(--orange-accent)',
                  color: 'white',
                  border: '2px solid var(--orange-accent)'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                View Resume
              </a>
              
              <a 
                href="/resume-dinesh-appavoo.pdf"
                download
                className="btn btn-outline ui-font inline-flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download PDF
              </a>
            </div>

            {/* Shareable link for applications */}
            <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
              <p className="text-small mb-2" style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                For applications, use this link:
              </p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <code 
                  className="text-small px-3 py-2 rounded"
                  style={{ 
                    background: 'var(--bg-tertiary)', 
                    color: 'var(--text-primary)',
                    fontFamily: 'monospace',
                    fontSize: '0.875rem',
                    border: '1px solid var(--border-medium)'
                  }}
                >
                  https://dineshappavoo.com/resume-dinesh-appavoo.pdf
                </code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('https://dineshappavoo.com/resume-dinesh-appavoo.pdf');
                    // Could add a toast notification here
                  }}
                  className="btn btn-ghost ui-font"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                  title="Copy link to clipboard"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}