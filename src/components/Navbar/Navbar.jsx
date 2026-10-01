import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScheduleModal } from '../../context/ScheduleModalContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Close menus when route changes
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileAccordionOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close dropdown on desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const { openScheduleModal } = useScheduleModal();

  // Check if current route is part of services
  const isServicesActive = 
    location.pathname === '/services' ||
    location.pathname.startsWith('/services/') ||
    location.pathname === '/process';

  const serviceDropdownItems = [
    {
      num: "01",
      title: "WEB DEVELOPMENT",
      desc: "Modern websites and full-stack web applications",
      href: "/services/web-development"
    },
    {
      num: "02",
      title: "APP DEVELOPMENT",
      desc: "Android, iOS and cross-platform mobile applications",
      href: "/services/app-development"
    },
    {
      num: "03",
      title: "SECURITY SERVICES",
      desc: "Application security and protection solutions",
      href: "/services/security"
    },
    {
      num: "04",
      title: "OUR PROCESS",
      desc: "How we plan, design and deliver projects",
      href: "/process"
    }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" aria-label="Nexwe Solutions Home">
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img src="/logo.png" alt="Nexwe Solutions Logo" width="36" height="36" className="logo-img" />
          </picture>
          <span className="logo-text">
            NEXWE<span className="dot"></span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {/* 1. Home */}
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {/* 2. About */}
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          {/* 3. Services Dropdown (Desktop) / Accordion (Mobile) */}
          <div 
            className="nav-item-dropdown desktop-only"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-link services-dropdown-trigger ${isServicesActive ? 'active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              <span>Services</span>
              <ChevronDown size={14} className={`dropdown-chevron ${dropdownOpen ? 'rotated' : ''}`} />
            </button>

            {/* Desktop Mega Dropdown */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  className="mega-dropdown-menu"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.num}
                      to={item.href}
                      className={`dropdown-item ${location.pathname === item.href ? 'active-item' : ''}`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="dropdown-item-num">{item.num}</span>
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-title">{item.title}</span>
                        <span className="dropdown-item-desc">{item.desc}</span>
                      </div>
                      <div className="dropdown-item-arrow-wrap">
                        <ArrowRight size={14} className="dropdown-item-arrow" />
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Services Accordion */}
          <div className="mobile-services-accordion mobile-only">
            <button
              type="button"
              className={`mobile-services-trigger ${isServicesActive ? 'active' : ''}`}
              onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
            >
              <span>Services</span>
              <span className="mobile-accordion-toggle">
                {mobileAccordionOpen ? '−' : '+'}
              </span>
            </button>

            {mobileAccordionOpen && (
              <div className="mobile-services-drawer animate-fade-in">
                {serviceDropdownItems.map((item) => (
                  <Link
                    key={item.num}
                    to={item.href}
                    className={`mobile-drawer-link ${location.pathname === item.href ? 'active' : ''}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileAccordionOpen(false);
                    }}
                  >
                    <span>{item.num}. {item.title}</span>
                    <ArrowRight size={13} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 4. Projects */}
          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>

          {/* 5. Contact */}
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {/* CTA Schedule Call Button */}
          <button 
            type="button" 
            className="btn-cta" 
            onClick={() => {
              setMenuOpen(false);
              openScheduleModal();
            }}
          >
            <span className="btn-cta-text">Schedule Call</span>
            <Calendar size={16} className="btn-cta-icon" />
            <div className="btn-cta-bg"></div>
          </button>
        </div>

        {/* Hamburger Menu Toggle */}
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
