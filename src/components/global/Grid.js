import React from "react";

/*
 **  Grid components, use "sizes" props as an array of number with columns number 0 for large screen, 1 for medium and 2 for small
 */

/*
 **  Tailwind needs the classes to be fully written at build so it's unfortunately impossible to juste write a part of the class
 */

const lg = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

const md = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

const sm = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

export default function Grid({ sizes, children, className }) {
  return (
    <div
      className={`grid ${lg[sizes[0]]} ${md[sizes[1]]} ${
        sm[sizes[2]]
      } ${className}`}
    >
      {children}
    </div>
  );
}
