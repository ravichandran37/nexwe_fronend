import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';
import './InteractiveTerminal.css';

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  const commands = {
    help: 'Available commands:\n  help     - show this message\n  about    - read about us\n  skills   - list our tech stack\n  projects - list featured projects\n  contact  - get our contact info\n  clear    - clear terminal',
    about: 'Nexwe Solutions is a team of passionate developers dedicated to building modern web applications and solving real-world problems through technology. We work across the full stack — from responsive user interfaces to backend APIs, databases, and intelligent applications.',
    skills: 'Frontend: React, JavaScript, HTML, CSS\nBackend: Python, Django, REST APIs\nDatabase: MySQL, SQLite\nAI: NLP, Scikit-learn',
    projects: '1. E-Commerce Web Application\n2. AI Customer Support Chatbot\nScroll up to view the full case studies.',
    contact: 'Email: nexwesolutions@gmail.com\nPhone: +91 6379833975',
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output = '';
      
      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }
      
      if (cmd) {
        if (commands[cmd]) {
          output = commands[cmd];
        } else {
          output = `Command not found: ${cmd}. Type "help" for a list of commands.`;
        }
      }

      setHistory(prev => [
        ...prev,
        { type: 'input', content: cmd },
        ...(output ? [{ type: 'output', content: output }] : [])
      ]);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="terminal-window interactive-terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="dot close"></span>
          <span className="dot minimize"></span>
          <span className="dot expand"></span>
        </div>
        <div className="terminal-title">guest@portfolio:~</div>
      </div>
      
      <div 
        className="terminal-body mono" 
        onClick={() => inputRef.current?.focus()}
        style={{ cursor: 'text' }}
        ref={terminalBodyRef}
      >
        {history.map((entry, i) => (
          <div key={i} className="terminal-history">
            {entry.type === 'input' ? (
              <div className="command-line">
                <span className="prompt">$</span> {entry.content}
              </div>
            ) : (
              <div className="command-output">{entry.content}</div>
            )}
          </div>
        ))}
        
        <div className="command-line active">
          <span className="prompt">$</span>
          <input 
            ref={inputRef}
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="terminal-input"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="cursor" style={{ marginLeft: input ? '2px' : '0' }}></span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
