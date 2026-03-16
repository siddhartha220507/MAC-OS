import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Dock, { dockApps } from '../Dock/Dock';
import Cursor from '../Cursor/Cursor';
import Window from '../Window/Window';
import './Desktop.scss';
import baseWallpaper from './zenitsu.png';

const themes = [
  {
    id: 0,
    name: 'dark',
    wallpaper: baseWallpaper,
    glassBg: 'rgba(20, 20, 20, 0.4)',
    glassBorder: 'rgba(255, 255, 255, 0.1)',
    textColor: '#ffffff',
    accentColor: '#f1c40f' // Yellow
  },
  {
    id: 1,
    name: 'light',
    wallpaper: baseWallpaper,
    glassBg: 'rgba(255, 255, 255, 0.4)',
    glassBorder: 'rgba(0, 0, 0, 0.1)',
    textColor: '#000000',
    accentColor: '#007aff' // Blue
  },
  {
    id: 2,
    name: 'purple',
    wallpaper: baseWallpaper,
    glassBg: 'rgba(30, 0, 50, 0.5)',
    glassBorder: 'rgba(255, 100, 255, 0.2)',
    textColor: '#ffffff',
    accentColor: '#9b59b6' // Purple/Fire
  }
];

const Desktop = () => {
  const [openApps, setOpenApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);
  const [themeIndex, setThemeIndex] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    let scrollAccumulator = 0;
    const scrollThreshold = 800;

    const handleWheel = (e) => {
      scrollAccumulator += e.deltaY;

      if (scrollAccumulator > scrollThreshold) {
        setThemeIndex((prev) => (prev + 1) % themes.length);
        scrollAccumulator = 0;
      } else if (scrollAccumulator < -scrollThreshold) {
        setThemeIndex((prev) => (prev - 1 >= 0 ? prev - 1 : themes.length - 1));
        scrollAccumulator = 0;
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const currentTheme = themes[themeIndex];

  useEffect(() => {
    document.documentElement.style.setProperty('--os-glass-bg', currentTheme.glassBg);
    document.documentElement.style.setProperty('--os-glass-border', currentTheme.glassBorder);
    document.documentElement.style.setProperty('--os-text-color', currentTheme.textColor);
    document.documentElement.style.setProperty('--os-accent-color', currentTheme.accentColor);
  }, [currentTheme]);

  const handleOpenApp = (appId) => {
    if (!openApps.includes(appId)) {
      setOpenApps([...openApps, appId]);
    }
    setActiveApp(appId);
  };

  const handleCloseApp = (appId) => {
    setOpenApps(openApps.filter(id => id !== appId));
    if (activeApp === appId) {
      setActiveApp(openApps.length > 1 ? openApps[openApps.length - 2] : null);
    }
  };

  const handleFocusApp = (appId) => {
    setActiveApp(appId);
  };

  return (
    <div
      className={`desktop theme-${currentTheme.name}`}
      style={{ backgroundImage: `url(${currentTheme.wallpaper})` }}
      onClick={() => setHasClicked(true)}
    >
      <div className={`magictext ${themeIndex > 0 || !hasClicked ? 'hidden' : ''}`}>
        Scroll down to see magic
      </div>
      <Cursor />
      <Navbar />
      <div className="desktopcontent">
        {openApps.map(appId => {
          const appDetails = dockApps.find(app => app.id === appId);
          if (!appDetails) return null;
          return (
            <div key={appId} onMouseDown={() => handleFocusApp(appId)}>
              <Window
                app={appDetails}
                onClose={handleCloseApp}
                isActive={activeApp === appId}
              />
            </div>
          );
        })}
      </div>
      <Dock onOpenApp={handleOpenApp} activeApps={openApps} />
    </div>
  );
};

export default Desktop;
