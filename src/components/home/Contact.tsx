'use client';

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="section-lg" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-editorial">
        <div className="divider-colored"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
          <div className="flex justify-center gap-6 mb-8 ui-font flex-wrap">
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
          </div>
        </motion.div>

        {/* Quick Links to Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <a 
            href="https://hyperx.hypersona.space"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-accent text-center"
            style={{ position: 'relative' }}
          >
            {/* Rocket Icon */}
            <div className="mb-4 flex justify-center">
              <svg width="48" height="48" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <h4 className="mb-2">Visit Hypersona</h4>
            <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
              Rocket propulsion research
            </p>
          </a>

          <a 
            href="https://bean.inc"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-accent text-center"
            style={{ position: 'relative' }}
          >
            {/* DNA Helix Icon */}
            <div className="mb-4 flex justify-center">
              <svg width="48" height="48" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <h4 className="mb-2">Visit Bean</h4>
            <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
              Digital blood twin technology
            </p>
          </a>
        </motion.div>

        <div className="divider"></div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-meta mb-4">
            © {new Date().getFullYear()} Dinesh Appavoo. All rights reserved.
          </p>
          <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
            Built with Next.js • Hosted on GitHub Pages
          </p>
        </motion.div>
      </div>
    </section>
  );
}