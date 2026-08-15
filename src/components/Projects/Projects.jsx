import React, { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

const Projects = () => {
  const [ref, isRevealed] = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/3 left-0 w-150 h-150 bg-primary rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-150 h-150 bg-accent rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-6">WORK</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-muted text-lg max-w-md">
            A selection of my best work in web development, backend engineering, and robust architectures.
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
      
      {selectedProject && (
        <CaseStudyModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
