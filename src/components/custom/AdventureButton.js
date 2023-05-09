import React, { useState } from "react";
import { characterService } from "@/services/client/supabase/character-service";

export default function AdventureButton({ text, onClick, userInfo, energy }) {
  const [animated, setAnimated] = useState(false);

  const handleClick = () => {
    if (userInfo.energy < energy) return;
    characterService.addEnergy(userInfo, 0 - energy);
    if (onClick) onClick();
    setAnimated(true);
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded-md ${
        userInfo.energy < energy ? "opacity-50" : "opacity-100"
      } my-1 py-2 flex border justify-between px-2 shadow-lg font-bold hover:cursor-pointer ${
        animated && userInfo.energy > energy - 1 ? "animate-bounce-short" : ""
      }`}
    >
      <p>{text}</p>
      <p>{energy}⚡</p>
    </div>
  );
}
