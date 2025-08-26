import React from "react";

const ButtonGroup = ({ onAddTaskClick }) => {
  //  console.log(onAddTaskClick);

  return (
    <div className="flex justify-between gap-4 max-w-3xl m-5 mb-4">
      <button
        className="bg-white rounded-lg font-medium p-2 w-1/4 text-sm md:w-1/6"
        onClick={onAddTaskClick}
      >
        Add a new to-do
      </button>
      <div className="flex gap-4 w-3/4">
        <button className="bg-white rounded-lg p-2 flex-1 text-xs md:text-sm">
          All
        </button>
        <button className="bg-white rounded-lg p-2 flex-1 text-xs md:text-sm">
          To-do
        </button>
        <button className="bg-white rounded-lg p-2 flex-1 text-xs md:text-sm">
          Completed
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;
