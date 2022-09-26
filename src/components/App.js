import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setnotes] = useState([]);

  function addNote(note) {
    setnotes((prev) => {
      return [...prev, note];
    });
  }
  function deleteNote(id) {
    setnotes((prev) => {
      return prev.filter((createNote, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((createNote, index) => (
        <Note
          key={index}
          id={index}
          title={createNote.title}
          content={createNote.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
};

export default App;
