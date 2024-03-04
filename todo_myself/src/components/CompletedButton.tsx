import React from "react";
import { ButtonTypeVoid } from "../type/tpye";

export const CompletedButton: React.FC<ButtonTypeVoid> = ({ onDo }) => {
  return (
    <button onClick={onDo} className="mr-2 border-2 p-1">
      completed
    </button>
  );
};
