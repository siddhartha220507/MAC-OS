import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dock from '../Dock/Dock';
import './Desktop.scss';
import wallpaper from '../../assets/wallpaper/macos_wallpaper.png';

const Desktop = () => {
  return (
    <div 
      className="desktop"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <Navbar />
      <div className="desktop-content"></div>
      <Dock />
    </div>
  );
};

export default Desktop;
