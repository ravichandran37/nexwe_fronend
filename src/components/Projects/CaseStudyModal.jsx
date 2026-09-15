import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, CheckCircle, AlertCircle, Lightbulb, Cpu, Layers, Award, Calendar } from 'lucide-react';
import { useScheduleModal } from '../../context/ScheduleModalContext';
import './CaseStudyModal.css';

const CaseStudyModal = ({ project, onClose }) => {
  const { openScheduleModal } = useScheduleModal();

  // Prevent scrolling when modal is open, restore on unmount
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const cs = project.caseStudy || {};
  const archSteps = project.architectureSteps || project.architecture_steps || [];
  const badges = project.badges || [];

  const handleBookDiscussion = () => {
    onClose();
    openScheduleModal({
      projectTitle: project.title,
      service: project.title.toLowerCase().includes('chatbot') 
        ? 'AI / NLP Chatbot' 
        : 'Full-Stack Web App'
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {/* Fixed Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <div className="modal-eyebrow">
              <span>CASE STUDY DEEP-DIVE</span>
              <span className="modal-eyebrow-sep">•</span>
              <span className="modal-eyebrow-tag">Production Ready</span>
            </div>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="modal-body">
          {/* Architecture Flow Section */}
          {archSteps.length > 0 && (
            <div className="cs-section architecture-section">
              <div className="cs-section-header">
                <Cpu size={18} className="text-primary" />
                <h4 className="cs-section-title mono">SYSTEM ARCHITECTURE FLOW</h4>
              </div>
              <div className="flow-path">
                {archSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flow-node">
                      <span className="node-number">{idx + 1}</span>
                      <span className="node-text">{step}</span>
                    </div>
                    {idx < archSteps.length - 1 && (
                      <div className="flow-arrow-right">
                        <ArrowRight size={16} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Overview */}
          {cs.overview && (
            <div className="cs-section">
              <div className="cs-section-header">
                <Layers size={18} className="text-primary" />
                <h4 className="cs-section-title mono">OVERVIEW</h4>
              </div>
              <p className="cs-body-text">{cs.overview}</p>
            </div>
          )}

          {/* Problem & Solution Grid */}
          {(cs.problem || cs.solution) && (
            <div className="problem-solution-grid">
              {cs.problem && (
                <div className="card-callout card-problem">
                  <div className="callout-header">
                    <AlertCircle size={18} className="text-amber-500" />
                    <span className="mono font-semibold">THE PROBLEM</span>
                  </div>
                  <p className="callout-text">{cs.problem}</p>
                </div>
              )}

              {cs.solution && (
                <div className="card-callout card-solution">
                  <div className="callout-header">
                    <Lightbulb size={18} className="text-emerald-500" />
                    <span className="mono font-semibold">THE SOLUTION</span>
                  </div>
                  <p className="callout-text">{cs.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {cs.features && (
            <div className="cs-section">
              <div className="cs-section-header">
                <CheckCircle size={18} className="text-primary" />
                <h4 className="cs-section-title mono">CORE CAPABILITIES & FEATURES</h4>
              </div>
              <p className="cs-body-text">{cs.features}</p>
            </div>
          )}

          {/* Architecture Details */}
          {cs.architecture && (
            <div className="cs-section">
              <div className="cs-section-header">
                <Cpu size={18} className="text-primary" />
                <h4 className="cs-section-title mono">BACKEND & SYSTEM DESIGN</h4>
              </div>
              <p className="cs-body-text">{cs.architecture}</p>
            </div>
          )}

          {/* Technologies */}
          <div className="cs-section">
            <div className="cs-section-header">
              <Layers size={18} className="text-primary" />
              <h4 className="cs-section-title mono">TECHNOLOGIES & TOOLS</h4>
            </div>
            {cs.technologies && <p className="cs-body-text mb-3">{cs.technologies}</p>}
            <div className="tech-badges-list">
              {badges.map((badge, idx) => (
                <span key={idx} className="tech-badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {cs.challenges && (
            <div className="cs-section">
              <div className="cs-section-header">
                <AlertCircle size={18} className="text-primary" />
                <h4 className="cs-section-title mono">ENGINEERING CHALLENGES & OVERCOMING THEM</h4>
              </div>
              <p className="cs-body-text">{cs.challenges}</p>
            </div>
          )}

          {/* Results & Business Value */}
          {cs.result && (
            <div className="result-highlight-card">
              <div className="result-header">
                <Award size={22} className="text-primary" />
                <h4 className="result-title mono">PROJECT RESULTS & IMPACT</h4>
              </div>
              <p className="result-text">{cs.result}</p>
            </div>
          )}

          {/* Bottom CTA to Schedule Call */}
          <div className="modal-cta-box">
            <div>
              <h5 className="cta-heading">Need a similar architecture or custom application?</h5>
              <p className="cta-sub">Let's discuss how we can build this for your business.</p>
            </div>
            <button className="btn btn-primary cta-schedule-btn" onClick={handleBookDiscussion}>
              <Calendar size={16} />
              <span>Schedule Strategy Call</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudyModal;
