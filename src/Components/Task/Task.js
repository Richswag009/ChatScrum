import React from "react";
import tasklist from "../../Static/TaskList";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

const Task = () => {
  const [taskRoll, setTaskRoll] = useState(tasklist);

  const onDragEndHandler = (result) => {
    if (!result.destination) return;
    const items = Array.from(taskRoll);
    const [reorderedItem] = items.slice(result.source.index, 1);
    items.slice(result.destination.index, 0, reorderedItem);
    setTaskRoll(items);
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEndHandler}>
        <div className="item-container">
          <Droppable droppableId="id">
            {(provided) => {
              <div
                className=" w-[300px] h-[350px] border shadow-slate-500"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h1 className="text-center py-3 font-bold bg-gray-400">
                  {" "}
                  Weekly Tasks
                </h1>
                {taskRoll.map((item, i) => {
                  return (
                    <Draggable key={item.id} draggableId={item.id} index={i}>
                      {(provided) => {
                        <p
                          className="border h-[50px] p-1 mb-[2px] hover:py-2 "
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {" "}
                          {item.item}
                        </p>;
                      }}
                      {provided.placeholder}
                    </Draggable>
                  );
                })}
              </div>;
            }}
          </Droppable>
          <Droppable droppableId="id">
            {(provided) => {
              <div
                className=" w-[300px] h-[350px] border shadow-slate-500"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h1 className="text-center py-3 font-bold bg-gray-400">
                  {" "}
                  Daily Tasks
                </h1>
                {provided.placeholder}
              </div>;
            }}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Task;
