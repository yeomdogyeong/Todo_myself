import React from "react";

interface DeleteButtonType {
  onDelete: () => void;
}

export const DeleteButton: React.FC<DeleteButtonType> = ({ onDelete }) => {
  return (
    <button className="border-2" onClick={onDelete}>
      Clear component
    </button>
  );
};
