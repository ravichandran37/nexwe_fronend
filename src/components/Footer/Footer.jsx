import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Github, Linkedin, ArrowRight, Calendar } from 'lucide-react';
import { socialLinks } from '../../data/social';
import { useScheduleModal } from '../../context/ScheduleModalContext';
import './Footer.css';

const Footer = () => {
  const { openScheduleModal } = useScheduleModal();

  return (
    <footer className="footer-wrapper">
      <div className="footer-glow-line"></div>
      <div className="container mx-auto px-4">
        
        {/* CTA Section */}
        <div className="footer-cta glass-card">
          <div className="cta-content">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build something amazing?</h2>
            <p className="text-muted max-w-xl">
              Whether you need a scalable backend, a sleek frontend, or a complete full-stack solution, let's turn your vision into reality.
            </p>
          </div>
          <button onClick={() => openScheduleModal()} className="cta-button group cursor-pointer border-none text-left appearance-none">
            <span className="relative z-10 font-medium text-white">Schedule Call</span>
            <Calendar className="relative z-10 transition-transform group-hover:scale-110 text-white ml-2" size={18} />
            <div className="cta-button-bg"></div>
          </button>
        </div>

        {/* Main Footer */}
        <div className="footer-main">
          <div className="footer-brand-section">
            <Link to="/" className="logo footer-logo">
              NEXWE<span className="dot"></span>
            </Link>
            <p className="footer-role">Elevating digital experiences with premium software development.</p>
            <div className="footer-socials">
              {socialLinks.email && (
                <a href={`mailto:${socialLinks.email}`} className="social-icon" aria-label="Email">
                  <Mail size={20} />
                </a>
              )}
              {socialLinks.phone && (
                <a href={`tel:${socialLinks.phone.replace(/\s+/g, '')}`} className="social-icon" aria-label="Phone">
                  <Phone size={20} />
                </a>
              )}
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                  <Github size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>
          
          <div className="footer-stack-section">
            <div className="eyebrow mb-6! justify-start!">Tech Stack</div>
            <div className="stack-grid mono">
              <span>React</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>Django</span>
              <span>REST APIs</span>
              <span>SQL</span>
            </div>
          </div>
          
          <div className="footer-nav-section">
            <div className="eyebrow mb-6! justify-start!">Navigation</div>
            <ul className="footer-nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/process">Process</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Nexwe Solutions. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
