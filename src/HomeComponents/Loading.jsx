import React from "react";

const Loading = () => {

  return (
    <>
        <div className="text-center mt-4">
          <svg
            className="animate-spin h-12 w-12 mx-auto text-white"
            
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-85"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="5"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
            //   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8 8 0 0012 20v4c-6.627 0-12-5.373-12-12h4zm14-2A8 8 0 0012 4v-4c6.627 0 12 5.373 12 12h-4zm-2 6.627A8 8 0 018 20h-4c0-6.627 5.373-12 12-12v4z"
            ></path>
          </svg>
          <p className="mt-2">Loading...</p>
        </div>
    </>
  );
};

export default Loading;
