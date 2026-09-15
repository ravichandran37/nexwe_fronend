import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { API_BASE_URL } from '../../config/api';
import './Projects.css';

const Projects = () => {
  const [ref, isRevealed] = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/portfolio/projects/`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section id="projects" className="projects-section py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/3 left-0 w-150 h-150 bg-primary rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-150 h-150 bg-accent rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="section-header max-w-2xl mb-14">
          <div className="eyebrow mb-3">SELECTED WORK</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            A curated portfolio of production-grade systems, full-stack web platforms, and intelligent AI architectures engineered for scale.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={idx}
              isRevealed={isRevealed}
              onOpenCaseStudy={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>
      
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
