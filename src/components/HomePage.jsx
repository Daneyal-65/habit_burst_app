import React, { useEffect, useState } from "react";
import SupportPage from "./SupportPage";
import Habit from "../HomeComponents/Habit";
import Footer from "./Footer";
import CustomHabit from "../HomeComponents/CustomHabit.jsx";
import { useDispatch } from "react-redux";
import { setAuthId } from "../services/reducers/Auth";

const habits = [
  {
    name: "Daily Exercise",
    description:
      "Engage in physical activity regularly to maintain a healthy body and mind.",
  },
  {
    name: "Mindful Meditation",
    description:
      "Practice mindfulness meditation to enhance focus, reduce stress, and promote mental well-being.",
  },
  {
    name: "Healthy Eating",
    description:
      "Adopt a balanced and nutritious diet to fuel your body and support overall health.",
  },
  {
    name: "Reading",
    description:
      "Cultivate a habit of reading regularly to expand knowledge and stimulate the mind.",
  },
  {
    name: "Quality Sleep",
    description:
      "Ensure adequate and quality sleep for improved physical and mental recovery.",
  },
  {
    name: "Gratitude Journaling",
    description:
      "Express gratitude by keeping a journal to appreciate the positive aspects of life.",
  },
  {
    name: "Continuous Learning",
    description:
      "Commit to lifelong learning, acquiring new skills and knowledge regularly.",
  },
  {
    name: "Time Management",
    description:
      "Develop effective time management skills to maximize productivity and reduce stress.",
  },
  {
    name: "Positive Affirmations",
    description:
      "Practice positive self-talk to boost confidence and maintain a positive mindset.",
  },
  {
    name: "Social Connection",
    description:
      "Nurture relationships and engage in social activities to support emotional well-being.",
  },
  {
    name: "Goal Setting",
    description:
      "Set clear and achievable goals to provide direction and motivation in life.",
  },
  {
    name: "Financial Planning",
    description:
      "Establish responsible financial habits, including budgeting and saving for the future.",
  },
];

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("userInfo") !== null) {
      const status = JSON.parse(localStorage.getItem("userInfo"));
      dispatch(setAuthId({ currentState: true, id: status.id }));
    }
  }, []);
  const handleHabitClick = (habitName, desc) => {
    console.log(`${habitName} is clicked and this is desc${desc}`);
  };

  return (
    <>
      <div
        className="flex text-center  gap-5 mx-20 my-4 p-4
   font-serif font-bold shadow-lg borderbar"
      >
        <h1
          className="text-xl saturate-200 shadow-sm bg-transparent
     text-red-600"
        >
          HABIT LIST
        </h1>
        <p className="text-black my-1 ">Chose One And Make It Your's</p>
      </div>
      <div>
        <CustomHabit />
      </div>
      <section
        className="max-container padding-container
   flex flex-col gap-5 lg:gap-4 xl:gap:3 flexCenter py-10 pb-32 md:gap-28 
   lg:py-20 lg:flex-row lg:flex-wrap xl:flex-row xl:flex-wrap "
      >
        {habits.map((name, index) => (
          <Habit key={index} {...name} onClick={handleHabitClick} />
        ))}
      </section>
      <section>
        <SupportPage />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default HomePage;
