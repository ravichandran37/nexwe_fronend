import React from 'react';
import Process from '../components/Process/Process';
import SEO from '../components/SEO/SEO';
import { pageSeoData } from '../config/seoConfig';

const processBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexwe.in/' },
    { '@type': 'ListItem', position: 2, name: 'Process', item: 'https://nexwe.in/process' }
  ]
};

const ProcessPage = () => {
  return (
    <div className="process-page animate-fade-in pt-12">
      <SEO {...pageSeoData.process} schema={processBreadcrumbSchema} />
      <Process />
    </div>
  );
};

export default ProcessPage;
