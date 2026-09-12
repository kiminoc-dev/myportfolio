import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/5 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="text-text-primary font-black text-xl tracking-tighter mb-2">
              KIM JOSEPH INOC
            </div>
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} All rights reserved. Engineered for excellence.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: <img src="/Images/Logo/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />, href: 'https://www.linkedin.com/in/kim-joseph-inoc-b4a34a436' },
              { icon: <img src="/Images/Logo/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />, href: 'https://web.whatsapp.com/' },
              { icon: <img src="/Images/Logo/gmail.png" alt="Email" className="w-5 h-5 object-contain" />, href: 'mailto:kimjosephinoc@gmail.com' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="interactive text-text-secondary hover:text-accent-blue transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
