import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Smartphone, ShieldCheck, GitBranch, ArrowRight, Check } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import { pageSeoData } from '../config/seoConfig';
import { servicesList } from '../data/servicesData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ServicesPage.css';

const serviceIcons = {
  "web-development": <Globe size={28} />,
  "app-development": <Smartphone size={28} />,
  "security": <ShieldCheck size={28} />,
  "process": <GitBranch size={28} />
};

const servicesBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexwe.in/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://nexwe.in/services' }
  ]
};

const ServicesPage = () => {
  const [ref, isRevealed] = useScrollReveal();

  return (
    <div className="services-page animate-fade-in pt-12 sm:pt-16 pb-20">
      <SEO {...pageSeoData.services} schema={servicesBreadcrumbSchema} />

      {/* Hero Header */}
      <section className="services-hero relative overflow-hidden pt-8 pb-12 sm:pb-16">
        <div className="absolute top-1/4 left-0 w-125 h-125 bg-primary rounded-full mix-blend-multiply filter blur-[160px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-125 h-125 bg-accent rounded-full mix-blend-multiply filter blur-[160px] opacity-10 pointer-events-none"></div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header max-w-2xl mb-12 sm:mb-16">
            <div className="eyebrow mb-4 sm:mb-5">ENGINEERING CAPABILITIES</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground uppercase font-sans mb-4 sm:mb-5">
              Core <span className="text-gradient-accent">Services</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              We engineer scalable digital systems from modern full-stack web applications and cross-platform mobile apps to application security and disciplined agile delivery.
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="services-grid" ref={ref}>
            {servicesList.map((service, idx) => (
              <motion.div
                key={service.id}
                className="service-card glass-card group flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                animate={isRevealed ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              >
                <div>
                  {/* Card Top: Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-bold text-primary tracking-widest">
                      {service.number} // {service.title}
                    </span>
                    <div className="service-card-icon">
                      {serviceIcons[service.id]}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  {/* 3-4 Key Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 4).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 font-medium">
                        <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={2.5} />
                        </span>
                        <span>{typeof feat === 'string' ? feat : feat.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Action */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between mt-auto">
                  <Link
                    to={service.path}
                    className="text-xs sm:text-sm font-bold tracking-wider uppercase text-primary hover:text-secondary flex items-center gap-2 transition-colors group/link py-1"
                  >
                    <span>EXPLORE SERVICE</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <span className="font-mono text-[11px] text-muted uppercase">
                    Production Grade
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="glass-card p-8 sm:p-12 text-center rounded-3xl border border-border/60">
          <div className="eyebrow justify-center mb-4">START A PROJECT</div>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Need a tailored software solution?
          </h3>
          <p className="text-muted max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
            Let's discuss your requirements, define architecture, and map out a strategic timeline for your project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn btn-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider rounded-xl">
              Get In Touch
            </Link>
            <Link to="/projects" className="btn btn-secondary px-8 py-3.5 text-sm font-bold uppercase tracking-wider rounded-xl">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
