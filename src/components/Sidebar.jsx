import React from 'react';
import "./Sidebar.css";

const Sidebar = ({onAddNote, notes, onDeleteNote, activeNote,setActiveNote}) => {

  const sortedNotes = notes.sort((a,b) => b.modDate - a.modDate);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>memo</h1>
        <button onClick={onAddNote}>Add a new note</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div 
          className={`app-sidebar-note ${note.id === activeNote && "active"}`}
          key={note.id}
          onClick={() => setActiveNote(note.id)}>
          <div className="sidebar-note-ttl">
              <strong className="sidebar-note-head">{note.title}</strong>
              <button className="sidebar-note-button" onClick={() => onDeleteNote(note.id)}>Remove</button>
          </div>
          <p>{note.author}</p>
          <p>{note.content}</p>
          <small>Last edit：{new Date(note.modDate).toLocaleString("en-EN")}</small>
      </div>
        ))}
      </div>
    </div>
  )
};

export default Sidebar