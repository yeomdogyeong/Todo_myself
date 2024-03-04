import React, { ChangeEvent } from "react";
import { useState } from "react";

interface InputProps {
  onAddText: (text: string) => void;
}
export const Input: React.FC<InputProps> = ({ onAddText }) => {
  const [todoText, setTodoText] = useState<string>("");

  const handleTodo = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && todoText) {
      onAddText(todoText);
      setTodoText("");
      e.preventDefault();
    }
  };

  const handleChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };
  return (
    <input
      className="w-full border-2"
      placeholder="click to write"
      onChange={(e) => handleChangeEvent(e)}
      onKeyDown={(e) => handleTodo(e)}
      value={todoText}
    />
  );
};
