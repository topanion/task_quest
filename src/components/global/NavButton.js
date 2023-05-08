/*
 **	A simple button for navigation, simple rounded style with hover (or not)
 **	Hover is true by default, hover color is gray by default
 **	Text color is parent's
 */

import React from "react";
import { useRouter } from "next/router";

export default function NavButton({
  name,
  link = "/",
  hover = true,
  color = "",
  hovercolor = "hover:bg-gray-700",
  hovertext = "hover:text-white",
}) {
  const router = useRouter();

  /*
   **	link is
   */

  return (
    <a
      className={`${
        router.pathname.includes(link) && link != "/" ? "bg-gray-600 " : ""
      } ${color} rounded h-max py-2 ${
        hover ? hovercolor + " " + hovertext : ""
      }`}
      href={link}
    >
      <span className="text-xs uppercase font-bold p-2">{name}</span>
    </a>
  );
}
