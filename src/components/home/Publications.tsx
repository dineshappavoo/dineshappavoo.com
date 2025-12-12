'use client';

import { motion } from "framer-motion";

export function Publications() {
  return (
    <section id="publications" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-editorial">
        <div className="divider-colored"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-meta mb-6" style={{ color: 'var(--accent-purple)' }}>PUBLICATIONS</p>
          <h2 className="mb-6">Patents & Research Papers</h2>
          <p className="text-subtitle">
            Contributing to the body of knowledge in aerospace propulsion and computational healthcare.
          </p>
        </motion.div>

        {/* Patent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="mb-6">Patents</h3>
          
          <div className="card-blue">
            <div className="mb-4">
              <span className="badge badge-blue ui-font">US PATENT APPLICATION</span>
            </div>
            
            <h4 className="mb-3" style={{ fontSize: '1.25rem' }}>
              <a 
                href="https://patents.justia.com/patent/20240378581"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                Patent Application No. 20240378581
              </a>
            </h4>

            <p className="text-meta mb-4">PUBLICATION NUMBER: US-2024-0378581-A1 • 2024</p>

            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Method and apparatus for handling of refunds in association with a functionally dynamic card.
            </p>

            <a 
              href="https://patents.justia.com/patent/20240378581"
              target="_blank"
              rel="noopener noreferrer"
              className="link-blue ui-font"
            >
              View Patent Application →
            </a>
          </div>
        </motion.div>

        {/* Papers in Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className="mb-6">Current Research Papers</h3>
          
          <div className="space-y-6">
            {/* Rocket Engine Paper */}
            <div className="card">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <div>
                  <span className="badge badge-blue ui-font">IN PROGRESS</span>
                </div>
                <span className="text-meta">AEROSPACE ENGINEERING</span>
              </div>
              
              <h4 className="mb-3" style={{ fontSize: '1.25rem' }}>
                Build a Rocket Engine from Scratch called HyperX: Design of a FFSC Engine from Theory to 3D
              </h4>

              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                A comprehensive guide to designing a Full-Flow Staged Combustion (FFSC) rocket engine 
                from fundamental theory through complete 3D modeling. Covers turbopump architecture, 
                combustion chamber design, nozzle optimization, and thermal management systems.
              </p>
            </div>

            {/* Healthcare Paper */}
            <div className="card">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <div>
                  <span className="badge badge-green ui-font">IN PROGRESS</span>
                </div>
                <span className="text-meta">COMPUTATIONAL BIOLOGY</span>
              </div>
              
              <h4 className="mb-3" style={{ fontSize: '1.25rem' }}>
                Digital Blood Twins: Computational Proteomics for Personalized Medicine
              </h4>

              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Exploring the development of virtual blood models using AlphaFold 3 technology for 
                protein structure prediction. Investigates applications in drug discovery, personalized 
                medicine, and predictive modeling of drug-protein interactions at the molecular level.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
            Interested in collaboration or have questions about this research? <br />
            <a href="mailto:hello@dineshappavoo.com" className="link-blue">Get in touch</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}