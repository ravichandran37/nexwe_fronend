import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, BrainCircuit, Wrench } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { API_BASE_URL } from '../../config/api';
import './TechStack.css';

const iconMap = {
  Layout: <Layout size={24} />,
  Server: <Server size={24} />,
  Database: <Database size={24} />,
  BrainCircuit: <BrainCircuit size={24} />,
  Wrench: <Wrench size={24} />
};

const TechStack = () => {
  const [ref, isRevealed] = useScrollReveal();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/portfolio/skills/`)
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error("Error fetching skills:", err));
  }, []);

  return (
    <section id="skills" className="tech-section">
      <div className="container" ref={ref}>
        <div className="eyebrow">TECH STACK</div>
        <h2 className="section-title">Technologies & Tools</h2>
        
        <div className="tech-grid">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              className="tech-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="tech-icon-wrapper">
                {iconMap[skillGroup.icon]}
              </div>
              <h3>{skillGroup.category}</h3>
              <ul className="tech-list">
                {skillGroup.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
