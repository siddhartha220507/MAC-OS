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

export const dockApps = [
  { id: 'github', name: 'GitHub', icon: <FaGithub className="appicon" style={{ color: '#ffffff' }} />, bg: '#000000' },
  { id: 'notes', name: 'Notes', icon: <FaRegStickyNote className="appicon" style={{ color: '#ffffff' }} />, bg: '#f39c12' },
  { id: 'pdf', name: 'Acrobat', icon: <FaFilePdf className="appicon" style={{ color: '#ffffff' }} />, bg: '#ff4757' },
  { id: 'calendar', name: 'Calendar', icon: <FaCalendarAlt className="appicon" style={{ color: '#ffffff' }} />, bg: '#5f27cd' },
  { id: 'spotify', name: 'Spotify', icon: <FaSpotify className="appicon" style={{ color: '#ffffff' }} />, bg: '#2ed573' },
  { id: 'mail', name: 'Mail', icon: <FaEnvelope className="appicon" style={{ color: '#ffffff' }} />, bg: '#4834d4' },
  { id: 'link', name: 'Link', icon: <FaLink className="appicon" style={{ color: '#ffffff' }} />, bg: '#9b59b6' },
  { id: 'terminal', name: 'Terminal', icon: <FaTerminal className="appicon" style={{ color: '#ffffff' }} />, bg: '#000000' }
];

const Dock = ({ onOpenApp, activeApps = [] }) => {
  return (
    <div className="dockcontainer">
      <div className="dock">
        {dockApps.map((app) => (
          <div 
            key={app.id} 
            className={`dockiconwrapper ${activeApps.includes(app.id) ? 'active' : ''}`}
            onClick={() => onOpenApp(app.id)}
          >
            <div className="docktooltip">{app.name}</div>
            <div className="dockicon" style={{ backgroundColor: app.bg }}>
              {app.icon}
            </div>
            {activeApps.includes(app.id) && <div className="activedot"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;
