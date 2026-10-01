import React from 'react';
import Projects from '../components/Projects/Projects';
import SEO from '../components/SEO/SEO';
import { pageSeoData } from '../config/seoConfig';

const projectsBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexwe.in/' },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://nexwe.in/projects' }
  ]
};

const ProjectsPage = () => {
  return (
    <div className="projects-page animate-fade-in pb-16">
      <SEO {...pageSeoData.projects} schema={projectsBreadcrumbSchema} />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
