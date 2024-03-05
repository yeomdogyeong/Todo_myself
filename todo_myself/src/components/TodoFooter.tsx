import React from "react";
import { TodoType } from "../type/type";

export interface DeleteType {
  onDo: () => void;
  items: TodoType[];
}

export const TodoFooter: React.FC<DeleteType> = ({ onDo, items }) => {
  return (
    <div className="flex justify-between w-full px-4 text-sm">
      <span>
        {items.filter((item) => item.completed === false).length} item left!
      </span>
      <button className="border-2" onClick={onDo}>
        Clear component
      </button>
    </div>
  );
};
