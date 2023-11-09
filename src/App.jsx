import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
// import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(()=> {
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes])

  useEffect(()=> {
    if (typeof notes[0] !== 'undefined') {
    setActiveNote(notes[0].id);
    }
    // リロードして初回だけ一番最初のノートがアクティブに選択する(ノートがないときは実行しない)
    
  },[])


  const onAddNote = () => {
    // console.log('a new note added');
    const newNote = {
      id: uuidv4(),
      // メソッドで利用する
      author: "your name",
      title: "new title",
      content: 'write your note here',
      modDate: Date.now(),
    };
    setNotes([...notes,newNote]);
    console.log(uuidv4());
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNotes = (updatedNote) => {
    // 修正された新しい配列を並べる
    const updatedNewArray = notes.map((note) => {
      if(note.id === updatedNote.id) {
        return updatedNote;
      }
      else {
        return note;
      }
    });
    setNotes(updatedNewArray);
  }

 return (
  
  <div className="App">
    <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
    <Main activeNote={getActiveNote()} onUpdateNotes={onUpdateNotes}/>
  </div>
  )
} 

export default App
