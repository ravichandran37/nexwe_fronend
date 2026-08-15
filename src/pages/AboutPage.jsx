import React from 'react';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Strengths from '../components/Strengths/Strengths';

const AboutPage = () => {
  return (
    <div className="about-page animate-fade-in pt-12">
      <About />
      <Education />
      <Strengths />
    </div>
  );
};

export default AboutPage;
