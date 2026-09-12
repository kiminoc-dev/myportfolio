import React from 'react';
import { motion } from 'framer-motion';

const WhyMe = () => {
  const reasons = [
    {
      title: 'Technical Foundation',
      description: 'With a BSIT degree, I don’t just use tools; I understand the underlying systems, ensuring everything is optimized for performance.',
      icon: <img src="/Images/Icons/email.png" alt="Technical Foundation" className="w-12 h-12 object-contain mx-auto" />,
    },
    {
      title: 'Systems Thinking',
      description: 'I view your business as a set of interconnected systems, identifying bottlenecks and automating them for maximum efficiency.',
      icon: <img src="/Images/Icons/system_thinking.png" alt="Systems Thinking" className="w-12 h-12 object-contain mx-auto" />,
    },
    {
      title: 'Design Precision',
      description: 'I believe that high-end aesthetics are a signal of quality. I build interfaces that evoke trust and professionalism.',
      icon: <img src="/Images/Icons/uidesign.png" alt="Design Precision" className="w-12 h-12 object-contain mx-auto" />,
    },
  ];

  return (
    <section id="why-me" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-medium mb-6 tracking-wider uppercase">
              The Edge
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter mb-6">
              Why Choose a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Technical VA</span>?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              The difference between a generic assistant and a technical partner is the ability to engineer the environment, not just operate within it.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-surface border border-white/10 hover:border-accent-blue/50 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">{reason.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
