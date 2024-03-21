import React from "react";
import { useTodoStore } from "../../store/useTodoStore";

interface TodoModalType {
  selectedId: number | null;
}

export const TodoModal: React.FC<TodoModalType> = ({ selectedId }) => {
  const { todo } = useTodoStore();
  //받아온 Id가 selectedId
  const selectedTodo = todo.filter((el) => el.id === selectedId);

  return (
    //받아와야할것 : todo
    <div className="flex flex-col justify-center items-center w-1/2 h-1/3 mb-2 p-2 bg-white rounded-lg shadow-md">
      {selectedTodo.map((el) => (
        <div key={el.id}>{el.text}</div>
      ))}
    </div>
  );
};
