import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left side: Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter mb-6">
                Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Something</span> Great.
              </h2>
              <p className="text-text-secondary text-lg mb-12 leading-relaxed">
                Whether you need a streamlined operation or a high-converting digital presence, I'm here to engineer the solution.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <img src="/Images/Logo/gmail.png" alt="Gmail" className="w-5 h-5 object-contain" />, label: 'Gmail', value: 'kimjosephinoc@gmail.com', href: 'mailto:kimjosephinoc@gmail.com' },
                  { icon: <img src="/Images/Logo/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />, label: 'WhatsApp', value: '+63 965 744 9089', href: 'https://wa.me/639657449089' },
                  { icon: <img src="/Images/Logo/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />, label: 'LinkedIn', value: 'https://www.linkedin.com/in/kim-joseph-inoc-b4a34a436', href: 'https://www.linkedin.com/in/kim-joseph-inoc-b4a34a436' },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-4 group cursor-pointer interactive"
                  >
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-text-secondary text-xs uppercase tracking-widest">{item.label}</div>
                      <div className="text-text-primary font-bold">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-surface border border-white/10 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-text-secondary text-xs uppercase tracking-widest font-medium ml-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary focus:border-accent-blue outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-text-secondary text-xs uppercase tracking-widest font-medium ml-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary focus:border-accent-blue outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-text-secondary text-xs uppercase tracking-widest font-medium ml-1">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary focus:border-accent-blue outline-none transition-all"
                  placeholder="Systems Optimization"
                />
              </div>

              <div className="space-y-2">
                <label className="text-text-secondary text-xs uppercase tracking-widest font-medium ml-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary focus:border-accent-blue outline-none transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="interactive w-full py-4 bg-accent-blue text-white font-bold rounded-xl hover:bg-blue-600 transition-all transform hover:scale-[1.02] active:scale-95"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
