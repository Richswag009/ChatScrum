import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Fragment>
      <div className=" p-5 mt-20 mx-auto w-[380px] border  ">
        <h1 className="text-center text-2xl">Have an account ??</h1>
        <p className="text-center">Sign-in here</p>
        <form className="my-3 flex flex-col">
          <div className="my-2">
            <label htmlFor="email"> Email</label> <br />
            <input
              className="border w-[320px] p-3 my-1 "
              type="email"
              name="email"
            />
          </div>
          <div className="my-2">
            <label htmlFor="text">Password</label> <br />
            <input
              className="border w-[320px] p-3 outline-none my-1 "
              type="password"
              name="password"
            />
          </div>
          <div className="my-2">
            <label htmlFor="text"> Project Name</label> <br />
            <input
              className="border w-[320px] p-3 outline-none my-1 "
              type="text"
              name="text"
            />
          </div>
          <div className=" flex flex-row align-middle justify-between">
            <button className=" cursor-pointer text-white border w-fit my-3 py-2 px-3 rounded-lg bg-blue-700">
              {" "}
              <Link to="/scrumboard"> Login</Link>
            </button>
            <p className="mt-2">
              Dont have an <br /> account?? <Link to="/Signup">Sign up</Link>
            </p>
          </div>
        </form>
        <p>
          <Link to="/">
            {" "}
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to
            home
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default SignUp;
