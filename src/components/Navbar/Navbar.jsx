import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useScheduleModal } from '../../context/ScheduleModalContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  const { openScheduleModal } = useScheduleModal();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/process' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          NEXWE<span className="dot"></span>
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
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
