import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { DummyTodo } from "../dummyTodo/DummyTodo";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="z-10 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="flex flex-col justify-between items-center w-1/2 mb-2 p-2 bg-white rounded-lg shadow-md">
        <div className="flex justify-start w-full ml-4 text-[8px] mb-2">
          완료하면 체크할 수 있습니다!
        </div>
        <div className="flex justify-start w-full ml-3">
          <FaArrowUp />
        </div>
        <div className="flex justify-end w-1/2 ml-4 mb-2">
          <span className="text-[8px] mr-2">
            클릭하면 상세페이지를 보여줍니다
          </span>
          <FaArrowUp />
        </div>
        <DummyTodo />
        <div className="flex justify-end w-full mr-2">
          <FaArrowDown />
        </div>
        <div className="flex justify-end w-full text-[8px] mt-2">
          할 일을 삭제할 수 있습니다
        </div>
      </div>
    </div>
  );
};
