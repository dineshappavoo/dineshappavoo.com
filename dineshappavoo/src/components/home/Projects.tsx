'use client';

import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#0A192F] py-16">
      <div className="max-w-6xl mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-2">My Work</h2>
          <div className="h-px w-16 bg-[#64FFDA]"></div>
        </motion.div>

        <div className="grid grid-cols-12 gap-12">
          {/* Main Projects - 8 columns */}
          <div className="col-span-8 space-y-8">
            {/* FFSC Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#112240] rounded-lg p-6 border border-slate-800"
            >
              <h3 className="text-[#64FFDA] text-lg font-medium mb-3">Full-Flow Staged Combustion (FFSC) Rocket Engine</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Project Overview</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    Developing a next-generation FFSC rocket engine inspired by SpaceX's Raptor 3, focusing on optimizing performance and efficiency through advanced propulsion system design.
                  </p>
                  
                  <h4 className="text-white text-sm font-medium mb-2">Key Components</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Oxygen-Rich Turbopump System
                      <p className="text-slate-400 text-xs ml-4 mt-1">
                        High-pressure oxygen turbopump design optimized for maximum efficiency and stable operation at extreme conditions.
                      </p>
                    </li>
                    <li>• Fuel-Rich Turbopump Architecture
                      <p className="text-slate-400 text-xs ml-4 mt-1">
                        Advanced fuel delivery system designed for optimal fuel-oxidizer ratio control and combustion stability.
                      </p>
                    </li>
                    <li>• Main Combustion Chamber (MCC)
                      <p className="text-slate-400 text-xs ml-4 mt-1">
                        Innovative chamber design focusing on optimal mixing, combustion efficiency, and thermal management.
                      </p>
                    </li>
                    <li>• Bell Nozzle Configuration
                      <p className="text-slate-400 text-xs ml-4 mt-1">
                        Computationally optimized bell nozzle design for maximum thrust and efficiency at various atmospheric conditions.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Virtual Twin Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-[#112240] rounded-lg p-6 border border-slate-800"
            >
              <h3 className="text-[#64FFDA] text-lg font-medium mb-3">Virtual Blood Twin Research</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Project Overview</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    Creating a comprehensive virtual blood modeling system using AlphaFold 3 technology for advanced drug discovery and personalized medicine applications.
                  </p>

                  <h4 className="text-white text-sm font-medium mb-2">Key Research Areas</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Protein Structure Mapping
                      <p className="text-slate-400 text-xs ml-4 mt-1">
                        Detailed mapping and analysis of blood protein structures using advanced computational methods.
                      </p>
                    </li>
                    <li>• AlphaFold Integration
                      <p className="text-slate-400 text-xs ml-4 mt-1">
                        Implementing and extending AlphaFold 3's capabilities for accurate protein structure prediction and interaction modeling.
                      </p>
                    </li>
                    <li>• Virtual Twin Development
                      <p className="text-slate-400 text-xs ml-4 mt-1">
                        Creating digital representations of blood components for simulation and analysis.
                      </p>
                    </li>
                    <li>• Drug Interaction Modeling
                      <p className="text-slate-400 text-xs ml-4 mt-1">
                        Simulating and predicting drug interactions with blood proteins for accelerated drug discovery.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project Stats & Info - 4 columns */}
          <div className="col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#112240] rounded-lg p-6 border border-slate-800"
            >
              <h3 className="text-[#64FFDA] text-lg font-medium mb-3">Project Links</h3>
              <div className="space-y-3">
                <a 
                  href="https://hypersona.dineshappavoo.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-slate-300 text-sm hover:text-[#64FFDA] transition-colors"
                >
                  Hypersona Project →
                </a>
                <a 
                  href="https://thebean.dineshappavoo.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-slate-300 text-sm hover:text-[#64FFDA] transition-colors"
                >
                  TheBean Research →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-[#112240] rounded-lg p-6 border border-slate-800"
            >
              <h3 className="text-[#64FFDA] text-lg font-medium mb-3">Research Areas</h3>
              <div className="space-y-2">
                <p className="text-slate-300 text-sm">• Rocket Propulsion Systems</p>
                <p className="text-slate-300 text-sm">• Computational Biology</p>
                <p className="text-slate-300 text-sm">• Machine Learning</p>
                <p className="text-slate-300 text-sm">• Protein Structure Analysis</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}