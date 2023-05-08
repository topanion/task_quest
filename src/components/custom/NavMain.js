import React from "react";
import { useEffect } from "react";

/*
 **  Empty Navbar, using title button as a JSX props and children as the list of buttons (also JSX props)
 */

export default function NavMain({ displayMode, setDisplayMode }) {
  useEffect(() => {}, [displayMode]);

  return (
    <>
      <nav
        className={` fixed bottom-0 left-0 flex w-screen items-center justify-between lg:border-b z-10`}
      >
        {displayMode !== "Tasks" && (
          <button
            type="button"
            className="w-full border"
            onClick={() => setDisplayMode("Tasks")}
          >
            <p className="text-lg p-2 rounded-md font-bold hover:bg-gray-200">
              Tasks
            </p>
          </button>
        )}

        {displayMode !== "Adventure" && (
          <button
            type="button"
            className="w-full border"
            onClick={() => setDisplayMode("Adventure")}
          >
            <p className="text-lg p-2 rounded-md font-bold hover:bg-gray-200">
              Adventure
            </p>
          </button>
        )}

        {displayMode !== "Stats" && (
          <button
            type="button"
            className="w-full border"
            onClick={() => setDisplayMode("Stats")}
          >
            <p className="text-lg p-2 rounded-md font-bold hover:bg-gray-200">
              Stats
            </p>
          </button>
        )}
        {/** 
        <a href="/api/auth/logout">
          <p className="text-lg p-2 rounded-md font-bold text-red-600 hover:bg-gray-200">
            Se déconnecter
          </p>
        </a>
        */}
      </nav>
    </>
  );
}
