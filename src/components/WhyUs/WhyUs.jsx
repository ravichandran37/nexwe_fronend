import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Code } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './WhyUs.css';

const features = [
  {
    icon: <Users size={24} />,
    title: "Top-Tier Talent",
    description: "Our engineers and designers have years of experience building scalable, enterprise-grade applications."
  },
  {
    icon: <Zap size={24} />,
    title: "Agile & Fast Delivery",
    description: "We iterate quickly and communicate transparently, ensuring your product gets to market faster."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Security First",
    description: "We follow best practices in secure coding and data protection, treating your app's security as a priority."
  },
  {
    icon: <Code size={24} />,
    title: "Cutting-Edge Tech",
    description: "From React to Django and AI integrations, we use the latest tech stack to future-proof your product."
  }
];

const WhyUs = () => {
  const [ref, isRevealed] = useScrollReveal();

  return (
    <section className="why-us-section py-24 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="why-us-grid">
          {/* Image Column */}
          <motion.div 
            className="why-us-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={isRevealed ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="glass-card image-wrapper p-2!">
              <img src="/why_us_banner.jpg" alt="Why Choose Nexwe Solutions" className="why-us-img" />
              <div className="image-glow"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="why-us-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isRevealed ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="eyebrow mb-6">WHY WE ARE THE BEST</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Excellence & <span className="text-gradient">Trust</span>.
            </h2>
            <p className="text-muted text-lg mb-10">
              We don't just write code. We partner with you to understand your business goals and deliver digital solutions that drive real results.
            </p>

            <div className="features-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-item group">
                  <div className="feature-icon text-primary group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
