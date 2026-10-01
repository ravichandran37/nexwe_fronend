import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { API_BASE_URL } from '../../config/api';
import { projects as defaultProjects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [ref, isRevealed] = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/portfolio/projects/`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          // Merge images, editorialLabel, and features from defaultProjects if not present in API
          const merged = data.map((item, idx) => ({
            ...defaultProjects[idx],
            ...item,
            editorialLabel: item.editorialLabel || defaultProjects[idx]?.editorialLabel || `0${idx + 1} // PROJECT`,
            image: item.image || defaultProjects[idx]?.image || '/projects/cravo.jpg',
            features: item.features && item.features.length > 0 ? item.features.slice(0, 3) : defaultProjects[idx]?.features || [],
          }));
          setProjects(merged);
        }
      })
      .catch(err => {
        console.warn("Using offline portfolio projects data:", err.message);
      });
  }, []);

  return (
    <section id="projects" className="projects-section relative overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/3 left-0 w-150 h-150 bg-primary rounded-full mix-blend-multiply filter blur-[160px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-150 h-150 bg-accent rounded-full mix-blend-multiply filter blur-[160px] opacity-10 pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="section-header max-w-2xl mb-12 sm:mb-16">
          <div className="eyebrow mb-4 sm:mb-5">SELECTED WORK</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground uppercase font-sans mb-4 sm:mb-5">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            A curated showcase of production web applications, full-stack systems, and custom software platforms engineered with precision.
          </p>
        </div>

        {/* Multi-Column Responsive Project Gallery Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id || idx}
              project={project}
              index={idx}
              isRevealed={isRevealed}
              onOpenCaseStudy={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
