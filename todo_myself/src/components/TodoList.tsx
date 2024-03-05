import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { TodoType } from "../type/tpye";

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
    <div className="w-full flex flex-col items-start justify-center p-4 bg-gray-100">
      {todos.map((todo, idx) => (
        <div
          key={todo.id}
          onClick={() => onCheck(idx)}
          className="flex justify-between items-center w-full mb-2 p-2 bg-white rounded shadow"
        >
          <div className="flex items-center">
            {todos[idx].completed === false ? (
              <>
                <MdOutlineCheckBoxOutlineBlank className="mr-2 cursor-pointer text-blue-500" />
                <div key={todo.id} className="text-gray-700">
                  {todo.text}
                </div>
              </>
            ) : (
              <>
                <MdOutlineCheckBox className="mr-2 cursor-pointer text-blue-500" />
                <div key={todo.id} className="line-through text-gray-500">
                  {todo.text}
                </div>
              </>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(todo.id);
            }}
            className="flex items-center justify-end ml-2 w-1/2 h-5 opacity-0 hover:opacity-100 hover:text-red-500 transition duration-200"
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};
