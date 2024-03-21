import React from "react";
import { useTodoStore } from "../../store/useTodoStore";
export const TodoModal = () => {
  const { todo } = useTodoStore();

  return (
    //받아와야할것 : todo
    <div className="flex flex-col justify-center items-center w-1/2 h-1/3 mb-2 p-2 bg-white rounded-lg shadow-md">
      {todo.map((el) => el.text)}
    </div>
  );
};
