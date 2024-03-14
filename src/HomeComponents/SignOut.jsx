import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const SignOut = ({ onClick }) => {
  const navigator = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("userInfo");
    onClick(null);
    navigator("/");
  };

  return (
    <>
      <button
        onClick={() => handleClick}
        className="border-2 border-current w-max px-4 h-8 hover:bg-slate-500 rounded-2xl"
      >
        SignOut
      </button>
    </>
  );
};

export default SignOut;
