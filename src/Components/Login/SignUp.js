import React from "react";
import Content from "../../Static/Content";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullname: yup.string().required().min(6),
  email: yup.string().required("please enter a valid email"),
  password: yup
    .string()
    .required("please enter passw0rd")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Minimum eight characters, at least one letter, one number and one special character"
    ),
});
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" p-5 mt-20 mx-auto w-[380px] border">
      <h1 className="text-center text-2xl">Dont have an account</h1>
      <p className="text-center">Sign-Up here</p>
      <form
        action=""
        className="my-3 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        {Content.inputs.map((item, i) => {
          return (
            <div key={i}>
              <label htmlFor="text"> {item.label}</label> <br />
              <input
                className=" border w-[320px] p-3 my-1 "
                type={item.type}
                name={item.name}
                {...register(item.name)}
              />
              <span className="message text-red-600 text-lg font-medium">
                {errors[item.name] && (
                  <p>
                    {item.label} is required. <sup>*</sup>
                  </p>
                )}
              </span>
            </div>
          );
        })}

        <div className="my-2">
          <label htmlFor=""> User type</label> <br />
          <select name="" id="" className=" w-[320px] py-3 pl-2 my-1 ">
            <option value="Developer">Developer</option>
            <option value="Owner"> Owner</option>
          </select>
        </div>
        <button className=" cursor-pointer text-white border w-fit my-3 py-2 px-3 rounded-lg bg-blue-700">
          {" "}
          Sign Up
        </button>
      </form>
      <p>
        Have an account already?? <Link to="/Signin">Sign in</Link>
      </p>
    </div>
  );
};

export default SignUp;
