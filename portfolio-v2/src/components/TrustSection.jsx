import React from 'react';

const TrustSection = () => {
  const values = [
    { label: 'Accuracy', description: 'Precision-driven execution.' },
    { label: 'Efficiency', description: 'Optimized systems, zero waste.' },
    { label: 'Privacy', description: 'Enterprise-grade confidentiality.' },
    { label: 'Scalability', description: 'Built to grow with you.' },
  ];

  return (
    <section className="relative py-12 bg-surface/50 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-text-primary font-bold text-xl tracking-tight">
              The <span className="text-accent-blue">Systems</span> Standard
            </h3>
            <p className="text-text-secondary text-sm">Built on reliability and technical excellence.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {values.map((val) => (
              <div key={val.label} className="flex items-center gap-2 group">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue group-hover:scale-125 transition-transform" />
                <span className="text-text-secondary text-sm font-medium group-hover:text-text-primary transition-colors">
                  {val.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
