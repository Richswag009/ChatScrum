import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className=" w-[400px] mx-auto my-12">
      <h1 className="text-3xl text-center">Welcome to Chat Scrum</h1>
      <div className="flex flex-row justify-evenly my-3">
        <h4 className=" px-5 py-3 bg-blue-600 border text-white rounded">
          {" "}
          <Link to="/Signin">Sign In</Link>{" "}
        </h4>
        <h4 className=" px-5 py-3 bg-blue-600 border text-white rounded">
          {" "}
          <Link to="/Signup">Sign Up</Link>{" "}
        </h4>
      </div>
    </div>
  );
};

export default Home;
