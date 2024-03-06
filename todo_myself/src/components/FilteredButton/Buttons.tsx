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
        className="p-2 w-full rounded-lg shadow-sm bg-pink-100 hover:bg-pink-200 active:scale-95 transform transition text-gray-600"
      >
        {buttonName}
      </button>
    </>
  );
};
