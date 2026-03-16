import React from 'react';

const Calendar = () => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#fff', color: '#000', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '15px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontWeight: 500 }}>{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '100px', fontWeight: 'bold', color: '#ff3b30' }}>
        {new Date().getDate()}
      </div>
    </div>
  );
};

export default Calendar;
