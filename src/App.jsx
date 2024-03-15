// App.jsx

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/HomePage";
import Login from "./components/LoginPage";
import Signup from "./components/SignupPage";
import Support from "./components/SupportPage";
import "./App.css";
import LandingPage from "./components/LandingPage";
import HabitList from "./components/HabitList";
import { useDispatch } from "react-redux";
import { setAuthId } from "./services/reducers/Auth";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("userInfo") !== null) {
      const status = JSON.parse(localStorage.getItem("userInfo"));
      dispatch(setAuthId({ currentState: true, id: status.id }));
    }
  }, []);
  return (
    <>
      <main className="bg-blue-400 lg:mx-16 ">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/habitList" element={<HabitList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
