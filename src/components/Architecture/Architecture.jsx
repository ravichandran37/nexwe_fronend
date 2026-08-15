import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Architecture.css';

const Architecture = () => {
  const [ref, isRevealed] = useScrollReveal();

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.3,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <section className="architecture-section">
      <div className="container" ref={ref}>
        <div className="eyebrow text-center">ARCHITECTURE</div>
        <h2 className="section-title text-center mb-5">Full Stack Architecture</h2>
        
        <div className="arch-diagram">
          {/* SVG for connecting lines */}
          <svg className="arch-lines" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {isRevealed && (
              <>
                <motion.path 
                  d="M500,80 L500,150 L200,150 L200,220" 
                  stroke="var(--primary)" strokeWidth="2" fill="none"
                  variants={lineVariants} initial="hidden" animate="visible"
                />
                <motion.path 
                  d="M500,80 L500,220" 
                  stroke="var(--primary)" strokeWidth="2" fill="none"
                  variants={lineVariants} initial="hidden" animate="visible"
                />
                <motion.path 
                  d="M500,80 L500,150 L800,150 L800,220" 
                  stroke="var(--primary)" strokeWidth="2" fill="none"
                  variants={lineVariants} initial="hidden" animate="visible"
                />
                <motion.path 
                  d="M200,320 L200,450 L500,450 L500,480" 
                  stroke="var(--primary)" strokeWidth="2" fill="none"
                  variants={lineVariants} initial="hidden" animate="visible"
                />
                <motion.path 
                  d="M500,320 L500,480" 
                  stroke="var(--primary)" strokeWidth="2" fill="none"
                  variants={lineVariants} initial="hidden" animate="visible"
                />
                <motion.path 
                  d="M800,320 L800,450 L500,450 L500,480" 
                  stroke="var(--primary)" strokeWidth="2" fill="none"
                  variants={lineVariants} initial="hidden" animate="visible"
                />
              </>
            )}
          </svg>

          <div className="arch-node root-node">
            <div className="glass-card text-center">
              <h3>FULL STACK</h3>
            </div>
          </div>
          
          <div className="arch-branches">
            <div className="arch-node">
              <div className="glass-card text-center">
                <h3>FRONTEND</h3>
                <p className="mono text-muted mt-2 text-sm">React, JS, HTML, CSS</p>
              </div>
            </div>
            <div className="arch-node">
              <div className="glass-card text-center">
                <h3>BACKEND</h3>
                <p className="mono text-muted mt-2 text-sm">Python, Django, Flask, REST API</p>
              </div>
            </div>
            <div className="arch-node">
              <div className="glass-card text-center">
                <h3>DATABASE</h3>
                <p className="mono text-muted mt-2 text-sm">MySQL, SQLite</p>
              </div>
            </div>
          </div>

          <div className="arch-node converge-node">
            <div className="glass-card text-center">
              <h3>TOOLS</h3>
              <p className="mono text-muted mt-2 text-sm">Git, GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
