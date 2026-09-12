import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-medium mb-6 tracking-wider uppercase">
                Technical Virtual Assistant & Web Designer
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-text-primary leading-tight tracking-tighter mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Digital</span> Excellence.
            </motion.h1>

            <motion.p
              className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Bridging the gap between <span className="text-text-primary font-medium">operational efficiency</span> and <span className="text-text-primary font-medium">high-end design</span>. I build systems that scale and interfaces that convert.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Magnetic>
                <a
                  href="#work"
                  className="interactive px-8 py-4 bg-accent-blue text-white font-bold rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent-blue/25 w-full sm:w-auto text-center block"
                >
                  View My Work
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="interactive px-8 py-4 bg-white/5 text-text-primary font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto text-center block"
                >
                  Get in Touch
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Hero Profile Image Slot & Orbital Rings */}
          <div className="flex-1 relative w-full flex items-center justify-center py-6">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[450px] aspect-square mx-auto flex items-center justify-center">
              {/* Vibrant Ambient Glow behind avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-blue/25 via-accent-purple/20 to-transparent blur-3xl pointer-events-none" />

              {/* Orbital Rings with futuristic rotation */}
              <div className="absolute -inset-4 sm:-inset-6 border border-white/10 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent-blue shadow-[0_0_12px_#3b82f6]" />
              </div>
              <div className="absolute -inset-8 sm:-inset-12 border border-dashed border-accent-purple/20 rounded-full animate-[spin_45s_linear_infinite_reverse] pointer-events-none" />

              {/* The Hero Target Slot */}
              <div
                id="hero-image-slot"
                className="relative w-full h-full rounded-full border-2 border-white/10 bg-surface/30 backdrop-blur-sm shadow-2xl"
              >
                <div id="hero-image" className="absolute inset-0 rounded-full pointer-events-none" />
                {/* Subtle internal ring for depth */}
                <div className="absolute inset-2 rounded-full border border-white/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
