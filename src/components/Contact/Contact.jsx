import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { socialLinks } from '../../data/social';
import './Contact.css';

const Contact = () => {
  const [ref, isRevealed] = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        const errorMsg = Object.values(data).flat().join(', ') || 'Failed to send message. Please try again.';
        setStatus({ type: 'error', message: errorMsg });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container" ref={ref}>
        <motion.div 
          className="contact-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info">
            <div className="eyebrow">CONTACT</div>
            <h2 className="contact-heading">LET'S BUILD SOMETHING GREAT.</h2>
            <p className="contact-subtitle">Have a project, opportunity or idea? Let's talk.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><Mail size={20} /></div>
                <div>
                  <div className="method-label mono">EMAIL</div>
                  <a href={`mailto:${socialLinks.email}`} className="method-value">{socialLinks.email}</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon"><Phone size={20} /></div>
                <div>
                  <div className="method-label mono">PHONE</div>
                  <a href={`tel:${socialLinks.phone.replace(/\s+/g, '')}`} className="method-value">{socialLinks.phone}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container glass-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  placeholder="Tell us about your project..."
                  rows="5"
                ></textarea>
              </div>
              
              {status.message && (
                <div className={`status-message ${status.type}`}>
                  {status.message}
                </div>
              )}
              
              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
