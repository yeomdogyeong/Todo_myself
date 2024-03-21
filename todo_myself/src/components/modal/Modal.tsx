import React from "react";
import { DummyModal } from "./DummyModal";
import { TodoModal } from "./TodoModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  selectedId: number | null;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  type,
  selectedId,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="z-10 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      {type === "dummy" ? (
        <DummyModal />
      ) : (
        <TodoModal selectedId={selectedId} />
      )}
    </div>
  );
};
