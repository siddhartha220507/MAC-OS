import React, { useState } from 'react';
import './Notes.scss';

const Notes = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'New Note', content: 'Type something smooth here...', date: new Date().toLocaleDateString() }
  ]);
  const [activeNoteId, setActiveNoteId] = useState(1);

  const activeNote = notes.find(n => n.id === activeNoteId);

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      title: 'New Note',
      content: '',
      date: new Date().toLocaleDateString()
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);
  };

  const handleContentChange = (e) => {
    const val = e.target.value;
    const title = val.trim().split('\n')[0] || 'New Note';
    
    setNotes(notes.map(n => 
      n.id === activeNoteId ? { ...n, content: val, title } : n
    ));
  };

  return (
    <div className="notesapp">
      <div className="notessidebar">
        <div className="sidebarheader">
          <h3>Notes</h3>
          <button className="newnotebtn" onClick={handleAddNote}>+</button>
        </div>
        <div className="noteslist">
          {notes.map(note => (
            <div 
              key={note.id} 
              className={`notepreview ${activeNoteId === note.id ? 'active' : ''}`}
              onClick={() => setActiveNoteId(note.id)}
            >
              <h4>{note.title.substring(0, 20)}</h4>
              <span>{note.date}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="noteseditor">
        <textarea 
          className="notestextarea"
          value={activeNote?.content || ''}
          onChange={handleContentChange}
          placeholder="Type your note here..."
        />
      </div>
    </div>
  );
};

export default Notes;
