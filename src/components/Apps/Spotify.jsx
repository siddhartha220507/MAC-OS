import React from 'react';

const Spotify = () => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#121212' }}>
      <iframe 
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM?utm_source=generator" 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        title="Spotify Web Player"
        style={{ borderRadius: '0' }}
      ></iframe>
    </div>
  );
};

export default Spotify;
