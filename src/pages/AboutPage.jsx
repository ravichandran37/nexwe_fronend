import React from 'react';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Strengths from '../components/Strengths/Strengths';
import SEO from '../components/SEO/SEO';
import { pageSeoData } from '../config/seoConfig';

const aboutBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexwe.in/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://nexwe.in/about' }
  ]
};

const AboutPage = () => {
  return (
    <div className="about-page animate-fade-in pt-12">
      <SEO {...pageSeoData.about} schema={aboutBreadcrumbSchema} />
      <About />
      <Education />
      <Strengths />
    </div>
  );
};

export default AboutPage;
