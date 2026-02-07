'use client';

import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-editorial">
        <div className="divider-colored"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-meta mb-6" style={{ color: 'var(--orange-accent)' }}>RESEARCH & DEVELOPMENT</p>
          <h2 className="mb-6">Deep Technical Work</h2>
          <p className="text-subtitle">
            Exploring the boundaries of aerospace engineering and computational biology.
          </p>
        </motion.div>

        {/* FFSC Engine Research */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="mb-6">
            <span className="badge ui-font mb-4 inline-block" style={{
              background: 'var(--orange-light)',
              color: 'var(--orange-accent)',
              border: '1px solid var(--orange-accent)'
            }}>AEROSPACE ENGINEERING</span>
            <h3 className="mb-4">Full-Flow Staged Combustion Engine</h3>
            <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
              Advanced propulsion research inspired by SpaceX Raptor 3
            </p>
          </div>

          <div className="space-y-6">
            <p>
              The Full-Flow Staged Combustion (FFSC) cycle represents the pinnacle of rocket 
              engine design—a configuration that extracts maximum performance from every drop 
              of propellant. Unlike traditional engines that waste energy, FFSC systems route 
              all propellant through turbines before combustion, achieving unprecedented efficiency.
            </p>

            <div className="pull-quote">
              "The FFSC cycle isn't just incrementally better—it's fundamentally different, 
              enabling performance metrics that seemed impossible a decade ago."
            </div>

            <p>
              Our research focuses on four critical subsystems, each presenting unique engineering 
              challenges that push the boundaries of materials science and thermodynamics.
            </p>

            <div className="grid-2 mt-8 mb-8">
              <div className="card-accent">
                <h4 className="mb-3" style={{ fontSize: '1.125rem' }}>Oxygen-Rich Turbopump</h4>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  Operating in oxygen-rich environments at extreme temperatures, this system 
                  demands materials that can withstand oxidative stress while maintaining 
                  structural integrity under high-speed rotation.
                </p>
              </div>

              <div className="card-accent">
                <h4 className="mb-3" style={{ fontSize: '1.125rem' }}>Fuel-Rich Turbopump</h4>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  The fuel-rich side manages cryogenic propellants while precisely controlling 
                  mixture ratios—critical for maintaining combustion stability and preventing 
                  destructive oscillations.
                </p>
              </div>

              <div className="card" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '1rem',
                  bottom: '1rem',
                  width: '3px',
                  background: 'var(--orange-accent)',
                  opacity: 0.3,
                  borderRadius: '2px'
                }}></div>
                <h4 className="mb-3" style={{ fontSize: '1.125rem' }}>Main Combustion Chamber</h4>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  Where chemistry becomes thrust. We're optimizing injection patterns and 
                  chamber geometry to achieve complete combustion while managing thermal 
                  loads that would melt most materials.
                </p>
              </div>

              <div className="card" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '1rem',
                  bottom: '1rem',
                  width: '3px',
                  background: 'var(--orange-accent)',
                  opacity: 0.3,
                  borderRadius: '2px'
                }}></div>
                <h4 className="mb-3" style={{ fontSize: '1.125rem' }}>Bell Nozzle</h4>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  Computational fluid dynamics guides our nozzle design, optimizing expansion 
                  ratios for performance across varying atmospheric conditions—from sea level 
                  to vacuum.
                </p>
              </div>
            </div>

            <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
              This work directly supports Hypersona's vision of making point-to-point rocket 
              travel economically viable and safe for regular passenger operations.
            </p>

            <div className="pt-4">
              <a 
                href="https://hyperx.hypersona.space" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-accent ui-font"
              >
                Explore the technical details →
              </a>
            </div>
          </div>
        </motion.article>

        <div className="divider"></div>

        {/* Virtual Blood Twin Research */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="mb-6">
            <span className="badge ui-font mb-4 inline-block" style={{
              background: 'var(--orange-light)',
              color: 'var(--orange-accent)',
              border: '1px solid var(--orange-accent)'
            }}>COMPUTATIONAL BIOLOGY</span>
            <h3 className="mb-4">Virtual Blood Twin Technology</h3>
            <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
              Digital proteomics using AlphaFold 3 for personalized medicine
            </p>
          </div>

          <div className="space-y-6">
            <p>
              Blood is our body's information highway—a complex soup of thousands of proteins, 
              each playing specific roles in everything from immunity to metabolism. Understanding 
              how drugs interact with this system has historically required years of wet-lab 
              experimentation. We're changing that paradigm.
            </p>

            <div className="pull-quote">
              "By creating accurate digital models of blood at the molecular level, we can 
              test thousands of drug candidates in silico before synthesizing a single molecule."
            </div>

            <p>
              Using AlphaFold 3's breakthrough protein structure prediction capabilities, we're 
              building comprehensive models of blood proteomics. These "virtual twins" capture 
              the structural details and interaction patterns that govern drug behavior in the 
              human body.
            </p>

            <div className="grid-2 mt-8 mb-8">
              <div className="card-accent">
                <h4 className="mb-3" style={{ fontSize: '1.125rem' }}>Protein Structure Mapping</h4>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  Systematic analysis of blood protein structures, creating a comprehensive 
                  atlas of molecular architecture that serves as the foundation for all 
                  downstream predictions.
                </p>
              </div>

              <div className="card-accent">
                <h4 className="mb-3" style={{ fontSize: '1.125rem' }}>Drug Interaction Modeling</h4>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  Simulating how drug candidates bind to target proteins, predicting both 
                  efficacy and potential side effects before clinical trials.
                </p>
              </div>

              <div className="card" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '1rem',
                  bottom: '1rem',
                  width: '3px',
                  background: 'var(--orange-accent)',
                  opacity: 0.3,
                  borderRadius: '2px'
                }}></div>
                <h4 className="mb-3" style={{ fontSize: '1.125rem' }}>Virtual Twin Development</h4>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  Creating personalized models that account for individual genetic variations, 
                  enabling truly tailored therapeutic approaches.
                </p>
              </div>

              <div className="card" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '1rem',
                  bottom: '1rem',
                  width: '3px',
                  background: 'var(--orange-accent)',
                  opacity: 0.3,
                  borderRadius: '2px'
                }}></div>
                <h4 className="mb-3" style={{ fontSize: '1.125rem' }}>Discovery Pipeline</h4>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  Accelerating drug discovery by orders of magnitude, from years to months, 
                  while reducing costs and improving success rates.
                </p>
              </div>
            </div>

            <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
              This research powers Bean's mission to democratize personalized medicine through 
              computational precision.
            </p>

            <div className="pt-4">
              <a 
                href="https://bean.inc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-accent ui-font"
              >
                Learn about the technology →
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}