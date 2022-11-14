import React, { Component } from "react";
import SignUp from "./Components/Login/SignUp";
import SignIn from "./Components/Login/SignIn";

export class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center text-3xl mt-4"> ChatScrum </h1>
        <SignUp />
        <SignIn />
      </div>
    );
  }
}

export default App;
