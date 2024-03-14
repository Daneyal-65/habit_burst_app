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
import { useDispatch, useSelector } from "react-redux";
import { defaultSatatus, setAuth } from "./services/reducers/Auth";
function App() {
  // const dispatch = useDispatch()
  // const status = useSelector((state)=> state.auth.value)
  // const userid = JSON.parse(localStorage.getItem('userInfo'))
  // const checkStatus = ()=>{
  //     if(status){
  //       dispatch(defaultSatatus());
  //     }
  // }
  // useEffect(()=>{
  //    checkStatus();
  //    console.log(userid)
  // },[])
  return (
    <>
      <main className="bg-blue-400 lg:mx-16 "> 
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/habitList" element={<HabitList/>} />
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
