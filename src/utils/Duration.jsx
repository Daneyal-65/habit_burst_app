import React, { useEffect, useState } from "react";
import Colour from "./Colour";
import Calendar from "react-calendar";
import "./styles.css";
import "./ToggleThemeButton.css";
import { set_Reminder_state } from "../services/reducers/Reminder";
import { useDispatch, useSelector } from "react-redux";

export const Duration = ({ durationtime, onClick, durationID, active }) => {
  const handleClick = () => {
    const currentStatus = durationID;
    onClick(currentStatus);
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className={`w-24 border py-1 rounded-sm
        ${active ? "bg-gray-700 text-white" : ""}
       
        text-black 
       `}
      >
        {durationtime}
      </button>
    </div>
  );
};
export const Daily = ({ them }) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState("");
  const [value, setValue] = useState("00:00");
  const [toggleRight, setToggleRight] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      setTime(
        ` ${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (time !== "" && value === "00:00") dispatch(set_Reminder_state(time));
    else if (value !== "00:00") dispatch(set_Reminder_state(value));
    console.log(value);
  }, [time, value]);

  const handleSetTimerClick = () => {
    setToggleRight(!toggleRight);
  };
  const handleTimeChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: them,
        color: "black",
      }}
    >
      <p className="font-sans">
        Reminder on Current Time :
        <strong className="font-black" style={{ letterSpacing: "5px" }}>
          {time}
        </strong>
      </p>
      <div style={{ position: "relative", marginTop: "1rem" }}>
        <label className="text-xs leading-3 font-black">
          Set Reminder Time :
        </label>
        {toggleRight && (
          <input
            type="time"
            className="time-input"
            value={value}
            onChange={handleTimeChange}
          />
        )}
        <div className="radio-btn">
          <Toggle onClick={handleSetTimerClick} />
        </div>
      </div>
    </div>
  );
};
export const Weekly = ({ them }) => {
  const [bg, setbg] = useState("");
  const dispatch = useDispatch();
  const [reminder, setReminder] = useState("");
  useEffect(() => {
    if (reminder !== "") dispatch(set_Reminder_state(reminder));
  }, [reminder, dispatch]);
  const handleClick = (val, item) => {
    setbg(item);
    const date = new Date().toString().split(" ").slice(0, 3);
    date[0] = item;
    const newRem = date.join("-");
    setReminder(newRem);
  };
  return (
    <div>
      {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((item, index) => {
        return (
          <span className="mr-2" key={index}>
            <Colour
              key={index}
              item={item}
              colors={"#bf00ff"}
              onClick={handleClick}
              active={bg === item}
              shape={{
                w: 37,
                h: 35,
                r: 40,
                s: 10,
              }}
            />
          </span>
        );
      })}
    </div>
  );
};

export const Monthly = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reminder, setReminder] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (reminder !== "") dispatch(set_Reminder_state(reminder));
  }, [reminder, dispatch]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };
  const handleClickDate = (val) => {
    const newDate = val.toString().split(" ").slice(0, 4).join("-");
    setReminder(newDate);
  };
  return (
    <div>
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        type="button"
        className="selectDate"
      >
        Select Date
      </button>
      <span>{" : " + reminder}</span>
      {showCalendar && (
        <div
          className="absolute top-20 left-1 bg-green-500 
        right-1  h-[16.5rem]  flex rounded-2xl decoration p-4
         shadow-2xl"
        >
          <Calendar
            className={"customCalendar"}
            onChange={handleDateChange}
            value={selectedDate}
            onClickDay={(val) => handleClickDate(val)}
            activeStartDate={new Date()}
          />
          <button
            onClick={() => setShowCalendar(false)}
            className="flex absolute -top-2 -right-1
           bg-red-800 p-1 rounded-xl hover:bg-black
           font-black hover:text-white"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};
export const Reminder = ({ duration }) => {
  const [reminder_time, setReminder_time] = useState("");
  useEffect(() => {
    if (duration === 1) {
      setReminder_time(": 24 Hours");
    } else if (duration === 2) {
      setReminder_time(": WeekDay");
    } else if (duration === 3) {
      setReminder_time(": MonthDay");
    }
  }, [duration]);
  return (
    <div>
      <p>
        Next reminder would be in{" "}
        <span className="font-black">{reminder_time}</span>
      </p>
    </div>
  );
};

function Toggle({ onClick }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    onClick(isDarkMode);
  };

  return (
    <div className="toggle-theme-container">
      <button
        type="button"
        className={`toggle-button ${isDarkMode ? "dark-mode" : "light-mode"}`}
        onClick={toggleTheme}
      >
        <div className="toggle-track"></div>
      </button>
    </div>
  );
}

export default Toggle;
