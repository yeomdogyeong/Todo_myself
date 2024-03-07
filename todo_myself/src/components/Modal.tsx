import React from "react";

interface ModalProps {
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ content, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="z-10 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-2">Modal Title</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
