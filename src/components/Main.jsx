import React from 'react';
import "./Main.css";
// import { ReactMarkDown } from "react-markdown/react-markdown";

const Main = ({activeNote, onUpdateNotes}) => {
  const onEdit = (key, value) => {
    onUpdateNotes({
      ...activeNote,
      [key]:value,
      // タイトルとコンテンツでkeyが動的になる
      modDate: Date.now(),
    });
  };

  if(!activeNote) {
    return <div className="no-active-note">Select Your Note</div>
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <div className="app-main-note-head">
        <input
        id="title"
        className="title"
        value={activeNote.title}
        onChange={(e) => onEdit("title", e.target.value)}
        />
        <input
        id="author"
        className="author"
        value={activeNote.author}
        onChange={(e) => onEdit("author", e.target.value)}
        />
        </div>
        <textarea
        id="content"
        placeholder='write your note here'
        value={activeNote.content}
        onChange={(e) => onEdit("content", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default Main