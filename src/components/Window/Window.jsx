import React, { useState, useEffect, useRef } from 'react';
import './Window.scss';
import GitHub from '../Apps/GitHub';
import Spotify from '../Apps/Spotify';
import Notes from '../Apps/Notes';
import Terminal from '../Apps/Terminal';
import Calendar from '../Apps/Calendar';
import Mail from '../Apps/Mail';
import Acrobat from '../Apps/Acrobat';

const Window = ({ app, onClose, isActive }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [position, setPosition] = useState({ x: window.innerWidth / 2 - 400, y: window.innerHeight / 2 - 250 });
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, w: 0, h: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(app.id);
    }, 300);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      w: dimensions.width,
      h: dimensions.height
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      } else if (isResizing) {
        const newWidth = Math.max(300, resizeStart.w + (e.clientX - resizeStart.x));
        const newHeight = Math.max(200, resizeStart.h + (e.clientY - resizeStart.y));
        setDimensions({ width: newWidth, height: newHeight });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, resizeStart]);

  const renderAppContent = () => {
    switch(app.id) {
      case 'github': return <GitHub />;
      case 'spotify': return <Spotify />;
      case 'notes': return <Notes />;
      case 'terminal': return <Terminal />;
      case 'calendar': return <Calendar />;
      case 'mail': return <Mail />;
      case 'pdf': return <Acrobat />;
      default: 
        return (
          <div className="appcontentwrapper fadein">
            {React.cloneElement(app.icon, { style: { ...app.icon.props.style, width: '100px', height: '100px' } })}
            <h2>Welcome to {app.name}</h2>
          </div>
        );
    }
  };

  return (
    <div 
      className={`macwindow ${isClosing ? 'closing' : 'opening'} ${isActive ? 'active' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        zIndex: isActive ? 100 : 10
      }}
    >
      <div className="windowheader" onMouseDown={handleMouseDown}>
        <div className="trafficlights">
          <div className="trafficlight close" onClick={handleClose}></div>
          <div className="trafficlight minimize"></div>
          <div className="trafficlight maximize"></div>
        </div>
        <div className="windowtitle">{app.name}</div>
      </div>
      
      <div className="windowcontent" style={{ backgroundColor: app.bg }}>
        {isLoading ? (
          <div className="apploadercontainer">
            <div className="apploader" style={{ borderTopColor: app.bg === '#000000' || app.bg === '#ffffff' ? '#007aff' : 'white' }}></div>
          </div>
        ) : (
          <div className="fadein" style={{ width: '100%', height: '100%' }}>
            {renderAppContent()}
          </div>
        )}
      </div>
      
      <div className="resizehandle" onMouseDown={handleResizeMouseDown}></div>
    </div>
  );
};

export default Window;

