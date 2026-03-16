import React, { useState, useRef, useEffect } from 'react';
import './Terminal.scss';

const Terminal = () => {
  const [history, setHistory] = useState([
    "Last login: " + new Date().toString().substring(0, 24) + " on ttys000",
    "Siddhartha's-MacBook-Pro:~ siddhartha$ "
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      let response = '';
      const cmd = input.trim().toLowerCase();
      
      if (cmd === 'clear') {
        setHistory(["Siddhartha's-MacBook-Pro:~ siddhartha$ "]);
        setInput('');
        return;
      } else if (cmd === 'whoami') {
        response = 'siddhartha';
      } else if (cmd === 'date') {
        response = new Date().toString();
      } else if (cmd === 'ls') {
        response = 'Desktop\nDocuments\nDownloads\nMusic\nPictures\nPublic';
      } else if (cmd !== '') {
        response = `-bash: ${cmd}: command not found`;
      }

      const newHistory = [...history];
      newHistory[newHistory.length - 1] += input;
      
      if (response) {
        newHistory.push(response);
      }
      
      newHistory.push("Siddhartha's-MacBook-Pro:~ siddhartha$ ");
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div className="terminalapp" onClick={() => document.getElementById('terminput').focus()}>
      <div className="terminaloutput">
        {history.map((line, i) => (
          <div key={i} className="terminalline" style={{ whiteSpace: 'pre-wrap' }}>
             {line}
             {i === history.length - 1 && (
               <input 
                 id="terminput"
                 type="text" 
                 value={input}
                 onChange={e => setInput(e.target.value)}
                 onKeyDown={handleKeyDown}
                 autoFocus
                 autoComplete="off"
               />
             )}
          </div>
        ))}
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default Terminal;
