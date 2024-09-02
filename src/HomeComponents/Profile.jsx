import React, { useState } from "react";

const Profile = () => {
  const [isrender, setIsrender] = useState(false);
  const newuser = JSON.parse(localStorage.getItem("userInfo"))
  return (
    <>
      <button
        onClick={() => setIsrender(!isrender)}
        className="rounded-full hover:shadow-lg -mt-1"
      >
        <img className="w-8 h-8 shadow-2xl"
        src="profile.png" alt="pro..?" />
      </button>
      {isrender && (
        <div className="flex flex-col items-center 
        justify-center gap-1 absolute z-40 border-2 
        border-current maxContainer p-4 m-2 bg-green-400
        text-sm rounded-md font-extrabold
        ">
          <div className="border-current border-b py-1">
            <span>userName: </span>
            <span>{newuser.userName}</span>
          </div>
          <div className="py-1">
            <span>profile_ID: </span>
            <span>{newuser.userName.split('').slice(0,3).join('')+Math.floor(Math.random(1000)*100)+
            'x001'}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;