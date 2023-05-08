import React, { useState, useEffect } from "react";
import ToDoButton from "../custom/ToDoButton";

export default function Adventure({ userInfo, setDisplayMode }) {
  const [adventureMode, setAdventureMode] = useState(null);

  useEffect(() => {}, []);

  const handleVisit = () => {
    setAdventureMode(true);
    setDisplayMode("Travel");
  };

  const handleHome = () => {
    setAdventureMode(null);
    setDisplayMode("Adventure");
  };

  return (
    <div className="p-2 min-h-[85] flex flex-col gap-2">
      {!adventureMode ? (
        <>
          <ToDoButton
            key="idk"
            text={"Visit the village - 2⚡"}
            onClick={() => handleVisit()}
          />
          <ToDoButton
            key="idklol"
            text={"Explore the forest - 5⚡"}
            onClick={() => console.log("")}
          />
        </>
      ) : (
        <>
          <div className="p-3">
            <div className="p-2">
              <p>
                As you step into the dense forest, the tranquil ambiance gives
                way to a symphony of rustling leaves and distant whispers.
              </p>
              <p>
                {" "}
                The air becomes thick with anticipation, and the mysterious
                sounds seem to echo from hidden corners, arousing both curiosity
                and caution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 my-3">
              <button className="rounded-xl border shadow-lg p-1">
                Explore even deeper ! 2⚡
              </button>
              <button
                className="rounded-xl border shadow-lg p-1"
                onClick={() => handleHome()}
              >
                Go Home
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
