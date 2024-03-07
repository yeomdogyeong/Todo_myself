import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
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
        <div>hi</div>
        <div className="flex justify-between items-center w-full mb-2 p-2 bg-white rounded-lg shadow-md">
          <div className="flex justify-evenly items-center">
            <MdOutlineCheckBoxOutlineBlank className="mr-4 cursor-pointer text-pink-500" />
            hover your mouse for tips!
          </div>
          <button className="text-pink-500">x</button>
        </div>
      </div>
    </div>
  );
};
