import React from "react";
import ToDoButton from "@/components/custom/ToDoButton";

export default function ToDoList({ todos, onClick, alert = false }) {
  const handleClick = (id) => {
    onClick(id);
  };

  return (
    <>
      {todos.map((todo) => (
        <ToDoButton
          key={"todolist " + todo.id}
          text={todo.text}
          disappear={true}
          onClick={() => handleClick(todo.id)}
        />
      ))}
    </>
  );
}
