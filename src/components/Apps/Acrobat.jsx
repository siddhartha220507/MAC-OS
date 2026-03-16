import React from 'react';

const Acrobat = () => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#525659', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '40px' }}>
      <div style={{ width: '80%', height: '120%', backgroundColor: 'white', color: 'black', boxShadow: '0 0 10px rgba(0,0,0,0.5)', padding: '40px', fontFamily: 'serif' }}>
        <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>macOS UI Clone Documentation</h1>
        <p style={{ marginTop: '20px', lineHeight: 1.6 }}>
          This project simulates the macOS interface inside a browser.
        </p>
        <p style={{ marginTop: '10px', lineHeight: 1.6 }}>
          Features include:
        </p>
        <ul style={{ marginLeft: '20px', marginTop: '10px', lineHeight: 1.6 }}>
          <li>Smooth custom hardware-accelerated cursor</li>
          <li>Draggable and resizable application windows</li>
          <li>Functional application mockups (Notes, Terminal, Spotify)</li>
        </ul>
      </div>
    </div>
  );
};

export default Acrobat;
