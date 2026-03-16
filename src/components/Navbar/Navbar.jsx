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
      <div className="navbarleft">
        <div className="menuitem appleicon">
          <Apple size={16} fill="white" />
        </div>
        <div className="menuitem active">Siddhartha's</div>
        <div className="menuitem">File</div>
        <div className="menuitem">Edit</div>
        <div className="menuitem">View</div>
        <div className="menuitem">Go</div>
        <div className="menuitem">Window</div>
        <div className="menuitem">Help</div>
      </div>
      
      <div className="navbarright">
        <div className="menuitem iconitem"><Wifi size={14} /></div>
        <div className="menuitem iconitem"><BatteryFull size={16} /></div>
        <div className="menuitem iconitem"><Search size={14} /></div>
        <div className="menuitem datetime">{formatTime(time)}</div>
      </div>
    </div>
  );
};

export default Navbar;
