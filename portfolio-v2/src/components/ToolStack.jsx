import React from 'react';
import { motion } from 'framer-motion';
import { tools } from '../data/tools';

const ToolStack = () => {
  const iconMap = {
    'Google Workspace': '/Images/Logo/gmail.png',
    'MS Office': '/Images/Logo/msoffice.png',
    'Canva': '/Images/Icons/canva.png',
    'Github': '/Images/Logo/githublogo.png',
    'VS Code': '/Images/Logo/vscodelogo.png',
    'Slack': '/Images/Logo/slacklogo.png',
  };

  return (
    <section className="relative py-20 bg-surf ace/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-text-primary text-2xl font-bold tracking-tight">
            The <span className="text-accent-blue">Technical</span> Arsenal
          </h3>
          <p className="text-text-secondary text-sm mt-2">Industry standard tools for maximum efficiency.</p>
        </div>


        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="interactive flex items-center gap-4 px-8 py-4 rounded-2xl bg-surface border border-white/10 hover:border-accent-blue/50 transition-all duration-300 group"
            >
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={iconMap[tool.name] || '/Images/Icons/tools.png'}
                  alt={tool.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-text-secondary group-hover:text-text-primary font-medium text-lg transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStack;
