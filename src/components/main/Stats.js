import React from "react";

export default function Stats({ userInfo }) {
  return (
    <div className="w-full h-full justify-left p-2 font-bold">
      <div className="flex flex-col w-fit">
        <p>Name : {userInfo.character_name}</p>
        <p>Class : {userInfo.character_class}</p>
        <p>Level : {userInfo.level}</p>
        <p>Current Energy : {userInfo.energy}⚡</p>
        <a
          className="hover:cursor-pointer p-2 w-fit mt-[10%] rounded-xl bg-red-600 text-white"
          href="/api/auth/logout"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
