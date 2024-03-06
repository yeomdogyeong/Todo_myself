import React from "react";
import { TodoType } from "../type/type";

export interface DeleteType {
  onDo: () => void;
  items: TodoType[];
}

export const TodoFooter: React.FC<DeleteType> = ({ onDo, items }) => {
  return (
    <div className="flex justify-between items-center w-full p-4 text-sm bg-gray-200 ">
      <span className="">
        {items.filter((item) => item.completed === false).length} item left!
      </span>
      <button
        className="border-2 p-2 rounded-lg transition-all duration-200 ease-in-out hover:text-gray-500"
        onClick={onDo}
      >
        Clear component
      </button>
    </div>
  );
};
