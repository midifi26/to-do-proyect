import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import data from "../../data/data.json";  // Si quieres usar datos iniciales del JSON
import TodoList from "../TodoList/TodoList";

const TodoItem = () => {
  const [todoL, setTodoL] = useState([]); // Lista actual de tareas

  const paintData = () =>
    todoL.map((item) => (
      <TodoList key={uuidv4()} data={item} remove={() => removeToDo(item)} />
    ));

  const removeToDo = (todoToRemove) => {
    const remainingItems = todoL.filter((item) => item !== todoToRemove);
    setTodoL(remainingItems); // Elimina la tarea seleccionada
  };

  const removeTodoL = () => setTodoL([]); // Elimina todas las tareas

  const resetSetInitialTodos = () => setTodoL(data); // Carga las tareas del JSON

  const toggleTodo = (id) => {
    setTodoL(todoL.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const addToDo = (new_ToDo) => {
    setTodoL([...todoL, new_ToDo]); // Agrega una nueva tarea a la lista
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = {
      id: uuidv4(),
      todo: e.target.todo.value,
      day: e.target.day.value,
      priority: e.target.priority.value,
      checked: false, // Estado inicial (sin marcar)
    };
    addToDo(newToDo);
    e.target.reset(); // Limpia el formulario
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" placeholder="Escribe una tarea" required />
        <select name="day">
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miercoles">Miércoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sabado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>
        <select name="priority">
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
        <input type="submit" value="Agregar" />
      </form>
      {paintData()}
      <button onClick={removeTodoL}>Borrar todo</button>
      <button onClick={resetSetInitialTodos}>Recargar</button>
    </section>
  );
};

export default TodoItem;
