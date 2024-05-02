// Signup.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../config";
import axios from "axios";
import Loading from "../HomeComponents/Loading";
import { generateToken } from "../firebase";
function SignupPage() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
    FCM: "",
  });
  const [message, setMessage] = useState("");
  const [isLoding, setIsLoading] = useState(false);

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
  const handleNameFormData = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.FCM = await generateToken();
    const newdata = JSON.stringify(formData);

    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/userdata/signup`, newdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        navigate(response.data.redirectUrl);
      } else {
        setIsLoading(false);
        setMessage("not valid user detail");
      }
    } catch (error) {
      console.log("Error adding recipe:", error);
    }
    setIsLoading(false);
    setFormData({
      userName: "",
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        name="signupform"
        id="signupform"
        className="w-80 bg-gray-800 p-6 rounded-md shadow-md"
      >
        <label htmlFor="text" className="block text-sm mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Type your name"
          value={formData.email}
          onChange={handleNameFormData}
          className="w-full px-4 py-2 mb-4 bg-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
        <label htmlFor="text" className="block text-sm mb-2">
          createUsername
        </label>
        <input
          type="text"
          placeholder="type valid username"
          value={formData.userName}
          onChange={handleUserNameFormData}
          className="w-full px-4 py-2 mb-4 bg-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
        <label htmlFor="password" className="block text-sm mb-2">
          createPassword
        </label>
        <input
          type="password"
          placeholder="create your password"
          value={formData.password}
          onChange={handlePasswordFormData}
          className="w-full px-4 py-2 mb-4 bg-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
        <button
          type="submit"
          className="w-full px-8 py-3 bg-green-400 hover:bg-green-500 text-white rounded-md"
        >
          Register
        </button>
      </form>
      {formData.password && formData.name && formData.userName ? (
        ""
      ) : (
        <p className="mt-4 text-red-500">{message}</p>
      )}
      {isLoding && <Loading />}
      <div className="mt-4">
        <span className="text-gray-400">Already have an account? </span>
        <Link to="/login" className="text-blue-400">
          Log In
        </Link>
      </div>
    </main>
  );
}

export default SignupPage;
