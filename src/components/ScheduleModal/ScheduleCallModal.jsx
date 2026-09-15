import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Video, CheckCircle, Sparkles, Send, Globe, ArrowRight } from 'lucide-react';
import { useScheduleModal } from '../../context/ScheduleModalContext';
import { API_BASE_URL } from '../../config/api';
import './ScheduleCallModal.css';

const SERVICES = [
  'Full-Stack Web App',
  'Backend & API Architecture',
  'AI / NLP Chatbot',
  'UI/UX & Modernization'
];

const TIME_SLOTS = [
  '10:00 AM',
  '11:30 AM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM'
];

const ScheduleCallModal = () => {
  const { isOpen, closeScheduleModal, initialData } = useScheduleModal();

  // Tomorrow's date as default formatted YYYY-MM-DD
  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: SERVICES[0],
    date: getTomorrowDate(),
    timeSlot: TIME_SLOTS[1],
    notes: ''
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [userTimezone, setUserTimezone] = useState('');

  useEffect(() => {
    try {
      setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC');
    } catch {
      setUserTimezone('UTC');
    }
  }, []);

  useEffect(() => {
    if (initialData?.service && SERVICES.includes(initialData.service)) {
      setFormData(prev => ({ ...prev, service: initialData.service }));
    } else if (initialData?.projectTitle) {
      setFormData(prev => ({
        ...prev,
        notes: `Inquiring about project similar to: ${initialData.projectTitle}`
      }));
    }
  }, [initialData]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeScheduleModal();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, closeScheduleModal]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectService = (service) => {
    setFormData({ ...formData, service });
  };

  const handleSelectTimeSlot = (timeSlot) => {
    setFormData({ ...formData, timeSlot });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: '' });

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: `[Call Scheduled] ${formData.service} on ${formData.date} at ${formData.timeSlot}`,
      message: [
        `=== 30-MIN STRATEGY CALL REQUEST ===`,
        `Service Interested: ${formData.service}`,
        `Preferred Date: ${formData.date}`,
        `Preferred Time: ${formData.timeSlot} (${userTimezone})`,
        `Company/Org: ${formData.company || 'N/A'}`,
        `Meeting Platform: Google Meet / Zoom`,
        `Client Goals & Notes:`,
        formData.notes || 'No extra notes provided.'
      ].join('\n')
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus({ state: 'success', message: 'Call successfully requested!' });
      } else {
        const data = await response.json().catch(() => ({}));
        const errMsg = Object.values(data).flat().join(', ') || 'Failed to submit request. Please try again.';
        setStatus({ state: 'error', message: errMsg });
      }
    } catch {
      setStatus({ state: 'error', message: 'Network error. Please check your connection and try again.' });
    }
  };

  const getCalendarLink = () => {
    const title = encodeURIComponent(`Nexwe Solutions Discovery Call - ${formData.service}`);
    const details = encodeURIComponent(
      `30-Minute Architecture & Strategy Consultation with Nexwe Solutions.\nService: ${formData.service}\nSelected Time: ${formData.timeSlot} (${userTimezone})`
    );
    const dateFormatted = formData.date.replace(/-/g, '');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${dateFormatted}T100000Z/${dateFormatted}T103000Z`;
  };

  const handleClose = () => {
    setStatus({ state: 'idle', message: '' });
    closeScheduleModal();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="schedule-modal-overlay" onClick={handleClose}>
        <motion.div
          className="schedule-modal-container glass-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="schedule-modal-header">
            <div>
              <div className="schedule-status-badge">
                <span className="pulsing-dot"></span>
                <span>Open for new client bookings</span>
              </div>
              <h2 className="schedule-title">Schedule a Strategy Call</h2>
              <p className="schedule-subtitle">
                Book a 30-minute technical roadmap & architecture session.
              </p>
            </div>
            <button className="schedule-close-btn" onClick={handleClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="schedule-modal-body">
            {status.state === 'success' ? (
              <div className="schedule-success-view">
                <div className="success-icon-wrap">
                  <CheckCircle size={56} className="text-primary animate-bounce" />
                </div>
                <h3>Your Strategy Call is Booked!</h3>
                <p className="success-desc">
                  We've reserved <strong>{formData.timeSlot}</strong> on <strong>{formData.date}</strong> for your session.
                  A confirmation details package has been sent to <strong>{formData.email}</strong>.
                </p>

                <div className="booking-summary-card">
                  <div className="summary-item">
                    <Calendar size={18} className="text-primary" />
                    <span>{formData.date}</span>
                  </div>
                  <div className="summary-item">
                    <Clock size={18} className="text-primary" />
                    <span>{formData.timeSlot} ({userTimezone})</span>
                  </div>
                  <div className="summary-item">
                    <Video size={18} className="text-primary" />
                    <span>Google Meet / Zoom Link</span>
                  </div>
                  <div className="summary-item">
                    <Sparkles size={18} className="text-primary" />
                    <span>{formData.service}</span>
                  </div>
                </div>

                <div className="success-actions">
                  <a
                    href={getCalendarLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary calendar-link-btn"
                  >
                    <Calendar size={16} />
                    <span>Add to Google Calendar</span>
                  </a>
                  <button onClick={handleClose} className="btn btn-primary">
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form className="schedule-form" onSubmit={handleSubmit}>
                {/* Highlights bar */}
                <div className="schedule-perks-bar">
                  <div className="perk-item">
                    <Clock size={15} /> 30 Min Session
                  </div>
                  <div className="perk-item">
                    <Video size={15} /> Video Call
                  </div>
                  <div className="perk-item">
                    <Sparkles size={15} /> Free Architecture Review
                  </div>
                </div>

                {/* Service Selector */}
                <div className="form-section">
                  <label className="section-label mono">1. SELECT FOCUS AREA</label>
                  <div className="service-chips-grid">
                    {SERVICES.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        className={`service-chip ${formData.service === srv ? 'active' : ''}`}
                        onClick={() => handleSelectService(srv)}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="form-section">
                  <label className="section-label mono">2. SELECT PREFERRED DATE & TIME</label>
                  <div className="date-time-grid">
                    <div className="form-group date-picker-group">
                      <span className="field-hint">Date</span>
                      <input
                        type="date"
                        name="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="custom-date-input"
                      />
                    </div>
                    <div className="time-slots-wrapper">
                      <span className="field-hint">Slot ({userTimezone})</span>
                      <div className="time-chips-row">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            className={`time-chip ${formData.timeSlot === slot ? 'active' : ''}`}
                            onClick={() => handleSelectTimeSlot(slot)}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="form-section">
                  <label className="section-label mono">3. YOUR DETAILS</label>
                  <div className="contact-fields-grid">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Full Name *"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Work Email Address *"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group col-span-full">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company / Project Name (Optional)"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group col-span-full">
                      <textarea
                        name="notes"
                        rows={2}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Briefly describe what you're building or hoping to discuss..."
                        className="form-textarea"
                      />
                    </div>
                  </div>
                </div>

                {status.state === 'error' && (
                  <div className="schedule-error-banner">
                    {status.message}
                  </div>
                )}

                {/* Submit button */}
                <div className="schedule-footer-actions">
                  <div className="tz-info">
                    <Globe size={14} /> Times automatically adjusted to <span>{userTimezone}</span>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary schedule-submit-btn"
                    disabled={status.state === 'submitting'}
                  >
                    {status.state === 'submitting' ? (
                      <span>Reserving Slot...</span>
                    ) : (
                      <>
                        <span>Confirm Strategy Call</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ScheduleCallModal;
