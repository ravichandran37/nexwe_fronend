import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Check } from 'lucide-react';

const ProjectCard = ({ project, index, isRevealed, onOpenCaseStudy }) => {
  // Individual distinct card styling while maintaining overall harmony
  const getCardStyleClass = (idx) => {
    switch (idx % 3) {
      case 0:
        return 'card-variant-alpha';
      case 1:
        return 'card-variant-beta';
      case 2:
        return 'card-variant-gamma';
      default:
        return '';
    }
  };

  const getImageRadius = (idx) => {
    switch (idx % 3) {
      case 0:
        return 'rounded-xl';
      case 1:
        return 'rounded-xl rounded-tr-2xl rounded-bl-2xl';
      case 2:
        return 'rounded-xl';
      default:
        return 'rounded-xl';
    }
  };

  return (
    <motion.div
      className={`project-card group flex flex-col justify-between ${getCardStyleClass(index)}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isRevealed ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        {/* 1. Large Project Image Area */}
        <div 
          className={`project-image-container relative overflow-hidden ${getImageRadius(index)} cursor-pointer`}
          onClick={onOpenCaseStudy}
        >
          {/* Subtle Project Number */}
          <div className="project-number-badge">
            {project.number || `0${index + 1}`}
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="project-image w-full aspect-[16/10] object-cover object-top block transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1"
            loading="lazy"
          />

          {/* Interactive Hover Overlay with "VIEW PROJECT →" */}
          <div className="project-image-overlay absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-10">
            <span className="text-white text-xs font-mono font-bold tracking-wider flex items-center gap-1.5 uppercase">
              <span>View Case Study</span>
              <ArrowRight size={13} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>

        {/* 2. Editorial Monospace Technical Label */}
        <div className="pt-5 pb-1.5">
          <span className="font-mono text-xs tracking-wider text-primary font-semibold uppercase">
            {project.editorialLabel || `0${index + 1} // SHOWCASE`}
          </span>
        </div>

        {/* 3. Large Bold Project Title */}
        <h3 
          className="project-title text-xl sm:text-2xl font-bold tracking-tight text-foreground uppercase font-sans mb-4 group-hover:text-primary transition-colors cursor-pointer leading-tight line-clamp-2"
          onClick={onOpenCaseStudy}
        >
          {project.title}
        </h3>

        {/* 4. Short Feature List (2-3 concise items) */}
        <ul className="project-features-list space-y-2 mb-6">
          {(project.features || []).slice(0, 3).map((feature, fIdx) => (
            <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
              <span className="feature-check-icon w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check size={11} strokeWidth={2.5} />
              </span>
              <span className="truncate">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 5. Actions: Clean Text-Link Style */}
      <div className="project-card-actions pt-4 border-t border-border/50 flex items-center justify-between text-xs sm:text-sm font-bold tracking-wider uppercase mt-auto">
        <button
          type="button"
          onClick={onOpenCaseStudy}
          className="text-primary hover:text-secondary flex items-center gap-1.5 transition-colors cursor-pointer group/link py-1"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-foreground flex items-center gap-1 transition-colors group/live py-1"
          >
            <span>LIVE DEMO</span>
            <ExternalLink size={12} className="group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
