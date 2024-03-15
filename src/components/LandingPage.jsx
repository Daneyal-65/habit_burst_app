import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <main className="mainland lg:h-screen">
        <div className="hero-tile sm:text-xl">
          <h1>
            <strong className="text-red-600">Never Forget </strong>Your
            <strong className="text-red-600"> Habits</strong>
            <strong className="text-blue-900"> Again.</strong>
          </h1>
          <p>
            <span className="text-cyan-800">
              With our habit re
              <strong className="text-blue-900">minder </strong>
              app,
            </span>{" "}
            you can easily
            <strong className="text-red-600">
              {" "}
              track and manage your{" "}
              <strong className="text-purple-500">daily</strong>{" "}
            </strong>
            habits.
          </p>
          <Link to="/signup">
            <button>Get Started</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
// .main {
//     min-height: 93vh;
//     display: flex;
//     align-items: center;
//     background-image: url("../../background1.jpg");
//     background-position: center;
//     background-size: cover;
//   }
