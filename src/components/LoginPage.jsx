import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../config";
import Loading from "../HomeComponents/Loading";
import { setAuthId } from "../services/reducers/Auth";
import { useDispatch, useSelector } from "react-redux";
export const currentuser = {};
function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [is_loding, setis_loding] = useState(false);

  const handleUserNameFormData = (e) => {
    setFormData({
      ...formData,
      userName: e.target.value,
    });
  };

  const handlePasswordFormData = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setis_loding(true);
    setMessage("");
    try {
      const res = await axios.get(`${baseUrl}/userdata/login`, {
        Headers: {
          "Content-Type": "application/json",
        },
        params: formData,
      });
      if (res.data.ok) {
        setis_loding(false);
        navigate(res.data.redirectUrl);
        dispatch(setAuthId(res.data.userId));
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ userName: formData.userName, id: res.data.userId })
        );
        //  console.log(localStorage.getItem("userInfo"));
        //  console.log(localStorage.getItem('userInfo'))
      } else {
        setis_loding(false);
        setMessage(res.data.message);
      }
    } catch (err) {
      setis_loding(false);
      console.error(err);
      setMessage("something went worng in server!!!");
    }

    setFormData({
      userName: "",
      password: "",
    });
  };

  return (
    <main
      className="flex flex-col items-center justify-center 
    h-screen bg-gray-900 text-white"
    >
      <h1 className="text-4xl font-bold mb-6">Log In</h1>
      <form
        onSubmit={handleSubmit}
        name="loginForm"
        id="loginform"
        className="w-80 bg-gray-800 p-6 rounded-md shadow-xl"
      >
        <label htmlFor="username" className="block text-sm mb-2">
          Username
        </label>
        <input
          type="text"
          placeholder="Type your username"
          value={formData.userName}
          onChange={handleUserNameFormData}
          className="w-full px-4 py-2 mb-4 bg-gray-700 rounded-md
           focus:outline-none focus:ring focus:border-blue-300"
          required
        />
        <label htmlFor="password" className="block text-sm mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Type your password"
          value={formData.password}
          onChange={handlePasswordFormData}
          className="w-full px-4 py-2 mb-4 bg-gray-700 rounded-md
           focus:outline-none focus:ring focus:border-blue-300"
          required
        />
        <button
          type="submit"
          className="w-full px-8 py-3 bg-green-400 hover:bg-green-600
           text-white rounded-md"
        >
          Login
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
      {is_loding && <Loading />}
      <div className="mt-4">
        <span className="text-gray-400">Don't have an account? </span>
        <Link to="/signup" className="text-blue-400">
          Sign Up
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;
