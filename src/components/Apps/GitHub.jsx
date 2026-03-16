import React from 'react';

const GitHub = () => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#0d1117', color: '#c9d1d9', overflowY: 'auto', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif' }}>

      <div style={{ padding: '16px', backgroundColor: '#161b22', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center' }}>
        <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" fill="white" style={{ marginRight: '16px' }}>
          <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <span style={{ fontSize: '14px', fontWeight: 600 }}>siddhartha220507</span>
      </div>


      <div style={{ display: 'flex', padding: '24px', flexWrap: 'wrap', gap: '24px' }}>
        

        <div style={{ width: '250px' }}>
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajhqN2wyaGRqdWExNnhnb2dpeTJwbGkwaHJ2bHFxbHJrbGVkMThxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kgyLlpe3YCkmI/giphy.gif" 
            alt="Profile Avatar"
            style={{ 
              width: '100%', 
              aspectRatio: '1/1', 
              borderRadius: '50%', 
              marginBottom: '16px',
              border: '2px solid #58a6ff',
              objectFit: 'cover'
            }}
          />
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 600, color: 'white' }}>Siddhartha</h1>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 300, color: '#8b949e', marginBottom: '16px' }}>siddhartha220507</h2>
          <a href="https://github.com/siddhartha220507" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', padding: '5px 16px', backgroundColor: '#21262d', color: '#c9d1d9', border: '1px solid rgba(240,246,252,0.1)', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}>Follow</button>
          </a>
        </div>


        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ borderBottom: '1px solid #30363d', paddingBottom: '8px', marginBottom: '16px' }}>
            <span style={{ marginRight: '16px', borderBottom: '2px solid #f78166', paddingBottom: '8px', fontWeight: 600, color: 'white' }}>Overview</span>
            <span style={{ marginRight: '16px' }}>Repositories</span>
            <span style={{ marginRight: '16px' }}>Projects</span>
          </div>

          <p style={{ color: '#8b949e' }}>Popular repositories</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            

            <div style={{ padding: '16px', border: '1px solid #30363d', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <a href="#" style={{ color: '#58a6ff', textDecoration: 'none', fontWeight: 600 }}>macOS-UI-Clone</a>
                <span style={{ fontSize: '12px', border: '1px solid #30363d', borderRadius: '2em', padding: '0 7px', color: '#8b949e' }}>Public</span>
              </div>
              <p style={{ fontSize: '12px', color: '#8b949e', marginBottom: '16px' }}>A React-based UI clone of macOS</p>
              <div style={{ fontSize: '12px', color: '#8b949e', display: 'flex', alignItems: 'center' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f1e05a', display: 'inline-block', marginRight: '4px' }}></span> JavaScript
              </div>
            </div>


            <div style={{ padding: '16px', border: '1px solid #30363d', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <a href="#" style={{ color: '#58a6ff', textDecoration: 'none', fontWeight: 600 }}>movie-platform</a>
                <span style={{ fontSize: '12px', border: '1px solid #30363d', borderRadius: '2em', padding: '0 7px', color: '#8b949e' }}>Public</span>
              </div>
              <p style={{ fontSize: '12px', color: '#8b949e', marginBottom: '16px' }}>Full stack movie discovery app MERN</p>
              <div style={{ fontSize: '12px', color: '#8b949e', display: 'flex', alignItems: 'center' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f1e05a', display: 'inline-block', marginRight: '4px' }}></span> JavaScript
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
