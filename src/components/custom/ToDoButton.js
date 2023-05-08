import React, { useState } from "react";

export default function ToDoButton({
  text,
  onClick,
  disappear = false,
  deleteOnClick = null,
  bg = "",
}) {
  const [animated, setAnimated] = useState(false);
  const [clickedAlready, setClickedAlready] = useState(false);

  const handleClick = () => {
    if (clickedAlready) return;
    setClickedAlready(true);
    if (disappear) setAnimated(true);

    if (onClick) onClick();
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    if (disappear) setAnimated(true);

    deleteOnClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded-md ${bg} my-1 py-2 flex border justify-between px-2 shadow-lg font-bold hover:cursor-pointer ${
        animated
          ? "animate-bounce-short transition-opacity duration-500 opacity-0"
          : "animate hover:animate-bounce-short"
      }`}
    >
      {deleteOnClick && (
        <div
          className="flex h-fit border bg-red-500 px-2 text-center text-white rounded-md"
          onClick={handleDeleteClick}
        >
          <p className="m-auto">X</p>
        </div>
      )}

      {text}
    </div>
  );
}
