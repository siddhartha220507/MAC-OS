import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { Apple, Wifi, BatteryFull, Search } from 'lucide-react';

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).replace(/,/g, '');
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="menu-item apple-icon">
          <Apple size={16} fill="white" />
        </div>
        <div className="menu-item active">Finder</div>
        <div className="menu-item">File</div>
        <div className="menu-item">Edit</div>
        <div className="menu-item">View</div>
        <div className="menu-item">Go</div>
        <div className="menu-item">Window</div>
        <div className="menu-item">Help</div>
      </div>
      
      <div className="navbar-right">
        <div className="menu-item icon-item"><Wifi size={14} /></div>
        <div className="menu-item icon-item"><BatteryFull size={16} /></div>
        <div className="menu-item icon-item"><Search size={14} /></div>
        <div className="menu-item date-time">{formatTime(time)}</div>
      </div>
    </div>
  );
};

export default Navbar;
