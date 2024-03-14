import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../config";
import { useSelector } from "react-redux";
import Colour from "../utils/Colour";
import { Daily, Duration, Monthly, Reminder, Weekly } from "../utils/Duration";
import "./customhabit.css";
const CustomHabit = () => {
  const userid = useSelector((state) => state.auth.id);
  const remTime = useSelector((state) => state.remind.value);
  const [userHabit, setUserHabit] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [description, setDescriptionn] = useState("");
  const [them, setThem] = useState("cyan");
  const [duration, setDuration] = useState(1);
  const handleDuration = (id) => {
    setDuration(id);
  };
  const handleSubmitHabit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const day = date.toLocaleString();
    const dayOfWeek = date.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const rem_Time = `${dayOfWeek} ${day}`;
    const habitInfo = {
      userId: userid,
      habitName: userHabit,
      them: them,
      reminderTime: { remTime, time: rem_Time },
      description: description,
    };
    try {
      const res = await axios.post(`${baseUrl}/userdata/habit`, habitInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    setIsUser(!isUser);
    setUserHabit("");
    setDescriptionn("");
    setDuration(1);
    setThem("cyan");
  };
  const headStyle = {
    fontFamily: "sans-serif",
    fontSize: 30,
    fontWeight: 700,
    color: "cyan",
    letterSpacing: 3,
  };
  const handleColor = (newThem) => {
    setThem(newThem);
  };
  return (
    <>
      {!isUser && (
        <div
          className="flexContainer  m-auto w-24 text-center border-2 border-current mt-4
      hover:bg-green-500 text-white font-extrabold rounded-2xl shadow-2xl"
        >
          <button
            onClick={() => setIsUser(!isUser)}
            className="border-none transition-all duration-150 ease-in-out p-4"
          >
            Create
          </button>
        </div>
      )}
      {isUser && (
        <div className="relative">
          <div className="flex items-center justify-center ">
            <h1 style={headStyle}>Create Habit</h1>
          </div>
          <form
            id="habitForm"
            className="hform relative"
            style={{ backgroundColor: them }}
            onSubmit={(e) => handleSubmitHabit(e)}
            name="form"
          >
            <button
              className="absolute -top-2 -right-2 
            font-black bg-green-600 rounded-3xl 
            px-4 h-8 shadow-2xl hover:bg-red-900 "
              onClick={() => setIsUser(!isUser)}
            >
              X
            </button>
            <div>
              <input
                className="Habitinput w-72 pl-3 mt-4"
                type="text"
                value={userHabit}
                onChange={(e) => setUserHabit(e.target.value)}
                placeholder="habit name"
                required
              />
            </div>
            <div className="colors ">
              <Colour colors={"#3F51B5"} onClick={handleColor} />
              <Colour colors={"#FF5722"} onClick={handleColor} />
              <Colour colors={"#4CAF50"} onClick={handleColor} />
              <Colour colors={"#FFC107"} onClick={handleColor} />
            </div>
            <div className="duration">
              {["DAILLY", "WEEKLY", "MONTHLY"].map((item, index) => {
                return (
                  <Duration
                    key={index}
                    durationtime={item}
                    onClick={handleDuration}
                    durationID={index + 1}
                    active={duration === index + 1}
                  />
                );
              })}
            </div>
            {duration === 1 && <Daily them={them} />}
            {duration === 2 && <Weekly />}
            {duration === 3 && <Monthly />}
            <Reminder duration={duration} />
            <div>
              <textarea
                name="descriptionn"
                id="habitdesc"
                value={description}
                placeholder="type something here..!"
                onChange={(e) => setDescriptionn(e.target.value)}
                className="w-72 rounded-xl border-none resize-none p-2 outline-none focus:shadow-3xl "
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-48 px-4 py-2
               bg-green-400 hover:bg-green-500 text-white
               hover:text-black hover:font-black rounded-md "
              >
                Add Habit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CustomHabit;
