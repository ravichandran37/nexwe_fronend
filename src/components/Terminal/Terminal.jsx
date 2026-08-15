import React, { useState, useEffect } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [text, setText] = useState('');
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const commands = [
    { cmd: 'whoarewe', output: 'Nexwe Solutions\nSoftware Development Agency' },
    { cmd: 'stack', output: 'React • Python • Django • REST APIs • SQL' },
    { cmd: 'status', output: 'Accepting new clients and projects' }
  ];

  useEffect(() => {
    // skip animation if prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    if (mediaQuery.matches) {
      setStep(commands.length);
      return;
    }

    if (step >= commands.length) {
      setTyping(false);
      return;
    }

    const currentCmd = commands[step].cmd;
    let charIndex = 0;

    const typeCommand = setInterval(() => {
      setText((prev) => prev + currentCmd.charAt(charIndex));
      charIndex++;
      
      if (charIndex === currentCmd.length) {
        clearInterval(typeCommand);
        setTimeout(() => {
          setStep((s) => s + 1);
          setText('');
        }, 800); // Wait before outputting and going to next
      }
    }, 100); // Typing speed

    return () => clearInterval(typeCommand);
  }, [step]);

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="dot close"></span>
          <span className="dot minimize"></span>
          <span className="dot expand"></span>
        </div>
        <div className="terminal-title">admin@nexwe:~</div>
      </div>
      <div className="terminal-body mono">
        {commands.map((c, i) => {
          if (i < step || (reducedMotion && i >= step)) {
            return (
              <div key={i} className="terminal-history">
                <div className="command-line">
                  <span className="prompt">$</span> {c.cmd}
                </div>
                <div className="command-output">{c.output}</div>
              </div>
            );
          }
          return null;
        })}
        {step < commands.length && !reducedMotion && (
          <div className="command-line active">
            <span className="prompt">$</span> {text}<span className="cursor"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
