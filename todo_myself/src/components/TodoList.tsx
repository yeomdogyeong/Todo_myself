import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { TodoType } from "../type/tpye";

interface TodoListType {
  todos: TodoType[];
  onCheck: (idx: number) => void;
}

export const TodoList: React.FC<TodoListType> = ({ todos, onCheck }) => {
  return (
    <div className="w-full flex flex-col items-start justify-center">
      {todos.map((todo, idx) => (
        <div
          key={todo.id}
          onClick={() => onCheck(idx)}
          className="flex justify-between items-center w-full"
        >
          <div className="flex items-center">
            {todos[idx].completed === false ? (
              <>
                <MdOutlineCheckBoxOutlineBlank className="mr-2 cursor-pointer" />
                <div key={todo.id}>{todo.text}</div>
              </>
            ) : (
              <>
                <MdOutlineCheckBox className="mr-2 cursor-pointer" />
                <div key={todo.id} className="line-through">
                  {todo.text}
                </div>
              </>
            )}
          </div>
          <button className="border-2 ml-2">x</button>
        </div>
      ))}
    </div>
  );
};
