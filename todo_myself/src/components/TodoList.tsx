import React, { useEffect, useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { TodoType } from "../type/type";
import { Modal } from "./modal/Modal";
import { debounce } from "lodash";
import { DummyTodo } from "./dummyTodo/DummyTodo";

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
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalChange, setModalChange] = useState<string>("dummy");

  const handleMouseHover = debounce(() => {
    setOpenModal(true);
  }, 900);

  const handleOnClick = () => {
    setOpenModal(true);
  };
  return (
    <div className="w-full flex flex-col items-start justify-center p-2 bg-pink-100">
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        type={modalChange}
      />
      {todos.length === 0 ? (
        <DummyTodo onHover={handleMouseHover} />
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            onClick={() => onCheck(todo.id)}
            className="flex justify-between items-center w-full mb-2 p-2 bg-white shadow-md"
          >
            <div className="flex justify-evenly items-center ">
              {todo.completed === false ? (
                <>
                  <MdOutlineCheckBoxOutlineBlank className="mr-4 cursor-pointer text-pink-500" />
                  <div key={todo.id} className="text-gray-700 text-[12px]">
                    {todo.text.length > 10
                      ? todo.text.substring(0, 9) + "..."
                      : todo.text}
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
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  //여기서 todomodal꺼내와야함
                  setModalChange("todo");
                  handleOnClick();
                }}
                className="text-[8px] ml-10 transition-transform duration-200 hover:scale-90 text-pink-500"
              >
                click to detail
              </button>
              <button
                onClick={(e) => {
                  //이벤트 버블링 중단
                  //삭제 버튼이 포함되어 있는 해당 Div의 클릭이벤트를 옮기지 않고, 버튼에 국한한다.
                  //onDelete만 실행, onCheck는 실행 X
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
