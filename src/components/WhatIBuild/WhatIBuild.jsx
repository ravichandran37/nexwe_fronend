import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Network, BrainCircuit } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './WhatIBuild.css';

const buildAreas = [
  {
    icon: <Layout size={32} />,
    title: "Frontend Development",
    description: "Responsive and interactive web interfaces."
  },
  {
    icon: <Server size={32} />,
    title: "Backend Development",
    description: "Scalable backend applications using Python and Django."
  },
  {
    icon: <Network size={32} />,
    title: "REST APIs",
    description: "Structured APIs for frontend-backend communication."
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "AI & Machine Learning",
    description: "NLP and machine-learning powered applications."
  }
];

const WhatIBuild = () => {
  const [ref, isRevealed] = useScrollReveal();

  return (
    <section className="what-i-build-section">
      <div className="container" ref={ref}>
        <div className="eyebrow justify-center">WHAT WE BUILD</div>
        <h2 className="section-title text-center mb-5">Core Capabilities</h2>

        <div className="build-grid">
          {buildAreas.map((area, idx) => (
            <motion.div
              key={idx}
              className="build-card glass-card text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isRevealed ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="build-icon">
                {area.icon}
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
