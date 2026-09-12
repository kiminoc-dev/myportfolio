import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What makes a "Technical VA" different from a regular VA?',
      answer: 'A Technical VA possesses the skills to build and manage the systems you use. Instead of just following a manual, I can create the manual, automate the repetitive parts, and ensure your tech stack is communicating efficiently.',
    },
    {
      question: 'Do you handle both design and administrative work?',
      answer: 'Yes. My unique value is the intersection of both. I can manage your high-level scheduling and email flow while simultaneously designing your landing pages and optimizing your conversion funnels.',
    },
    {
      question: 'What tools are you most proficient in?',
      answer: 'I specialize in the productivity ecosystem: Github, VS Code, Slack, Google Workspace, and MS Office. On the design side, I leverage Figma, Canva, and modern web technologies like React and Tailwind CSS.',
    },
    {
      question: 'How do we get started with a partnership?',
      answer: 'I start with a discovery call to understand your current systems and bottlenecks. From there, I propose a tailored strategy to optimize your operations and digital presence.',
    },
  ];

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-medium mb-6 tracking-wider uppercase">
              Common Questions
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter mb-6">
              Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Asked</span>
            </h2>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-surface border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between group hover:bg-white/5 transition-colors"
              >
                <span className="text-text-primary font-bold text-lg group-hover:text-accent-blue transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-text-secondary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
