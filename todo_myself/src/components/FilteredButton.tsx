import React from "react";

interface FilteredButtonType {
  onAll: () => void;
  onActive: () => void;
  onCompleted: () => void;
}
export const FilteredButton: React.FC<FilteredButtonType> = ({
  onAll,
  onActive,
  onCompleted,
}) => {
  return (
    <>
      <button
        onClick={onAll}
        className="mr-2 p-1 border-2 rounded-full hover:bg-gray-200 active:scale-95 transform transition"
      >
        all
      </button>
      <button
        onClick={onActive}
        className="mr-2 p-1 border-2 rounded-full hover:bg-gray-200 active:scale-95 transform transition"
      >
        active
      </button>
      <button
        onClick={onCompleted}
        className="mr-2 p-1 border-2 rounded-full hover:bg-gray-200 active:scale-95 transform transition"
      >
        completed
      </button>
    </>
  );
};
