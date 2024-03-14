import React, { useEffect, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Profile from "../HomeComponents/Profile";
import SignOut from "../HomeComponents/SignOut";
import { useDispatch, useSelector } from "react-redux";
import { removeAuth } from "../services/reducers/Auth";

const Nav = () => {
  const LoginStatus = useSelector((state) => state.auth.value);
  const [menuState, setMenuState] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    setMenuState(!menuState);
    setToggle(!toggle);
  };
  const hadleSignOutClick = (status) => {
    localStorage.setItem("userinfo", status);
    dispatch(removeAuth(false));
    navigator("/");
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link to="/home" className="flex justify-center items-center">
        <img className="w-10 h-18 mx-4" src="/logo.png" alt="logo" />
        <span className="text-black text-2xl tracking-wid">
          <strong>Habit Burst</strong>
        </span>
      </Link>

      <div className="flex-grow"></div>

      <ul
        className={`${
          menuState ? "flex-nav" : "hidden"
        } flex-col h-full gap-12 lg:flex lg:flex-row`}
      >
        {LoginStatus && (
          <li>
            <Profile />
          </li>
        )}
        <li>
          <Link
            to={LoginStatus ? "/home" : "/login"}
            className="text-black font-mono font-semibold hover:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={LoginStatus ? "/support" : "/login"}
            className="text-black font-mono font-semibold hover:underline"
          >
            Guide
          </Link>
        </li>
        <li>
          {LoginStatus ? <SignOut onClick={hadleSignOutClick} /> : <IsLogin />}
        </li>
      </ul>

      <button
        onClick={handleMenuClick}
        className="lg:hidden xl:hidden z-40 position-menu"
      >
        <div className={`flex ${toggle ? "cross" : "hamBurger"}`}>
          <span id="1"></span>
          <span id="2"></span>
          <span id="3"></span>
        </div>
      </button>

      <div
        className="bg-black text-white
       w-28 h-10 rounded-2xl lg:w-24 lg:h-12 hover:bg-green-500 
       transition-all duration-500 ease-linear flexCenter mx-12
       font-thin mt-1
       
        outline-none shadow-xl"
      >
        <Link to={LoginStatus ? "/habitList" : "/login"}> Dashboard </Link>
      </div>
    </nav>
  );
};

export const IsLogin = () => {
  return (
    <Link
      to="/login"
      className="text-black font-mono font-semibold hover:underline hover:font-normal transition-all duration-300 ease-in-out"
    >
      Login
    </Link>
  );
};

export default Nav;
