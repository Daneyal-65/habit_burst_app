import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Protect = () => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate asynchronous action to check user's login status
    const checkLoginStatus = async () => {
      // Perform your asynchronous action here (e.g., fetching data from an API or checking local storage)
      // For demonstration, I'm using a setTimeout to simulate asynchronous behavior
      setTimeout(() => {
        // Update userLoggedIn state based on the result of the authentication check
        const isLoggedIn = localStorage.getItem("userInfo") !== null;
        setUserLoggedIn(isLoggedIn);
        setLoading(false); // Set loading to false once the check is completed
      }, 1000);
    };

    checkLoginStatus();
  }, []);

  //   if (loading) {
  //     return <div>Loading...</div>; // Render a loading indicator while checking login status
  //   }
  console.log(userLoggedIn);
  if (!userLoggedIn) {
    // Redirect to login page if user is not logged in
    navigator("/login");
  }

  // Render the protected content if user is logged in
  return (
    <div>
      {/* <h1>Welcome, User!</h1>
      Render your protected component content here */}
    </div>
  );
};

export default Protect;
