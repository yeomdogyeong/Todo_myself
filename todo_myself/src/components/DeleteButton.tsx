import React from "react";
import { ButtonTypeVoid } from "../type/tpye";

export const DeleteButton: React.FC<ButtonTypeVoid> = ({ onDo }) => {
  return (
    <button className="border-2" onClick={onDo}>
      Clear component
    </button>
  );
};
