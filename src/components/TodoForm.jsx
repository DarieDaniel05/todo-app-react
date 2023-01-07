import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Add a todo"
          value={input}
          className="todo-input"
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        <button className="todo-button">Add todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
