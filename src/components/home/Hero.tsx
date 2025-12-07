'use client';

import { motion } from "framer-motion";

export function Hero() {
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
            <span className="badge badge-orange">Researcher</span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-10 border-t border-b" style={{ borderColor: 'var(--border-light)' }}>
            <div className="stat">
              <div className="stat-number" style={{ color: 'var(--accent-blue)' }}>2</div>
              <div className="stat-label">Companies Founded</div>
            </div>
            <div className="stat">
              <div className="stat-number" style={{ color: 'var(--accent-green)' }}>8+</div>
              <div className="stat-label">Years in Tech</div>
            </div>
            <div className="stat">
              <div className="stat-number" style={{ color: 'var(--accent-orange)' }}>3</div>
              <div className="stat-label">Major Companies</div>
            </div>
            <div className="stat">
              <div className="stat-number" style={{ color: 'var(--accent-purple)' }}>2</div>
              <div className="stat-label">Research Areas</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 ui-font">
            <a href="#companies" className="btn btn-blue">
              Explore My Work
            </a>
            <a href="#about" className="btn btn-outline">
              My Journey
            </a>
            <a href="mailto:hello@dineshappavoo.com" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Featured Quote */}
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
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
              Developing <strong>Full-Flow Staged Combustion rocket engines</strong> for point-to-point Earth transportation 
              and creating <strong>digital blood twins</strong> using AlphaFold 3 for personalized medicine.
            </p>
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