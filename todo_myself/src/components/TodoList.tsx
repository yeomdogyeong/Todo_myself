import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { TodoType } from "../type/type";

interface TodoListType {
  todos: TodoType[];
  onCheck: (idx: number) => void;
  onDelete: (id: number) => void;
}

export const TodoList: React.FC<TodoListType> = ({
  todos,
  onCheck,
  onDelete,
}) => {
  return (
    <div className="w-full flex flex-col items-start justify-center p-4 bg-pink-100">
      {todos.length === 0 ? (
        <div className="flex justify-between items-center w-full mb-2 p-2 bg-white rounded-lg shadow-md">
          <div className="flex justify-evenly items-center ">
            <MdOutlineCheckBoxOutlineBlank className="mr-4 cursor-pointer text-pink-500" />
            add your todo!
          </div>
          <button className="text-pink-500">x</button>
        </div>
      ) : (
        todos.map((todo, idx) => (
          <div
            key={todo.id}
            onClick={() => onCheck(idx)}
            className="flex justify-between items-center w-full mb-2 p-2 bg-white rounded-lg shadow-md"
          >
            <div className="flex justify-evenly items-center ">
              {todo.completed === false ? (
                <>
                  <MdOutlineCheckBoxOutlineBlank className="mr-4 cursor-pointer text-pink-500" />
                  <div key={todo.id} className="text-gray-700 text-[12px]">
                    {todo.text}
                  </div>
                </>
              ) : (
                <>
                  <MdOutlineCheckBox className="mr-4 cursor-pointer text-pink-500" />
                  <div
                    key={todo.id}
                    className="line-through text-gray-500 text-[10px]"
                  >
                    {todo.text}
                  </div>
                </>
              )}
            </div>
            <div className="flex space-x-4">
              <button className="text-[8px] ml-10 transition-transform duration-200 hover:scale-90 text-pink-500">
                click to detail
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(todo.id);
                }}
                className="mr-2 flex items-center justify-center opacity-25 hover:opacity-100 hover:text-red-500 transition duration-200 text-pink-500"
              >
                x
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
