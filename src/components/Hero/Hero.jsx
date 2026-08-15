import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Terminal from '../Terminal/Terminal';
import MagneticButton from '../ui/MagneticButton';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="eyebrow">WE ARE</motion.div>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-title text-5xl md:text-7xl font-extrabold text-gradient-accent mb-4 tracking-tight">NEXWE SOLUTIONS</motion.h1>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-subtitle">SOFTWARE DEVELOPMENT AGENCY</motion.h2>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-description">
            We build modern, scalable web applications using React, Python, Django, REST APIs and SQL databases.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-actions">
            <MagneticButton>
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/contact" className="btn btn-secondary">Schedule Call</Link>
            </MagneticButton>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-social">
            <a href="mailto:ravichandran37frontend@gmail.com" aria-label="Email Me">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
