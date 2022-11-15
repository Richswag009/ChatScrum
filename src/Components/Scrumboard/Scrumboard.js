import React from "react";
import { useState } from "react";

const Scrumboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };
  const handleChange = (e) => {
    setTasks(e.target.value);
  };

  return (
    <div>
      <nav className=" bg-blue-900 text-white  py-2 px-6 flex flex-row justify-between">
        <h1 className="pt-3 text-2xl">CHATSCRUM</h1>
        <div>
          <p>User type: Owner</p>
          <p>Project name: ChatScrum</p>
        </div>
      </nav>

      <p>Hello liam nussie, Welcome to your dashboard</p>

      <div className="item-container">
        <div className=" w-[300px] h-[350px] border shadow-slate-500">
          <h1 className="text-center py-3 font-bold bg-gray-400">
            {" "}
            Weekly Tasks
          </h1>
          <p className="border-">{tasks}</p>
        </div>
        <div className=" w-[300px] h-[350px] border shadow-slate-500">
          <h1 className="text-center py-3 font-bold bg-gray-400">
            {" "}
            Daily Tasks
          </h1>
        </div>
      </div>

      {isOpen && (
        <div className="modal absolute left-1/4 bottom-60 bg-white border w-[320px]">
          <div className="flex flex-row text-white justify-between bg-blue-900">
            <h2 className="pl-1 pt-1">Add a new task</h2>
            <h3
              className="bg-red-900 px-2 py-1 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              X
            </h3>
          </div>
          <form className="my-8 px-4" onSubmit={handleSubmit}>
            <input
              type="text"
              className="border h-[40px] w-full px-1"
              onChange={handleChange}
            />{" "}
            <br />
            <button className="px-3 py-2  my-3 font-bold tracking-widest uppercase border-2 border-blue-100   hover:bg-blue-600 hover:text-white">
              {" "}
              Confirm
            </button>
          </form>
        </div>
      )}
      <button className="btn" onClick={() => setIsOpen(true)}>
        {" "}
        Add tasks
      </button>
    </div>
  );
};

export default Scrumboard;
