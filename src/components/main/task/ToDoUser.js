import React from "react";
import ToDoButton from "@/components/custom/ToDoButton";

export default function ToDoUser({ todos, onClick }) {
  if (!todos) return null;

  const filtered = todos.filter((todo) => !todo.completed);

  return (
    <>
      {filtered.map((todo) => (
        <ToDoButton
          key={"to-do user " + todo.id}
          bg={"bg-white"}
          text={todo.text}
          disappear={true}
          onClick={() => onClick(todo.id)}
        />
      ))}
    </>
  );
}
