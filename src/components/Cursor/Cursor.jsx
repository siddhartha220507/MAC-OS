import React, { useEffect, useState, useRef } from 'react';
import './Cursor.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [outlinePosition, setOutlinePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      const computedStyle = window.getComputedStyle(target);
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('.dockiconwrapper') ||
        target.closest('.menuitem') ||
        target.closest('.trafficlight') ||
        computedStyle.cursor === 'pointer';
        
      setIsHovering(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setOutlinePosition(prev => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        const ease = 0.15; 
        
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position]);

  return (
    <>
      <div 
        className={`customcursordot ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)` 
        }}
      />
      <div 
        className={`customcursoroutline ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{ 
          transform: `translate(${outlinePosition.x}px, ${outlinePosition.y}px)` 
        }}
      />
    </>
  );
};

export default Cursor;
