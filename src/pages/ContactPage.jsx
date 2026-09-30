import React from 'react';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO/SEO';
import { pageSeoData } from '../config/seoConfig';

const contactBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexwe.in/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://nexwe.in/contact' }
  ]
};

const ContactPage = () => {
  return (
    <div className="contact-page animate-fade-in pt-12">
      <SEO {...pageSeoData.contact} schema={contactBreadcrumbSchema} />
      <Contact />
    </div>
  );
};

export default ContactPage;
