import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";

const App = () => {
  return (
    <div>
      <Header />
      {notes.map((createNote) => (
        <Note
          key={createNote.key}
          title={createNote.title}
          content={createNote.content}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
