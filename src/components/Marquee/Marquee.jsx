import React, { useEffect, useRef } from 'react';
import './Marquee.css';

const BlueprintCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;

    // Nodes state
    const nodes = [];

    // Mouse state
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
      initProceduralData();
    };

    const initProceduralData = () => {
      nodes.length = 0;

      // Create random nodes for constellation
      const numNodes = Math.floor(width / 35);
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          baseSize: Math.random() * 2 + 1,
          ignition: 0
        });
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const container = canvas.parentElement;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background glow/depth (optional, for that hazy red look)
      // We can just rely on the CSS background and node shadows

      // Draw connections between nodes
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const opacity = 1 - (dist / 120);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.4})`; // Electric Blue
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      nodes.forEach(node => {
        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges smoothly
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxDist = 150;
        if (dist < maxDist) {
          node.ignition = Math.max(node.ignition, 1 - (dist / maxDist));

          // Draw connection to mouse cursor
          ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - dist / maxDist) * 0.8})`; // Cyan glow
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        } else {
          node.ignition = Math.max(0, node.ignition - 0.05); // Fade out
        }

        const currentSize = node.baseSize + (node.ignition * 3);
        const opacity = 0.4 + (node.ignition * 0.6);

        ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`; // Vibrant Purple
        ctx.shadowBlur = node.ignition * 20;
        ctx.shadowColor = 'rgba(6, 182, 212, 1)'; // Cyan shadow

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="blueprint-canvas" />;
};

const Marquee = () => {
  const techStack = [
    'React', 'Next.js', 'Python', 'Django', 'Tailwind CSS',
    'PostgreSQL', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'
  ];

  // Double the array for seamless infinite scrolling
  const items = [...techStack, ...techStack];

  return (
    <div className="marquee-container">
      <BlueprintCanvas />
      <div className="scanlines"></div>

      <div className="marquee-content">
        {items.map((tech, index) => (
          <div key={index} className="marquee-item">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
