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
import { setAuthId } from "./services/reducers/Auth";
import { onMessage } from "firebase/messaging";
import { messaging } from "./firebase";
function App() {
  const dispatch = useDispatch();
  const status = useSelector((s) => s.auth.value);
  useEffect(() => {
    if (localStorage.getItem("userInfo") !== null) {
      const status = JSON.parse(localStorage.getItem("userInfo"));
      dispatch(setAuthId({ currentState: true, id: status.id }));
    }
    //message by fire base 

    const unsubscribe = onMessage(messaging, (payload) => {
        console.log('Received foreground message:', payload);
        // Here you can handle the received message, e.g., show a notification
        new Notification(payload.notification.title, {
          body: payload.notification.body,
          icon: payload.notification.icon
        });
      });

      return () => {
        unsubscribe();
      };


    //message*************
  
  }, []);
  return (
    <>
      <main className="bg-blue-400 lg:mx-16 ">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={status ? <Home /> : <LandingPage />} />
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
