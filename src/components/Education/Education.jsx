import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Briefcase, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Education.css';

const Education = () => {
  const [ref, isRevealed] = useScrollReveal();

  return (
    <section id="education" className="education-section py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-150 h-150 bg-primary rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="eyebrow mb-6">FOUNDER'S BACKGROUND</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Meet the <span className="text-gradient">Founder</span>
        </h2>
        
        <motion.div 
          className="founder-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="founder-visual">
            <div className="founder-avatar-placeholder">
              <User size={64} className="text-primary" />
            </div>
            <div className="founder-badges">
              <div className="badge glass-card"><Briefcase size={16}/> 10+ Years Exp</div>
              <div className="badge glass-card"><Award size={16}/> Top Rated</div>
            </div>
          </div>
          
          <div className="founder-content">
            <h3 className="text-3xl font-bold text-foreground mb-2">Ravichandran A</h3>
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <GraduationCap size={20} /> Founder & Lead Developer
            </p>
            
            <div className="founder-bio space-y-4 text-lg text-muted">
              <p>
                Ravichandran established Nexwe Solutions with a singular vision: to help businesses scale gracefully through modern web technologies, AI, and robust system architectures.
              </p>
              <p>
                With extensive hands-on experience in full-stack engineering, he has a proven track record of crafting elegant digital solutions that don't just look stunning, but perform flawlessly under pressure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
