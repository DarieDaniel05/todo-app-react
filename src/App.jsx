import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
const App = () => {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
};
export default App;
