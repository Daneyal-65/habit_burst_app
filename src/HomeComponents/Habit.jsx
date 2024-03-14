import React, { useState } from "react";
const Habit = ({ name, description, onClick }) => {
  const [isclicked, setIsclicked] = useState(false);
  const handleClick = () => {
    setIsclicked(!isclicked);
    onClick(name, description);
  };
  const descriptionOfHabit = (
    <p
      className="flext font-semibold 
  border-2 border-current text-start ml-4 "
    >
      {description}
    </p>
  );
  return (
    <div
      className="w-80 h-maxContent rounded-md border-black
     flex flex-shrink bg-purple-500
      hover:bg-red-400
     transition-all duration-500 ease-in-out
     font-sm font-sans font-bold text-center p-4  shadow-lg"
      onClick={handleClick}
    >
      <h1
        className="text-lg text-black font-sans 
        font-semibold"
      >
        {name}
      </h1>
      {isclicked && descriptionOfHabit}
    </div>
  );
};

export default Habit;
