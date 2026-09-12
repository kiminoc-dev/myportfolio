import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="relative min-h-screen w-full py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-medium mb-6 tracking-wider uppercase">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter mb-6">
              Premium Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Solutions</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Combining technical expertise with design precision to help professionals optimize their business and scale their impact.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="interactive group relative p-8 rounded-3xl bg-surface border border-white/10 hover:border-accent-blue/50 transition-all duration-300"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300 overflow-hidden">
                  <img
                    src={`/Images/Icons/${service.icon}.png`}
                    alt={service.title}
                    className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
