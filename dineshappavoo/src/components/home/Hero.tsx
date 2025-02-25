'use client';

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#0A192F] flex items-center py-8">
      <div className="relative z-10 max-w-6xl mx-auto px-12 w-full">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left side content - 8 columns (66.66%) */}
          <div className="col-span-8">
            <motion.h1 
              className="text-3xl lg:text-4xl font-bold mb-3 text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Dinesh Appavoo
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-5"
            >
              <h2 className="text-base text-[#64FFDA] mb-2 tracking-normal">
                Technology Leader | Physics Enthusiast | Rocket Science Explorer
              </h2>
              <p className="text-xs text-slate-400 max-w-lg font-light">
                MS in Computer Science • Formerly @Affirm, @Twitter, @AWS
              </p>
            </motion.div>

            {/* Startups Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-5"
            >
              <h3 className="text-xs font-medium text-slate-200 mb-2 pb-1 border-b border-slate-800">
                Startups I'm Building
              </h3>
              <div className="space-y-2">
                {/* Hypersona Card */}
                <div className="bg-[#112240] rounded-lg p-2.5 border border-slate-800">
                  <div className="flex items-center">
                    <div className="w-7 h-7 flex items-center justify-center bg-[#1A3152] rounded-lg mr-3">
                      <span className="text-base font-bold text-[#64FFDA]">H</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-100">Hypersona</h3>
                      <p className="text-xs text-slate-400">Point-to-point rocket based earth transportation</p>
                    </div>
                  </div>
                </div>

                {/* TheBean Card */}
                <div className="bg-[#112240] rounded-lg p-2.5 border border-slate-800">
                  <div className="flex items-center">
                    <div className="w-7 h-7 flex items-center justify-center bg-[#1A3152] rounded-lg mr-3">
                      <motion.div
                        className="w-4 h-4 rounded-full bg-[#64FFDA]"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-100">TheBean</h3>
                      <p className="text-xs text-slate-400">Digital blood twin using AlphaFold 3</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-3"
            >
              <a href="#about" 
                 className="px-4 py-1.5 rounded-lg bg-[#64FFDA] text-[#0A192F] font-medium hover:bg-[#64FFDA]/90 transition-all text-xs">
                My Journey
              </a>
              <a href="#projects"
                 className="px-4 py-1.5 rounded-lg bg-transparent text-[#64FFDA] font-medium border border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all text-xs">
                My Current Work
              </a>
            </motion.div>
          </div>

          {/* Profile Picture - 4 columns (33.33%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block col-span-4"
          >
            <div className="relative w-[250px] mx-auto">
              <img
                src="/profile-pic.jpg"
                alt="Dinesh Appavoo"
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}