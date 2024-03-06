import React from "react";

interface FilteredButtonType {
  onDo: () => void;
  buttonName: string;
}
export const Buttons: React.FC<FilteredButtonType> = ({ onDo, buttonName }) => {
  return (
    <>
      <button
        onClick={onDo}
        className="mr-2 p-1 border-2 rounded-full hover:bg-gray-200 active:scale-95 transform transition"
      >
        {buttonName}
      </button>
    </>
  );
};
