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
        className=" p-2 border w-full hover:text-white active:scale-95 transform transition"
      >
        {buttonName}
      </button>
    </>
  );
};
