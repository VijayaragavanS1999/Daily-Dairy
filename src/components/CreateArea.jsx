import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setnote((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleClick(e) {
    props.onAdd(note);
    setnote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Date ?"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="How was the Day"
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
