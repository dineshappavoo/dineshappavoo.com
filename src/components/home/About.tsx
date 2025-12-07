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
          <p className="text-meta mb-6" style={{ color: 'var(--accent-green)' }}>BACKGROUND</p>
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
                <span className="text-meta" style={{ color: 'var(--accent-blue)' }}>2020 — 2023</span>
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
                <span className="text-meta" style={{ color: 'var(--accent-blue)' }}>2016 — 2020</span>
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
                <span className="text-meta" style={{ color: 'var(--accent-blue)' }}>2015 — 2016</span>
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
          
          <div className="card-orange mb-8">
            <h4 className="mb-2" style={{ fontSize: '1.25rem' }}>MS in Computer Science</h4>
            <p style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
              The University of Texas at Dallas
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-tertiary)' }}>
              Focused on distributed systems, algorithms, and machine learning foundations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                <h4 style={{ fontSize: '1.25rem' }}>Founder & CEO, Labineer</h4>
                <span className="text-meta" style={{ color: 'var(--accent-green)' }}>2010 — 2011</span>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Built a healthcare equipment marketplace focused on price transparency and 
                quality—a precursor to my current work in healthcare innovation.
              </p>
            </div>

            <div className="card">
              <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                <h4 style={{ fontSize: '1.25rem' }}>Board of Directors, RRRcomputer.org</h4>
                <span className="text-meta" style={{ color: 'var(--accent-green)' }}>2020 — 2021</span>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Led strategic initiatives to bridge the digital divide through technology access 
                programs and community partnerships.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="divider"></div>

        {/* Current Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-6">Current Research Focus</h3>
          
          <div className="grid-2">
            <div className="card-blue">
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="mb-3" style={{ fontSize: '1.25rem' }}>Rocket Propulsion Systems</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Full-Flow Staged Combustion engines, turbopump architecture, combustion 
                chamber optimization, and nozzle design for next-generation spacecraft.
              </p>
            </div>

            <div className="card-green">
              <div className="text-5xl mb-4">🧬</div>
              <h4 className="mb-3" style={{ fontSize: '1.25rem' }}>Computational Proteomics</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Virtual blood modeling, protein structure prediction using AlphaFold 3, 
                drug-protein interaction simulation, and personalized medicine applications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}