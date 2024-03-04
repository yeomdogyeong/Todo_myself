import React from "react";
import { ButtonTypeVoid } from "../type/tpye";

export const ActiveButton: React.FC<ButtonTypeVoid> = ({ onDo }) => {
  return (
    <button onClick={onDo} className="mr-2 border-2 p-1">
      active
    </button>
  );
};
