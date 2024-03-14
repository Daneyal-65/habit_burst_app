import React, { useState } from "react";

const Colour = ({ colors, onClick, item, active, shape }) => {
  const [color, setColor] = useState("cyan");
  const handleClick = () => {
    onClick(colors, item);
  };
  return (
    <span>
      <button
        style={{
          backgroundColor: active ? "rgba(131, 91, 168, 0.692)" : colors,
          border: "none",
          width: shape?.w || 50,
          height: shape?.h || 40,
          borderRadius: shape?.r || 50,
          fontSize: shape?.s || "15px",
          fontWeight: 500,
        }}
        className={`font-normal shadow-xl ${
          active ? "font-black text-white animate-bounce text-3xl" : ""
        }`}
        type="button"
        onClick={handleClick}
      >
        {item}
      </button>
    </span>
  );
};

export default Colour;
