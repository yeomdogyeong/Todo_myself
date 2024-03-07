import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

interface DummyTodoType {
  onHover?: () => void;
}

export const DummyTodo: React.FC<DummyTodoType> = ({ onHover }) => {
  return (
    <div className="flex justify-between items-center w-full mb-2 p-2 bg-white rounded-lg shadow-md">
      <div className="flex justify-evenly items-center" onMouseEnter={onHover}>
        <MdOutlineCheckBoxOutlineBlank className="mr-4 cursor-pointer text-pink-500" />
        hover your mouse for tips!
      </div>
      <button className="text-pink-500">x</button>
    </div>
  );
};
