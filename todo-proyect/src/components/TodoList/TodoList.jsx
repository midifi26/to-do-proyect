import React from "react";
//import TodoItemView from "../TodoItem/TodoItemView";

const TodoList = ({ items, remove, toggle }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItemView
          key={item.id}
          todo={item}
          remove={() => remove(item)}
          toggle={() => toggle(item.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;

