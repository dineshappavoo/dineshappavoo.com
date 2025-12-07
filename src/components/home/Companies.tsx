'use client';

import { motion } from "framer-motion";

export function Companies() {
  return (
    <section id="companies" className="section border-bottom">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4">Companies</h2>
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
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-semibold mb-2">Hypersona</h3>
                <div className="badge mb-4">Aerospace</div>
              </div>
              
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                Revolutionary point-to-point rocket-based Earth transportation. 
                Developing Full-Flow Staged Combustion (FFSC) engines inspired by SpaceX Raptor 3.
              </p>

              <div className="mt-auto">
                <div className="flex items-center text-sm font-medium">
                  <span style={{ color: 'var(--text-secondary)' }}>Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--text-secondary)' }}>
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
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="text-5xl mb-4">🧬</div>
                <h3 className="text-2xl font-semibold mb-2">Bean</h3>
                <div className="badge mb-4">Healthcare</div>
              </div>
              
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                Digital blood twins using AlphaFold 3 technology. 
                Pioneering computational proteomics for personalized medicine and drug discovery.
              </p>

              <div className="mt-auto">
                <div className="flex items-center text-sm font-medium">
                  <span style={{ color: 'var(--text-secondary)' }}>Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--text-secondary)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Key Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div>
            <h4 className="font-semibold mb-2">Rocket Propulsion</h4>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              FFSC engine design, turbopump systems, combustion chamber optimization
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Computational Biology</h4>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              AlphaFold 3, protein structure prediction, virtual blood modeling
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Machine Learning</h4>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              Drug discovery, molecular dynamics, predictive modeling
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}