import React, { useState } from "react";
import { possible_buttons } from "./svg_navbutton";

/*
 **  Empty Navbar, using title button as a JSX props and children as the list of buttons (also JSX props)
 */

export default function Navbar({ title, children }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 flex w-screen items-center justify-between mb-3 lg:border-b z-10 px-[10%] py-1`}
      >
        {title}
        <button
          className={`text-xl px-3 py-2 rounded ${
            navbarOpen ? "bg-gray-700" : "bg-transparent"
          } block lg:hidden outline-none focus:outline-none`}
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {!navbarOpen
            ? possible_buttons["closed"]
            : possible_buttons["opened"]}
        </button>
        <div
          className={
            "lg:relative fixed lg:flex flex-grow items-center transition-opacity duration-500 ease-in-out " +
            (navbarOpen
              ? "sm:absolute md:absolute left-0 px-[10%] opacity-100 top-[6vh] w-[100vw] flex pt-4 pb-2 border-b bg-white"
              : "hidden")
          }
        >
          <ul className=" flex flex-col lg:flex-row list-none lg:ml-auto py-0 gap-4">
            {children}
          </ul>
        </div>
      </nav>
    </>
  );
}
