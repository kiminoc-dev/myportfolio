import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { X, ExternalLink, Layers } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10 bg-background/90 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-6xl max-h-full overflow-y-auto bg-surface border border-white/10 rounded-3xl shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 rounded-full bg-background/50 border border-white/10 text-text-primary hover:bg-accent-blue transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="p-6 space-y-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover rounded-2xl border border-white/10"
            />
            <div className="grid grid-cols-2 gap-4">
              {project.screenshots.slice(0, 4).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} screenshot ${i+1}`}
                  className="w-full aspect-square object-cover rounded-xl border border-white/10"
                />
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-bold uppercase tracking-wider border border-accent-blue/20">
                {project.category}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-6 tracking-tighter">
              {project.title}
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-accent-blue">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold">Role</h4>
                  <p className="text-text-secondary">{project.role}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-accent-blue">
                  <img src="/Images/Icons/tools.png" alt="Tools" className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tools.map(tool => (
                      <span key={tool} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-text-secondary text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-accent-blue text-white font-bold rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-[1.02] active:scale-95"
              >
                View Live Project <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="relative min-h-screen w-full py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-medium mb-6 tracking-wider uppercase">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter mb-6">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Case Studies</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              A collection of systems and interfaces designed for performance, scalability, and visual impact.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="interactive group cursor-pointer relative overflow-hidden rounded-3xl bg-surface border border-white/10 transition-all duration-500 hover:border-accent-blue/50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="p-6">
                <span className="text-accent-blue text-xs font-bold uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-text-primary font-bold text-sm">
                  Explore Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
