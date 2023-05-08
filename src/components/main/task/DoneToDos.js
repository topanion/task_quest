import React from "react";
import ToDoButton from "@/components/custom/ToDoButton";
import { Modal } from "@/components/global/Modal";

export default function DoneToDos({ todos, onClick }) {
  const filtered = todos.filter((todo) => todo.completed);

  const handleClick = (id) => {
    onClick(id);
  };

  return (
    <>
      {filtered.map((todo) => (
        <ToDoButton
          key={"done todo " + todo.id}
          text={todo.text}
          disappear={true}
          onClick={() => handleClick(todo.id)}
        />
      ))}
    </>
  );
}
