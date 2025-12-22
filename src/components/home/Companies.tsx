'use client';

import { motion } from "framer-motion";

export function Companies() {
  return (
    <section id="companies" className="section" style={{ borderBottom: '1px solid var(--border-light)' }}>
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
            {/* Subtle orange accent corner */}
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
                {/* Rocket Icon - Sophisticated design */}
                <div className="mb-4">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Main body */}
                    <path d="M28 4L34 16L34 36L28 44L22 36L22 16L28 4Z" 
                          stroke="var(--gray-800)" 
                          strokeWidth="1.5" 
                          fill="var(--bg-primary)"/>
                    
                    {/* Nose cone */}
                    <path d="M28 4L34 16L22 16L28 4Z" 
                          fill="var(--gray-200)"/>
                    
                    {/* Window */}
                    <circle cx="28" cy="22" r="3.5" 
                            stroke="var(--gray-700)" 
                            strokeWidth="1.5" 
                            fill="var(--bg-secondary)"/>
                    
                    {/* Body details */}
                    <line x1="22" y1="28" x2="34" y2="28" stroke="var(--gray-400)" strokeWidth="1"/>
                    <line x1="22" y1="32" x2="34" y2="32" stroke="var(--gray-400)" strokeWidth="1"/>
                    
                    {/* Left fin */}
                    <path d="M22 36L16 44L18 46L22 40" 
                          stroke="var(--gray-800)" 
                          strokeWidth="1.5" 
                          fill="var(--gray-100)"/>
                    
                    {/* Right fin */}
                    <path d="M34 36L40 44L38 46L34 40" 
                          stroke="var(--gray-800)" 
                          strokeWidth="1.5" 
                          fill="var(--gray-100)"/>
                    
                    {/* Exhaust flames - orange accent */}
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
            {/* Subtle orange accent corner */}
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
                {/* DNA Helix Icon - Sophisticated design */}
                <div className="mb-4">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Left strand */}
                    <path d="M22 8C26 12 26 16 22 20C18 24 18 28 22 32C26 36 26 40 22 44C18 48 18 52 22 56" 
                          stroke="var(--gray-800)" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          fill="none"/>
                    
                    {/* Right strand */}
                    <path d="M34 8C30 12 30 16 34 20C38 24 38 28 34 32C30 36 30 40 34 44C38 48 38 52 34 56" 
                          stroke="var(--gray-800)" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          fill="none"/>
                    
                    {/* Base pairs with orange accents */}
                    <g opacity="0.7">
                      <line x1="22" y1="12" x2="34" y2="12" stroke="var(--gray-500)" strokeWidth="1.5"/>
                      <line x1="22" y1="20" x2="34" y2="20" stroke="var(--orange-accent)" strokeWidth="1.5"/>
                      <line x1="22" y1="28" x2="34" y2="28" stroke="var(--gray-500)" strokeWidth="1.5"/>
                      <line x1="22" y1="36" x2="34" y2="36" stroke="var(--orange-accent)" strokeWidth="1.5"/>
                      <line x1="22" y1="44" x2="34" y2="44" stroke="var(--gray-500)" strokeWidth="1.5"/>
                    </g>
                    
                    {/* Connection nodes */}
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

        {/* Key Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div style={{ position: 'relative', paddingLeft: '1rem' }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: '0.25rem',
              width: '3px',
              height: '1.5rem',
              background: 'var(--orange-accent)',
              opacity: 0.5,
              borderRadius: '2px'
            }}></div>
            <h4 className="font-semibold mb-2">Rocket Propulsion</h4>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              FFSC engine design, turbopump systems, combustion chamber optimization
            </p>
          </div>
          <div style={{ position: 'relative', paddingLeft: '1rem' }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: '0.25rem',
              width: '3px',
              height: '1.5rem',
              background: 'var(--orange-accent)',
              opacity: 0.5,
              borderRadius: '2px'
            }}></div>
            <h4 className="font-semibold mb-2">Computational Biology</h4>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              AlphaFold 3, protein structure prediction, virtual blood modeling
            </p>
          </div>
          <div style={{ position: 'relative', paddingLeft: '1rem' }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: '0.25rem',
              width: '3px',
              height: '1.5rem',
              background: 'var(--orange-accent)',
              opacity: 0.5,
              borderRadius: '2px'
            }}></div>
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