import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './CaseStudyModal.css';

const CaseStudyModal = ({ project, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const fields = [
    { label: 'Overview', value: project.caseStudy.overview },
    { label: 'Problem', value: project.caseStudy.problem },
    { label: 'Solution', value: project.caseStudy.solution },
    { label: 'Features', value: project.caseStudy.features },
    { label: 'Architecture', value: project.caseStudy.architecture },
    { label: 'Technologies', value: project.caseStudy.technologies },
    { label: 'Challenges', value: project.caseStudy.challenges },
    { label: 'Result', value: project.caseStudy.result }
  ];

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          className="modal-content glass-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <div className="modal-header">
            <h2>{project.title} - Case Study</h2>
            <button className="close-btn" onClick={onClose} aria-label="Close modal">
              <X size={24} />
            </button>
          </div>
          
          <div className="modal-body">
            <div className="architecture-steps mb-5">
              <h4 className="mono text-primary mb-3">ARCHITECTURE FLOW</h4>
              <div className="flow-path">
                {project.architectureSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flow-node">{step}</div>
                    {idx < project.architectureSteps.length - 1 && (
                      <div className="flow-arrow-right">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            <div className="case-study-fields">
              {fields.map((field, idx) => (
                <div key={idx} className="cs-field">
                  <h4 className="cs-label mono">{field.label}</h4>
                  <p className="cs-value">{field.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;
