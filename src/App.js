
import { useState } from 'react';
import './App.css';
import Count from './Count';
import CreateArea from './CreateArea';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([])

  const addNote = (newNote) =>{
    setNotes((preValue) =>{
      return [...preValue, newNote]
    })
  }

  const deleteNote = (id) =>{
    setNotes((preValue) =>{
      return [...preValue.filter((note, index) => index !== id)]
    })
  }
  return (
    <div className="App">
       <Header/>
       <Count count={notes.length === 0 ? 'Empty' : `${notes.length} present`}/>
       <CreateArea onAdd={addNote} />
       {notes.map((note,index) =>{
       return  <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>
})}
       <Footer />
    </div>
  );
}

export default App;
