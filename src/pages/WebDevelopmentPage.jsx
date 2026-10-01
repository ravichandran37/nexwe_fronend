import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, Check, Server, ShoppingCart, Layers, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import { pageSeoData } from '../config/seoConfig';
import { servicesList } from '../data/servicesData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScheduleModal } from '../context/ScheduleModalContext';
import './ServiceDetailPage.css';

const webDevData = servicesList.find(s => s.id === "web-development");

const webBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexwe.in/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://nexwe.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Web Development', item: 'https://nexwe.in/services/web-development' }
  ]
};

const offeringIcons = [
  <Globe size={22} className="text-primary" />,
  <Server size={22} className="text-primary" />,
  <ShoppingCart size={22} className="text-primary" />,
  <Layers size={22} className="text-primary" />
];

const WebDevelopmentPage = () => {
  const [ref, isRevealed] = useScrollReveal();
  const { openScheduleModal } = useScheduleModal();

  return (
    <div className="service-detail-page animate-fade-in pt-12 sm:pt-16 pb-20">
      <SEO {...pageSeoData.webDevelopment} schema={webBreadcrumbSchema} />

      {/* Hero Glow */}
      <div className="absolute top-1/4 left-0 w-125 h-125 bg-primary rounded-full mix-blend-multiply filter blur-[160px] opacity-10 pointer-events-none"></div>

      {/* Main Unified Content Container: max-width 1350px, px 24px */}
      <div className="service-page-container">
        {/* Back link */}
        <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-muted hover:text-primary transition-colors mb-6 uppercase tracking-wider">
          <ArrowLeft size={14} />
          <span>All Services</span>
        </Link>

        {/* Section Header */}
        <div className="section-header max-w-3xl mb-10 sm:mb-12">
          <div className="eyebrow mb-4">01 // SPECIALIZED CAPABILITY</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground uppercase font-sans mb-4 sm:mb-5">
            Web <span className="text-gradient-accent">Development</span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            {webDevData.overview}
          </p>
        </div>

        {/* Major Sections Stack: Top Cards -> Standards -> CTA with consistent 28px spacing */}
        <div className="service-sections-stack" ref={ref}>
          {/* 1. Top Service Cards: 2x2 grid matching Security Services */}
          <div className="service-cards-grid">
            {webDevData.features.map((offering, idx) => (
              <motion.div
                key={idx}
                className="service-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isRevealed ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
              >
                <div className="service-card-header">
                  <div className="service-card-icon-wrap">
                    {offeringIcons[idx % offeringIcons.length]}
                  </div>
                  <h3 className="service-card-title">
                    {offering.title}
                  </h3>
                </div>

                <p className="service-card-desc">
                  {offering.desc}
                </p>

                <div className="service-card-footer">
                  <Check size={14} strokeWidth={2.5} />
                  <span>PRODUCTION READY</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. Large Information Section: Core Technologies & Architecture */}
          <div className="service-info-card glass-card">
            <h3 className="service-info-title">
              Core Technologies & Architecture
            </h3>
            <p className="service-info-desc">
              We leverage modern, battle-tested toolchains to ensure maximum performance, security, and long-term maintainability.
            </p>

            {/* Technology Tags */}
            <div className="service-tags-row">
              {webDevData.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="service-tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* Feature List: 2-column grid */}
            <div className="service-features-grid">
              {webDevData.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="service-feature-item">
                  <div className="service-feature-check">
                    <Check size={12} strokeWidth={2.8} />
                  </div>
                  <span className="service-feature-text">{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Bottom CTA: Identical 76px compact layout */}
          <div className="service-cta-banner">
            <div className="service-cta-left">
              <span className="service-cta-eyebrow">
                DISCIPLINED DELIVERY
              </span>
              <h4 className="service-cta-heading">
                Curious how we build and deliver projects?
              </h4>
            </div>

            <div className="service-cta-right">
              <Link to="/process" className="service-cta-process-link">
                <span>OUR PROCESS</span>
                <ArrowRight size={14} />
              </Link>
              <button
                type="button"
                onClick={openScheduleModal}
                className="btn btn-primary service-cta-btn"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
