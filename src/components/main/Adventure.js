import React, { useState, useEffect } from "react";
import ToDoButton from "../custom/ToDoButton";

export default function Adventure({ userInfo }) {
  useEffect(() => {}, []);

  return (
    <div className="p-2 min-h-[85]">
      <ToDoButton
        key="idk"
        text={"Visit the village - 2⚡"}
        onClick={() => console.log("")}
      />
      <ToDoButton
        key="idklol"
        text={"Explore the forest - 5⚡"}
        onClick={() => console.log("")}
      />
      <ToDoButton
        key="idkmdr"
        text={"Look for the dungeon - 10⚡"}
        onClick={() => console.log("")}
      />
    </div>
  );
}
