import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { baseUrl } from "../config";
import axios from "axios";
import { useNavigate } from "react-router";
import "../styles/dashboar.css";
const Dashboard = () => {
  const userId = useSelector((state) => state.auth.id);
  const userStatus = useSelector((state) => state.auth.value);
  const navigate = useNavigate();

  const [data, setdata] = useState(null);
  const fetchHabit = async () => {
    try {
      // Use 'headers' instead of 'Headers' and pass params as an object
      const res = await axios.get(`${baseUrl}/userdata/gethabit`, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          userId: userId,
        },
      });
      const userdata = await res.data;
      setdata(userdata);
      // Log the data from the response
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchHabit();
  }, []);
  return (
    <main className="main">
      <div className="container">
        {data?.map((item, index) => {
          return (
            <ul
              className="habit "
              key={index}
              style={{ backgroundColor: item.them }}
            >
              <div>
                <li>Name : {item.habitName}</li>
                <li>Reminder Time :{item.reminderTime.remTime}</li>
                <li>Description :{item.description}</li>
              </div>
              <div className="flex gap-3">
                <button className="btn">Delete</button>
                <button className="btn">Edit</button>
                <button className="btn">Tasks</button>
              </div>
            </ul>
          );
        })}
      </div>
    </main>
  );
};
export default Dashboard;
