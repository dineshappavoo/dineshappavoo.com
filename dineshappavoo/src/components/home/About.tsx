'use client';

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0A192F] py-16">
      <div className="max-w-6xl mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-2">My Journey</h2>
          <div className="h-px w-16 bg-[#64FFDA]"></div>
        </motion.div>

        <div className="grid grid-cols-12 gap-12">
          {/* Main Content - 8 columns */}
          <div className="col-span-8 space-y-8">
            {/* Current Research */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#112240] rounded-lg p-6 border border-slate-800"
            >
              <h3 className="text-[#64FFDA] text-lg font-medium mb-3">Current Research & Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Advanced FFSC Rocket Engine Development</h4>
                  <p className="text-slate-300 text-sm">
                    Designing a Full-Flow Staged Combustion rocket engine similar to Raptor 3, featuring an integrated propulsion system with oxygen-rich and fuel-rich turbopump systems, main combustion chamber design, and optimized bell nozzle configuration.
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Computational Blood Proteomics Research</h4>
                  <p className="text-slate-300 text-sm">
                    Pioneering research in blood protein analysis and virtual modeling, focusing on protein structure mapping and creating virtual blood twins for drug discovery applications using AlphaFold 3 technology.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Innovation & Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-[#112240] rounded-lg p-6 border border-slate-800"
            >
              <h3 className="text-[#64FFDA] text-lg font-medium mb-3">Innovation & Social Impact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Founder & CEO @ Labineer</h4>
                  <p className="text-slate-400 text-xs mb-2">2010 - 2011</p>
                  <p className="text-slate-300 text-sm">
                    Founded a healthcare equipment marketplace company to provide quality equipment at competitive prices, implementing price comparison features.
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Board of Directors @ RRRcomputer.org</h4>
                  <p className="text-slate-400 text-xs mb-2">2020 - 2021</p>
                  <p className="text-slate-300 text-sm">
                    Led marketing and strategic planning initiatives to bridge the digital divide, including fundraising campaigns and media collaborations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Professional Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-[#112240] rounded-lg p-6 border border-slate-800"
            >
              <h3 className="text-[#64FFDA] text-lg font-medium mb-3">Professional Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Engineering Manager (Product Focused) @ Affirm</h4>
                  <p className="text-slate-400 text-xs mb-2">2020 - 2023</p>
                  <p className="text-slate-300 text-sm">
                    Led the development and scaling of Affirm Card from inception, focusing on user experience, product growth, and core platform functionality.
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Engineering @ Twitter</h4>
                  <p className="text-slate-400 text-xs mb-2">2016 - 2020</p>
                  <p className="text-slate-300 text-sm">
                    Built core user experience and platform products, including services for timeline, messaging, and user authentication.
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Engineering @ AWS</h4>
                  <p className="text-slate-400 text-xs mb-2">2015 - 2016</p>
                  <p className="text-slate-300 text-sm">
                    Launched and scaled AWS load balancing products (ALB/ELB) across multiple regions to support millions of machines.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Education & Skills - 4 columns */}
          <div className="col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#112240] rounded-lg p-6 border border-slate-800"
            >
              <h3 className="text-[#64FFDA] text-lg font-medium mb-3">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-white text-sm font-medium">The University of Texas</h4>
                  <p className="text-slate-400 text-xs">MS, Computer Science</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}