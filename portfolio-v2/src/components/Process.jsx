import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      title: 'Discovery',
      description: 'Deep dive into your current bottlenecks and goals. We define the system requirements and success metrics.',
      time: 'Phase 01',
    },
    {
      title: 'Architecture',
      description: 'Designing the blueprint. Whether it is a workflow in Github or a site structure, we map every interaction.',
      time: 'Phase 02',
    },
    {
      title: 'Execution',
      description: 'High-fidelity implementation. Building the assets and configuring the tools with technical precision.',
      time: 'Phase 03',
    },
    {
      title: 'Optimization',
      description: 'Testing, refining, and scaling. We ensure the system runs autonomously and achieves the desired KPIs.',
      time: 'Phase 04',
    },
  ];

  return (
    <section id="process" className="relative min-h-screen w-full py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-medium mb-6 tracking-wider uppercase">
              Methodology
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Systems</span> Approach
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              I don't just complete tasks; I build scalable systems. Here is the technical process I use to ensure excellence.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Content */}
                <div className="flex-1 pl-8 md:pl-0 md:px-12 text-left">
                  <div className={`p-6 rounded-3xl bg-surface border border-white/10 hover:border-accent-blue/50 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <span className="text-accent-blue text-xs font-bold uppercase tracking-widest mb-2 block">
                      {step.time}
                    </span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Point */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent-blue z-10" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
