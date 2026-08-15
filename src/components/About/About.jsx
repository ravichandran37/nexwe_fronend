import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Layout, Server, Network, Database, BrainCircuit, ArrowDown } from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, isRevealed] = useScrollReveal();

  const flowSteps = [
    { id: '01', label: 'Frontend', icon: <Layout size={20} /> },
    { id: '02', label: 'Backend', icon: <Server size={20} /> },
    { id: '03', label: 'REST APIs', icon: <Network size={20} /> },
    { id: '04', label: 'Database', icon: <Database size={20} /> },
    { id: '05', label: 'AI/ML', icon: <BrainCircuit size={20} />, highlight: true }
  ];

  return (
    <section id="about" className="about-section py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-[-10%] w-125 h-125 bg-secondary rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="eyebrow mb-6">ABOUT NEXWE</div>
        
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            animate={isRevealed ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Bridging the gap between <span className="text-gradient-accent">design</span> and <span className="text-gradient">robust engineering.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted">
              <p>
                Nexwe Solutions is a forward-thinking agency dedicated to building modern, high-performance web applications. We don't just write code; we solve real-world problems through scalable technology.
              </p>
              <p>
                From pixel-perfect responsive user interfaces to complex backend architectures, RESTful APIs, and intelligent data systems, our full-stack expertise ensures every project is built to last.
              </p>
            </div>
            
            <div className="mt-12 flex gap-4 flex-wrap md:flex-nowrap">
              <div className="stat-card glass-card w-full">
                <span className="stat-value text-gradient-accent">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-card glass-card w-full">
                <span className="stat-value text-gradient">24/7</span>
                <span className="stat-label">Support & Maintenance</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={isRevealed ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flow-container glass-card">
              <div className="flow-background-beam"></div>
              {flowSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className={`flow-step-card ${step.highlight ? 'highlight' : ''}`}>
                    <div className="step-icon">{step.icon}</div>
                    <div className="step-details">
                      <span className="step-id mono">{step.id}</span>
                      <span className="step-label-text">{step.label}</span>
                    </div>
                  </div>
                  {index < flowSteps.length - 1 && (
                    <div className="flow-arrow-wrapper">
                      <ArrowDown size={20} className="animate-bounce-slow text-muted" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
