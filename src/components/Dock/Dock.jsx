import React from 'react';
import './Dock.scss';
import { 
  FaGithub, 
  FaRegStickyNote,
  FaFilePdf,
  FaCalendarAlt,
  FaSpotify,
  FaEnvelope,
  FaLink,
  FaTerminal
} from 'react-icons/fa';

const dockApps = [
  { id: 'github', name: 'GitHub', icon: <FaGithub className="app-icon" style={{ color: '#ffffff' }} />, bg: '#000000' },
  { id: 'notes', name: 'Notes', icon: <FaRegStickyNote className="app-icon" style={{ color: '#ffffff' }} />, bg: '#f39c12' },
  { id: 'pdf', name: 'Acrobat', icon: <FaFilePdf className="app-icon" style={{ color: '#ffffff' }} />, bg: '#ff4757' },
  { id: 'calendar', name: 'Calendar', icon: <FaCalendarAlt className="app-icon" style={{ color: '#ffffff' }} />, bg: '#5f27cd' },
  { id: 'spotify', name: 'Spotify', icon: <FaSpotify className="app-icon" style={{ color: '#ffffff' }} />, bg: '#2ed573' },
  { id: 'mail', name: 'Mail', icon: <FaEnvelope className="app-icon" style={{ color: '#ffffff' }} />, bg: '#4834d4' },
  { id: 'link', name: 'Link', icon: <FaLink className="app-icon" style={{ color: '#ffffff' }} />, bg: '#9b59b6' },
  { id: 'terminal', name: 'Terminal', icon: <FaTerminal className="app-icon" style={{ color: '#ffffff' }} />, bg: '#000000' }
];

const Dock = () => {
  return (
    <div className="dock-container">
      <div className="dock">
        {dockApps.map((app) => (
          <div key={app.id} className="dock-icon-wrapper">
            <div className="dock-tooltip">{app.name}</div>
            <div className="dock-icon" style={{ backgroundColor: app.bg }}>
              {app.icon}
            </div>
            {(app.id === 'github' || app.id === 'mail') && <div className="active-dot"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;
