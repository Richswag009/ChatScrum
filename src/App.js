import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/Login/SignUp";
import SignIn from "./Components/Login/SignIn";
import Home from "./Components/Home/Home";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
