import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import './Testimonials.css';

const fictionalTestimonials = [
  {
    id: 1,
    name: "ARJUN KRISHNAN",
    role: "Founder & Director",
    company: "UrbanRoute Technologies",
    service: "Full-Stack Web Application",
    quote: "NEXWWE turned our idea into a polished, scalable web application. The interface feels modern, the experience is incredibly smooth, and the entire development process was well structured.",
    rating: 5,
    initials: "AK",
    accentColor: "linear-gradient(135deg, rgba(61, 82, 160, 0.18), rgba(99, 102, 241, 0.25))"
  },
  {
    id: 2,
    name: "MEERA NAIR",
    role: "Founder & Creative Director",
    company: "Atelier North",
    service: "Business Website",
    quote: "The team understood our brand from the beginning and translated it into a website that feels both premium and easy to use. The attention to detail was impressive.",
    rating: 5,
    initials: "MN",
    accentColor: "linear-gradient(135deg, rgba(124, 58, 237, 0.18), rgba(61, 82, 160, 0.25))"
  },
  {
    id: 3,
    name: "KARTHIK RAMAN",
    role: "Managing Director",
    company: "RouteVista",
    service: "Travel Platform",
    quote: "NEXWWE delivered a clean and reliable platform that made our booking workflow much easier to manage. The final product feels professional across both desktop and mobile.",
    rating: 5,
    initials: "KR",
    accentColor: "linear-gradient(135deg, rgba(14, 165, 233, 0.18), rgba(61, 82, 160, 0.25))"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic vertical slide every 5 seconds (paused on hover, resets on manual navigation)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % fictionalTestimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % fictionalTestimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + fictionalTestimonials.length) % fictionalTestimonials.length);
  };

  const current = fictionalTestimonials[currentIndex];

  // 700ms vertical slide animation with smooth ease-in-out curve
  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      y: dir > 0 ? 50 : -50
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir > 0 ? -50 : 50,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  return (
    <section className="testimonials-section relative z-10" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-content-box">
          {/* Section Header: Aligned with the left edge of the card */}
          <div className="testimonials-header">
            <div className="eyebrow testimonials-eyebrow">CLIENT VOICES</div>
            <h2 className="testimonials-title">
              WHAT OUR <span className="text-primary text-gradient-accent">CLIENTS</span> SAY
            </h2>
            <p className="testimonials-subtitle">
              “Don’t just take our word for it — hear from the people we’ve worked with.”
            </p>
          </div>

          {/* Testimonial Card with Hover Pause */}
          <div 
            className="testimonial-card glass-card"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Row: Oversized Quote Mark + Demo Testimonial Tag */}
            <div className="testimonial-card-top">
              <div className="testimonial-quote-mark" aria-hidden="true">
                “
              </div>
              <span className="demo-testimonial-tag">
                DEMO TESTIMONIAL
              </span>
            </div>

            {/* Vertical Sliding Viewport with overflow: hidden */}
            <div className="testimonial-slider-viewport">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="testimonial-slide"
                >
                  {/* Review Text */}
                  <blockquote className="testimonial-quote-text">
                    “{current.quote.replace(/^["“]|["”]$/g, '')}”
                  </blockquote>

                  {/* Rating & Service Pill Row */}
                  <div className="testimonial-meta-row">
                    <div className="testimonial-stars" aria-label={`${current.rating} out of 5 stars`}>
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} size={15} className="star-icon" fill="currentColor" />
                      ))}
                    </div>
                    <span className="testimonial-service-pill">
                      {current.service}
                    </span>
                  </div>

                  {/* Subtle Divider */}
                  <div className="testimonial-divider"></div>

                  {/* Client Profile */}
                  <div className="testimonial-client-meta">
                    <div 
                      className="testimonial-avatar" 
                      style={{ background: current.accentColor }}
                      aria-hidden="true"
                    >
                      <span className="testimonial-avatar-initials">{current.initials}</span>
                    </div>
                    <div className="testimonial-client-info">
                      <h3 className="testimonial-client-name">{current.name}</h3>
                      <p className="testimonial-client-role">{current.role}</p>
                      <p className="testimonial-client-company">{current.company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="testimonial-nav">
              <button
                type="button"
                onClick={handlePrev}
                className="testimonial-nav-btn prev-btn"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <div className="testimonial-counter">
                <span className="counter-current">0{currentIndex + 1}</span>
                <span className="counter-sep">/</span>
                <span className="counter-total">0{fictionalTestimonials.length}</span>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="testimonial-nav-btn next-btn"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
