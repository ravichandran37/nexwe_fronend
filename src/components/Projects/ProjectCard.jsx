import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

const ProjectCard = ({ project, index, isRevealed, onOpenCaseStudy }) => {
  return (
    <motion.div 
      className="project-card glass-card group relative overflow-hidden flex flex-col md:flex-row h-full p-0"
      initial={{ opacity: 0, y: 40 }}
      animate={isRevealed ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="project-content p-8 md:p-12 md:w-1/2 flex flex-col justify-center z-10">
        <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="project-description text-muted text-lg leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.badges.map(badge => (
            <span key={badge} className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
              {badge}
            </span>
          ))}
        </div>
        
        <ul className="space-y-3 mb-8">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground/80">
              <CheckCircle2 size={18} className="text-secondary mt-1 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          {project.features.length > 3 && (
            <li className="text-muted text-sm italic pl-7">
              +{project.features.length - 3} more features
            </li>
          )}
        </ul>
        
        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
          <button className="btn btn-primary group/btn shadow-lg shadow-primary/20 hover:shadow-primary/40" onClick={onOpenCaseStudy}>
            <span>View Case Study</span>
            <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-3 ml-auto">
            <a href="#" className="p-2 rounded-full bg-card border border-border text-muted hover:text-primary hover:border-primary transition-all hover:scale-110" title="Source code private">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-card border border-border text-muted hover:text-primary hover:border-primary transition-all hover:scale-110" title="Demo offline">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-visual md:w-1/2 bg-black/5 dark:bg-white/5 relative flex items-center justify-center p-8 md:p-12 border-t md:border-t-0 md:border-l border-border overflow-hidden">
        {/* Animated Wireframe Mockup */}
        <div className="mockup-window bg-card/80 backdrop-blur-md border border-border/50 rounded-xl w-full max-w-md shadow-2xl overflow-hidden group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out">
          <div className="mockup-header bg-border/20 px-4 py-3 border-b border-border/50 flex gap-2 items-center">
            <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-400/80"></span>
          </div>
          <div className="mockup-body p-6 space-y-4">
            <div className="w-3/4 h-6 bg-border/30 rounded-md overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            </div>
            <div className="w-full h-24 bg-border/20 rounded-md"></div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-20 bg-border/20 rounded-md"></div>
              <div className="h-20 bg-primary/20 rounded-md"></div>
              <div className="h-20 bg-border/20 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
