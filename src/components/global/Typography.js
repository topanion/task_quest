import React from "react";

const sizes = {
  h1: "text-5xl font-bold sm:text-4xl",
  h2: "text-4xl font-bold sm:text-3xl",
  h3: "text-3xl font-bold sm:text-2xl",
  h4: "text-2xl font-bold sm:text-1xl",
  h5: "text-xl font-bold sm:text-lg",
  body: "text-lg sm:text-md",
  "body-small": "text-md sm:text-sm",
  small: "text-sm sm:text-xs",
};

export default function Typography({ variant, children, className, as, wrap }) {
  const sizeClasses = sizes[variant];
  const Tag = as;

  return (
    <Tag
      className={`${sizeClasses} ${className} ${
        wrap ? "" : "lg:whitespace-nowrap"
      }`}
    >
      {children}
    </Tag>
  );
}
