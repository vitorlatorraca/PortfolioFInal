import React, { useState, useEffect } from 'react';
import './codeTerminal.css';

const CodeTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  
  const codeLines = [
    { prefix: 'const', text: 'developer = {', delay: 0 },
    { prefix: '  name:', text: ' "Vitor Latorraca",', delay: 500 },
    { prefix: '  role:', text: ' "Full Stack Developer",', delay: 1000 },
    { prefix: '  skills:', text: ' [', delay: 1500 },
    { prefix: '    "React",', text: '', delay: 2000 },
    { prefix: '    "Node.js",', text: '', delay: 2500 },
    { prefix: '    "MongoDB",', text: '', delay: 3000 },
    { prefix: '    "TypeScript"', text: '', delay: 3500 },
    { prefix: '  ],', text: '', delay: 4000 },
    { prefix: '  passion:', text: ' "Building amazing things",', delay: 4500 },
    { prefix: '  status:', text: ' "Available for opportunities"', delay: 5000 },
    { prefix: '};', text: '', delay: 5500 },
    { prefix: '', text: '// Ready to code! 🚀', delay: 6000 }
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];
      const timer = setTimeout(() => {
        setDisplayedText(prev => {
          if (currentLine === 0) return line.prefix + line.text;
          return prev + '\n' + line.prefix + line.text;
        });
        setCurrentLine(prev => prev + 1);
      }, line.delay);

      return () => clearTimeout(timer);
    } else {
      // Reset after showing all lines
      const resetTimer = setTimeout(() => {
        setCurrentLine(0);
        setDisplayedText('');
      }, 8000);
      return () => clearTimeout(resetTimer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLine]);

  return (
    <div className="code-terminal">
      <div className="code-terminal__header">
        <div className="code-terminal__dots">
          <span className="code-terminal__dot code-terminal__dot--red"></span>
          <span className="code-terminal__dot code-terminal__dot--yellow"></span>
          <span className="code-terminal__dot code-terminal__dot--green"></span>
        </div>
        <span className="code-terminal__title">terminal.js</span>
      </div>
      <div className="code-terminal__body">
        <pre className="code-terminal__code">
          <code>{displayedText}</code>
          <span className="code-terminal__cursor">|</span>
        </pre>
      </div>
    </div>
  );
};

export default CodeTerminal;

