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
              //이벤트 버블링 중단
              //삭제 버튼이 포함되어 있는 해당 Div의 클릭이벤트를 옮기지 않고, 버튼에 국한한다.
              //onDelete만 실행, onCheck는 실행 X
              e.stopPropagation();
              onDelete(todo.id);
            }}
            className="flex items-center justify-center w-1/3 h-5 opacity-0 hover:opacity-100 hover:text-red-500 transition duration-200"
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};
