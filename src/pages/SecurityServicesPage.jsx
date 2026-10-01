import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, KeyRound, FileSearch, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import { pageSeoData } from '../config/seoConfig';
import { servicesList } from '../data/servicesData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScheduleModal } from '../context/ScheduleModalContext';
import './ServiceDetailPage.css';

const securityData = servicesList.find(s => s.id === "security");

const securityBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexwe.in/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://nexwe.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Security Services', item: 'https://nexwe.in/services/security' }
  ]
};

// The two top cards specified for Security Services: Authentication & Authorization and Security Audits
const topSecurityCards = [
  {
    title: "Authentication & Authorization",
    desc: "Implementation of JWT token lifecycles with secure refresh tokens, Role-Based Access Control (RBAC), bcrypt hashing, and Multi-Factor Authentication (MFA).",
    icon: <KeyRound size={22} className="text-primary" />
  },
  {
    title: "Security Audits",
    desc: "Comprehensive code reviews, dependency vulnerability scanning, configuration sanity checks, and realistic vulnerability remediation roadmaps.",
    icon: <FileSearch size={22} className="text-primary" />
  }
];

const SecurityServicesPage = () => {
  const [ref, isRevealed] = useScrollReveal();
  const { openScheduleModal } = useScheduleModal();

  return (
    <div className="service-detail-page animate-fade-in pt-12 sm:pt-16 pb-20">
      <SEO {...pageSeoData.security} schema={securityBreadcrumbSchema} />

      {/* Hero Glow */}
      <div className="absolute top-1/4 left-0 w-125 h-125 bg-primary rounded-full mix-blend-multiply filter blur-[160px] opacity-10 pointer-events-none"></div>

      {/* Main Unified Content Container: max-width 1350px, px 24px */}
      <div className="security-page-container">
        {/* Back link */}
        <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-muted hover:text-primary transition-colors mb-6 uppercase tracking-wider">
          <ArrowLeft size={14} />
          <span>All Services</span>
        </Link>

        {/* Section Header */}
        <div className="section-header max-w-3xl mb-10 sm:mb-12">
          <div className="eyebrow mb-4">03 // SPECIALIZED CAPABILITY</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground uppercase font-sans mb-4 sm:mb-5">
            Security <span className="text-gradient-accent">Services</span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            {securityData.overview}
          </p>
        </div>

        {/* Major Sections Stack: Top Cards -> Standards -> CTA with consistent 28px spacing */}
        <div className="security-sections-stack" ref={ref}>
          {/* 1. Top Service Cards: Authentication & Authorization | Security Audits */}
          <div className="security-cards-grid">
            {topSecurityCards.map((card, idx) => (
              <motion.div
                key={idx}
                className="security-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isRevealed ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
              >
                <div className="security-card-header">
                  <div className="security-card-icon-wrap">
                    {card.icon}
                  </div>
                  <h3 className="security-card-title">
                    {card.title}
                  </h3>
                </div>

                <p className="security-card-desc">
                  {card.desc}
                </p>

                <div className="security-card-footer">
                  <Check size={14} strokeWidth={2.5} />
                  <span>DEFENSE-IN-DEPTH</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. Security Standards Section */}
          <div className="security-standards-card glass-card">
            <h3 className="security-standards-title">
              Security Standards & Cryptography
            </h3>
            <p className="security-standards-desc">
              We apply pragmatic, realistic security engineering conforming to industry benchmarks such as OWASP ASVS and NIST guidelines.
            </p>

            {/* Technology Tags */}
            <div className="security-tags-row">
              {securityData.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="security-tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* Feature List: 2-column grid */}
            <div className="security-features-grid">
              {securityData.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="security-feature-item">
                  <div className="security-feature-check">
                    <Check size={12} strokeWidth={2.8} />
                  </div>
                  <span className="security-feature-text">{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Bottom CTA */}
          <div className="security-cta-banner">
            <div className="security-cta-left">
              <span className="security-cta-eyebrow">
                DISCIPLINED DELIVERY
              </span>
              <h4 className="security-cta-heading">
                Need an audit or secure platform implementation?
              </h4>
            </div>

            <div className="security-cta-right">
              <Link to="/process" className="security-cta-process-link">
                <span>OUR PROCESS</span>
                <ArrowRight size={14} />
              </Link>
              <button
                type="button"
                onClick={openScheduleModal}
                className="btn btn-primary security-cta-btn"
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

export default SecurityServicesPage;
