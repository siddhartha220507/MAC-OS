import React, { useState } from 'react';

const Mail = () => {
  const [activeMail, setActiveMail] = useState(0);

  const mails = [
    { sender: 'Sheryians Coding School', subject: 'Hello from Sheryians coding schools!', preview: 'Naye course check kijiye aur sikhiye...' },
    { sender: 'Rahul', subject: 'hello siddhartha kya kr raha hai', preview: 'Bhai free hai to call kar lena ek baar' },
    { sender: 'Apple', subject: 'Welcome to your new Mac', preview: 'Getting started with your new device...' },
    { sender: 'Aman', subject: 'Bhai kal chalna hai kya bahar?', preview: 'Plan bata apna kal ka movie chalte hai' },
    { sender: 'GitHub', subject: 'A new release is available', preview: 'Check out the latest features and bug fixes' },
    { sender: 'Zomato', subject: 'Your order is arriving soon!', preview: 'Delivery partner is on the way with your food' },
    { sender: 'Rohit', subject: 'Project ka deadline kab hai?', preview: 'Aur kitna time baccha hai project submission me' },
    { sender: 'LinkedIn', subject: 'You appeared in 14 searches this week', preview: 'See who is looking at your profile' },
    { sender: 'Ritik', subject: 'Code bhejna bhai apna discord pe', preview: 'Wo jo kal banaya tha navbar wala code please' },
    { sender: 'Spotify', subject: 'Your week in review', preview: 'You listened to 15 hours of Bollywood hits' },
    { sender: 'Netflix', subject: 'New releases specially for you', preview: 'Kota Factory Season 3 is streaming now' },
    { sender: 'Swiggy', subject: 'Craving biryani? Get 50% off', preview: 'Use code HUNGRY50 at checkout' },
    { sender: 'Neha', subject: 'Notes send kar de please', preview: 'Kal ki class ke notes bhej de yar urgency hai' },
  ];

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#fff', color: '#333', display: 'flex' }}>
      <div style={{ width: '300px', borderRight: '1px solid #ddd', overflowY: 'auto', backgroundColor: '#fafafa' }}>
        {mails.map((mail, index) => (
          <div 
            key={index}
            onClick={() => setActiveMail(index)}
            style={{ 
              padding: '12px 15px', 
              borderBottom: '1px solid #eee', 
              backgroundColor: activeMail === index ? '#e8ebf0' : 'transparent',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontWeight: activeMail === index ? '600' : '500', marginBottom: '4px' }}>{mail.sender}</div>
            <div style={{ fontSize: '13px', fontWeight: activeMail === index ? '600' : 'normal', color: '#222', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mail.subject}</div>
            <div style={{ fontSize: '12px', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mail.preview}</div>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>{mails[activeMail].subject}</h2>
        <div style={{ color: '#666', borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px', fontSize: '14px' }}>
          From: <strong>{mails[activeMail].sender}</strong> &lt;user@example.com&gt;
        </div>
        <div style={{ fontSize: '15px', color: '#333', lineHeight: '1.6' }}>
          {mails[activeMail].preview}
        </div>
      </div>
    </div>
  );
};

export default Mail;
