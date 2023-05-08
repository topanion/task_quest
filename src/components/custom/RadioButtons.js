import React from "react";

const RadioButtons = ({ mode, options, handleModeChange }) => {
  return (
    <div className="justify-between flex text-sm w-full px-3">
      {options.map((option) => (
        <label
          key={option.value}
          className={`radio-label ${mode === option.value ? "font-bold" : ""}
   
          `}
        >
          <input
            key={option.value + " input"}
            type="radio"
            name="mode"
            value={option.value}
            checked={mode === option.value}
            onChange={handleModeChange}
            className="hidden"
          />

          {option.label}
          <br />
          <div
            className={`text-center font-bold ${
              mode === option.value ? "" : "hidden"
            }`}
          >
            _____
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
