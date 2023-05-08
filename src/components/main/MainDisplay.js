import React from "react";
import { useState, useEffect } from "react";
import Character from "./Character";
import Introduction from "./Introduction";
import Tasks from "./Tasks";
import StatMain from "../custom/StatMain";
import NavMain from "../custom/NavMain";
import Adventure from "./Adventure";
import Stats from "./Stats";

export default function MainDisplay({ userInfo }) {
  const [displayMode, setDisplayMode] = useState(null);

  useEffect(() => {
    if (!userInfo.character_created) setDisplayMode("Intro");
    else setDisplayMode("Adventure");
  }, [userInfo.character_created]);

  const mode = {
    Intro: <Introduction userInfo={userInfo} />,
    Tasks: <Tasks userInfo={userInfo} />,
    Adventure: <Adventure userInfo={userInfo} />,
    Stats: <Stats userInfo={userInfo} />,
  };

  return (
    <>
      {displayMode && (
        <>
          {displayMode !== "Intro" && (
            <>
              <StatMain userInfo={userInfo} />
              <NavMain
                displayMode={displayMode}
                setDisplayMode={setDisplayMode}
              />
              <div className="mt-[7vh] mx-[5%]">
                <Character userInfo={userInfo} />
              </div>
            </>
          )}

          <div className="border mx-[5%] rounded-md mt-3 top-0 h-[50vh] lg:overflow-hidden overflow-scroll">
            {mode[displayMode]}
          </div>
        </>
      )}
    </>
  );
}
