import React from "react";
import ToDoButton from "@/components/custom/ToDoButton";

export default function ToDoList({ todos, onClick, alert = false }) {
  const handleClick = (id) => {
    if (alert) {
      if (
        confirm("Press OK if you want to take that task out of your to-do list")
      ) {
        onClick(id);
      }
    } else onClick(id);
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
