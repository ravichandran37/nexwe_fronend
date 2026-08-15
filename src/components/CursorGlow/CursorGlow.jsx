import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-150 h-150 rounded-full mix-blend-overlay z-50 opacity-70 blur-[80px]"
      style={{
        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(168,85,247,0.4) 40%, rgba(0,0,0,0) 70%)',
      }}
      animate={{
        x: mousePosition.x - 300,
        y: mousePosition.y - 300,
      }}
      transition={{
        type: 'tween',
        ease: 'linear',
        duration: 0.05
      }}
    />
  );
};

export default CursorGlow;
