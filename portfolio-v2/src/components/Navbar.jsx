import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className={`
          mx-auto flex items-center justify-between px-6 py-3 rounded-full border border-white/10 transition-all duration-300
          ${isScrolled ? 'bg-surface/80 backdrop-blur-md' : 'bg-surface/40 backdrop-blur-sm'}
          max-w-6xl
        `}>
          {/* Logo */}
          <a href="#home" className="text-text-primary font-black text-lg tracking-tighter">
            KIM JOSEPH INOC
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Availability Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
              </span>
              <span className="text-text-secondary text-xs font-medium">Available for Work</span>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-6 right-6 bg-surface border border-white/10 rounded-3xl p-6 shadow-2xl md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-primary text-xl font-semibold hover:text-accent-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
              </span>
              <span className="text-text-secondary text-sm">Available for Work</span>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
