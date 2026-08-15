import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Search, PenTool, Code, CheckCircle, Rocket } from 'lucide-react';
import './Process.css';

const processSteps = [
  { num: "01", title: "DISCOVERY & PLAN", desc: "Understanding your vision, defining requirements, and mapping out a strategic roadmap.", icon: <Search size={24} /> },
  { num: "02", title: "UI/UX DESIGN", desc: "Crafting intuitive interfaces, defining architecture, and designing robust database schemas.", icon: <PenTool size={24} /> },
  { num: "03", title: "DEVELOPMENT", desc: "Building scalable frontend and backend systems with clean, efficient code.", icon: <Code size={24} /> },
  { num: "04", title: "TESTING", desc: "Rigorous quality assurance for applications, APIs, and databases to ensure stability.", icon: <CheckCircle size={24} /> },
  { num: "05", title: "DEPLOYMENT", desc: "Smooth release into production followed by ongoing maintenance and support.", icon: <Rocket size={24} /> }
];

const Process = () => {
  const [ref, isRevealed] = useScrollReveal();

  return (
    <section id="process" className="process-section relative z-10 py-24 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-125 h-125 bg-primary rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-20">
          <div className="eyebrow justify-center mb-6">HOW I WORK</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gradient">Development Process</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A systematic approach to transforming ideas into scalable, high-performance software solutions.
          </p>
        </div>
        
        <div className="process-timeline-container">
          <div className="process-line"></div>
          
          {processSteps.map((step, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <motion.div 
                key={idx}
                className={`process-timeline-item ${isEven ? 'item-right' : 'item-left'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isRevealed ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="process-timeline-content glass-card group">
                  <div className="process-timeline-icon">
                    {step.icon}
                  </div>
                  <span className="process-timeline-num mono">{step.num}</span>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted">{step.desc}</p>
                </div>
                
                {/* Center dot */}
                <div className="process-timeline-dot">
                  <div className="process-timeline-dot-inner"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
