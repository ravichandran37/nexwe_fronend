import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Layers, Mail } from 'lucide-react';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | Nexwe Solutions';
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, follow');

    return () => {
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  return (
    <section className="not-found-section py-24 min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto glass-card p-8 md:p-12"
        >
          <span className="mono text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">
            HTTP 404 ERROR
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-gradient-accent mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted text-base mb-8 leading-relaxed">
            The page you are looking for doesn't exist, has been moved, or the link may be mistyped.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="btn btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md"
            >
              <Home size={16} />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/projects"
              className="btn btn-secondary inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border border-border hover:border-primary/40"
            >
              <Layers size={16} />
              <span>View Projects</span>
            </Link>
            <Link
              to="/contact"
              className="btn btn-secondary inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border border-border hover:border-primary/40"
            >
              <Mail size={16} />
              <span>Contact Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;
