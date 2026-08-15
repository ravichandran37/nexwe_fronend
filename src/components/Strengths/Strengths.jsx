import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Users, Target } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Strengths.css';

const strengths = [
  { icon: <Lightbulb size={28} />, title: "Problem Solvers", desc: "Approaching complex issues with logical, elegant, and highly creative solutions." },
  { icon: <Zap size={28} />, title: "Agile Development", desc: "Adapting rapidly to new technologies, market trends, and shifting requirements." },
  { icon: <Users size={28} />, title: "Collaborative Partners", desc: "Working closely and transparently with you to achieve shared business objectives." },
  { icon: <Target size={28} />, title: "Dedicated Support", desc: "Taking full initiative, ensuring robust deployments, and driving tasks to successful completion." }
];

const Strengths = () => {
  const [ref, isRevealed] = useScrollReveal();

  return (
    <section className="strengths-section py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-secondary rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="flex flex-col items-center text-center mb-16">
          <div className="eyebrow mb-6 justify-center">STRENGTHS</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Choose <span className="text-gradient-accent">Us</span>
          </h2>
        </div>
        
        <div className="strengths-grid">
          {strengths.map((item, idx) => (
            <motion.div 
              key={idx}
              className="strength-card glass-card relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="strength-icon-wrapper mb-6">
                <div className="strength-icon">{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
