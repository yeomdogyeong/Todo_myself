import React, { ChangeEvent } from "react";
import { useState } from "react";

interface InputProps {
  onAddText: (text: string) => void;
}
export const Input: React.FC<InputProps> = ({ onAddText }) => {
  const [todoText, setTodoText] = useState<string>("");

  const handleTodo = (e: React.KeyboardEvent) => {
    //e.nativeEvent.isComposing는 True, false 총 두 번 동작하지만,
    //true는 동작중일때 나오고, False는 입력값이 끝나면 실행되기 때문에 false로 조건문을 걸어준다.
    if (e.key === "Enter" && todoText && e.nativeEvent.isComposing === false) {
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
      className="w-full p-4 m-6 rounded-lg shadow-sm bg-pink-100 outline-none"
      placeholder="Add my Todo"
      onChange={(e) => handleChangeEvent(e)}
      onKeyDown={(e) => handleTodo(e)}
      value={todoText}
    />
  );
};
