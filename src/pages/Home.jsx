import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Architecture from '../components/Architecture/Architecture';
import TechStack from '../components/TechStack/TechStack';
import WhatIBuild from '../components/WhatIBuild/WhatIBuild';
import Projects from '../components/Projects/Projects';
import Process from '../components/Process/Process';
import InteractiveTerminal from '../components/Terminal/InteractiveTerminal';
import Education from '../components/Education/Education';
import Strengths from '../components/Strengths/Strengths';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <About />
      <Architecture />
      <TechStack />
      <WhatIBuild />
      <Projects />
      <Process />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <InteractiveTerminal />
      </div>
      <Education />
      <Strengths />
      
      {/* Final CTA Section */}
      <section className="cta-section" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>READY TO BUILD SOMETHING?</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
            Let's turn ideas into real-world applications.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Get In Touch
          </a>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
