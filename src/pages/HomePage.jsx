import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Network, BrainCircuit, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero/Hero';
import Marquee from '../components/Marquee/Marquee';
import InteractiveTerminal from '../components/Terminal/InteractiveTerminal';

const buildAreas = [
  { icon: <Layout size={32} />, title: "Frontend", desc: "Interactive web interfaces." },
  { icon: <Server size={32} />, title: "Backend", desc: "Scalable Python & Django apps." },
  { icon: <Network size={32} />, title: "REST APIs", desc: "Structured frontend-backend communication." },
  { icon: <BrainCircuit size={32} />, title: "AI/ML", desc: "NLP and machine-learning integrations." }
];

const HomePage = () => {
  return (
    <div className="home-page animate-fade-in">
      <Hero />
      <Marquee />
      
      <section className="bento-section relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="eyebrow justify-center mb-10">CORE CAPABILITIES</div>
          
          <div className="bento-grid">
            {/* Main Terminal Box */}
            <motion.div 
              className="bento-item col-span-8 row-span-2 flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient-accent">System Access</h3>
              <InteractiveTerminal />
            </motion.div>
            
            {/* Side Boxes (Frontend / Backend) */}
            <motion.div 
              className="bento-item col-span-4 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-primary mb-4">{buildAreas[0].icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{buildAreas[0].title}</h3>
                <p className="text-muted text-sm">{buildAreas[0].desc}</p>
              </div>
            </motion.div>

            <motion.div 
              className="bento-item col-span-4 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-secondary mb-4">{buildAreas[1].icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{buildAreas[1].title}</h3>
                <p className="text-muted text-sm">{buildAreas[1].desc}</p>
              </div>
            </motion.div>

            {/* Bottom Row Boxes */}
            <motion.div 
              className="bento-item col-span-6 flex flex-col justify-between group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-between items-start">
                 <div className="text-accent mb-4">{buildAreas[2].icon}</div>
                 <ArrowRight className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{buildAreas[2].title}</h3>
                <p className="text-muted">{buildAreas[2].desc}</p>
              </div>
            </motion.div>

            <motion.div 
              className="bento-item col-span-6 flex flex-col justify-between group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-between items-start">
                 <div className="text-(--text) mb-4">{buildAreas[3].icon}</div>
                 <ArrowRight className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{buildAreas[3].title}</h3>
                <p className="text-muted">{buildAreas[3].desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
