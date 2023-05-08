import React from "react";

// Button component
export function ModalButton({ onClick, name }) {
  return (
    <button
      className="rounded-xl p-2 bg-blue-500 hover:bg-slate-600"
      onClick={onClick}
    >
      {name}
    </button>
  );
}

// Modal component
export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black/40 flex z-20"
      onClick={onClose}
    >
      <div
        className="m-auto min-w-[50%] max-w-[80%] min-h-[50%] bg-white rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
