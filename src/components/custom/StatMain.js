import React from "react";
import { useEffect } from "react";
import { supabaseClient } from "@/utils/supabase-client";

/*
 **  Empty Navbar, using title button as a JSX props and children as the list of buttons (also JSX props)
 */

export default function StatMain({ userInfo }) {
  useEffect(() => {}, [
    userInfo.character_name,
    userInfo.energy,
    userInfo.level,
  ]);

  return (
    <>
      <nav className="fixed top-0 left-0 flex w-screen border-bottom items-center justify-between mb-3 lg:border-b z-10 px-[5%] py-1 text-lg font-bold">
        <span>
          {userInfo.character_name} - Level {userInfo.level}
        </span>
        <div className="absolute right-0 top-0">
          Energy :{" "}
          <span className={userInfo.energy === 0 ? "text-red-700" : ""}>
            {userInfo.energy}⚡
          </span>
        </div>
      </nav>
    </>
  );
}
