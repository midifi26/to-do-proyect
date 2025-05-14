import React from "react";
import './App.css';
import TodoApp from './components/TodoItem/TodoItem'; 

function App() {
  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <TodoApp />
    </div>
  );
}

export default App;