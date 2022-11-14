import React from "react";
import Content from "../../Static/Content";

const SignUp = () => {
  return (
    <div className=" p-5 mt-20 mx-auto w-[380px] border  ">
      <h1 className="text-center text-2xl">Dont have an account</h1>
      <p className="text-center">Sign-Up here</p>
      <form action="" className="my-3 flex flex-col">
        {Content.inputs.map((item, i) => {
          return (
            <div key={i}>
              <label htmlFor="text"> {item.label}</label> <br />
              <input
                className=" border w-[320px] p-3 my-1 "
                type={item.type}
                name={item.name}
              />
            </div>
          );
        })}

        <div className="my-2">
          <label htmlFor=""> User type</label> <br />
          <select name="" id="" className=" w-[320px] p-3 my-1 ">
            <option value="Developer">Developer</option>
            <option value="Owner"> Owner</option>
          </select>
        </div>
        <button className=" cursor-pointer text-white border w-fit my-3 py-2 px-3 rounded-lg bg-blue-700">
          {" "}
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
