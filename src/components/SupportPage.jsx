// Support.jsx

import React from "react";

function SupportPage() {
  return (
  <>
    <section className=" flex flex-col bgc
     bg-opacity-90 p-8 mx-12 rounded-lg">
      <div className="flex flexCenter flex-col w-80 p-4 bg-green-300 shadow-sm m-auto rounded-xl">
        <h1 className="regular-40 text-black font-bold">How it Works?</h1>
        <span className="text-black font-extrabold">Steps you have to follow:</span>
      </div>
      <div className="mt-4">
        <span className="textBold">Step 1</span>
        <p className="bgcc mt-4">
          Choose the habit from the list of habits with confidence and courage
          of achievement.
        </p>
      </div>
      <div className="my-4">
        <span className="textBold">Step 2</span>
        <p className="bgcc mt-4">
          Each habit is associated with a duration of achievement and
          interactive tasks.
        </p>
      </div>
      <div className="my-4 ">
        <span className="textBold">Step 3</span>
        <p className="bgcc mt-4">
          Time is analyzed and should be exact for the particular habit; it
          should vary based on the habit.
        </p>
      </div>
      <div className="my-4">
        <span className="textBold">Step 4</span>
        <p className="bgcc mt-4" >
          Each day, we send a message for task completion, and you have to
          complete the task.
        </p>
      </div>
      <div className="my-4">
        <span className="textBold">Step 5</span>
        <p className="bgcc mt-4">
          If you miss any day and you haven't completed the task before the
          next day, the time duration is increased by one.
        </p>
      </div>
      <main className="">
        <h1 className="regular-40 font-sans mx-12 my-4 bold-20 text-white" >Key Features:</h1>
        <div className="textBold">Customizable Habit Creation:</div>
        <p className="bgcc">
          Easily create and customize your habits based on your goals. Define
          the habit name, set the frequency, and choose specific days and times
          for reminders.
        </p>
        <div className="textBold">Smart Reminder System:</div>
        <p className="bgcc">
          Our intelligent reminder system ensures that you never miss a habit.
          Receive timely and personalized reminders that align with your
          schedule, making it easy to stay on track.
        </p>
        <div className="textBold">Progress Tracking:</div>
        <p className="bgcc">
          Monitor your progress effortlessly. HabitTracker Pro provides
          intuitive visualizations and streak tracking, allowing you to see how
          consistently you've been following your habits over time.
        </p>
        <div className="textBold">Flexible Scheduling:</div>
        <p className="bgcc">
          Life can be unpredictable. Our app accommodates changes in your
          routine. Easily reschedule or skip habits without breaking your
          streak, maintaining a realistic and achievable approach to
          habit-building.
        </p>
        <div className="textBold">Motivational Milestones:</div>
        <p className="bgcc">
          Celebrate your achievements! HabitTracker Pro recognizes your
          milestones, whether it's a week of consistent workouts or a month of
          daily reading. Unlock achievements and receive positive reinforcement
          as you make progress.
        </p>
        <div className="textBold">Insights and Analytics:</div>
        <p className="bgcc">
          Gain valuable insights into your habits with in-depth analytics.
          Understand your most successful habits, identify patterns, and make
          informed decisions to optimize your routine.
        </p>
        <div className="textBold">User-Friendly Interface:</div>
        <p className="bgcc">
          HabitTracker Pro boasts an intuitive and aesthetically pleasing
          interface, ensuring a seamless user experience. Navigate effortlessly,
          and enjoy a clean design that enhances your habit-building journey.
        </p>
      </main>
    </section>
  </>
  );
}

export default SupportPage;
