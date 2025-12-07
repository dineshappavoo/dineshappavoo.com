'use client';

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="section-lg" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-editorial">
        <div className="divider-thick"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-meta mb-6" style={{ color: 'var(--accent-purple)' }}>GET IN TOUCH</p>
          <h2 className="mb-8">Let's Connect</h2>
          <p className="text-subtitle mb-12 max-w-xl mx-auto">
            Whether you're interested in collaboration, investment opportunities, or just want to chat about rockets and healthcare innovation.
          </p>
          
          <a 
            href="mailto:hello@dineshappavoo.com" 
            className="text-3xl font-semibold hover:opacity-70 transition-opacity inline-block mb-12"
            style={{ fontFamily: 'Lora, serif', color: 'var(--accent-blue)' }}
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
            className="card card-blue text-center"
          >
            <div className="text-4xl mb-3">🚀</div>
            <h4 className="mb-2">Visit Hypersona</h4>
            <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
              Rocket propulsion research
            </p>
          </a>

          <a 
            href="https://bean.inc"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-green text-center"
          >
            <div className="text-4xl mb-3">🧬</div>
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