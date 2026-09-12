import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* About Image Target Slot */}
          <div className="flex-1 relative w-full flex items-center justify-center py-6">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[450px] aspect-square mx-auto flex items-center justify-center">
              {/* Ambient Glow behind About slot */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-accent-blue/25 via-accent-purple/20 to-transparent blur-3xl pointer-events-none" />

              {/* The Target Slot Frame */}
              <div
                id="about-image-slot"
                className="relative w-full h-full rounded-[28px] border-2 border-white/10 bg-surface/40 backdrop-blur-md shadow-2xl"
              >
                <div id="about-image" className="absolute inset-0 rounded-[28px] pointer-events-none" />
              </div>

              {/* Floating Status Badge top-right */}
              <div className="absolute -top-3 -right-2 sm:-right-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 border border-white/15 text-xs font-medium text-text-secondary z-30 backdrop-blur-md shadow-xl pointer-events-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-text-primary text-[11px] font-mono tracking-wider font-semibold">AVAILABLE FOR WORK</span>
              </div>

              {/* Floating Tech Pill bottom-left */}
              <div className="absolute -bottom-3 -left-2 sm:-left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 border border-white/15 text-[11px] font-mono text-text-secondary z-30 backdrop-blur-md shadow-xl pointer-events-none">
                <span className="text-accent-blue font-bold">BSIT</span>
                <span>•</span>
                <span className="text-text-primary font-medium">Technical VA</span>
              </div>
            </div>
          </div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-black text-text-primary mb-8 tracking-tighter"
            >
              Hello, I'm <span className="text-accent-blue">Kim Joseph</span>.
            </motion.h2>

            <div className="space-y-6 text-text-secondary text-lg md:text-xl leading-relaxed">
              <p>
                I am a <span className="text-text-primary font-medium">BSIT graduate</span> with a passion for systems thinking and high-end digital craftsmanship. I don't just provide administrative support; I engineer productivity systems.
              </p>
              <p>
                My approach combines the technical rigor of information technology with the aesthetic precision of modern web design. This allows me to build digital presences that are not only visually stunning but technically optimized for growth and conversion.
              </p>
              <p>
                Whether it's managing complex workflows in Github or developing high-converting landing pages, my goal is always the same: <span className="text-text-primary font-medium">to eliminate friction and amplify impact.</span>
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: 'Degree', value: 'BS in IT' },
                { label: 'Focus', value: 'Systems Design' },
                { label: 'Exp', value: 'Technical VA' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-text-secondary text-xs uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-text-primary font-bold text-lg">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
