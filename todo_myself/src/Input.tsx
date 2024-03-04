import { ChangeEvent, useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";

interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

export const Input = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoMenu, setTodoMenu] = useState<TodoType[]>([]);

  const handleTodo = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && todoText) {
      setTodoMenu([
        ...todoMenu,
        { id: todoMenu.length, text: todoText, completed: false },
      ]);
      setTodoText("");
      e.preventDefault();
    }
  };
  console.log(todoMenu);
  const handleCheckBox = (idx: number) => {
    console.log("click");
    const newCompleted = [...todoMenu];
    newCompleted[idx] = {
      id: todoMenu[idx].id,
      text: todoMenu[idx].text,
      completed: !todoMenu[idx].completed,
    };
    setTodoMenu(newCompleted);
  };

  const handleChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <input
        className="w-full border-2"
        placeholder="click to write"
        onChange={(e) => handleChangeEvent(e)}
        onKeyDown={(e) => handleTodo(e)}
        value={todoText}
      />
      <div className="w-full flex flex-col items-start justify-center">
        {todoMenu.map((todo, idx) => (
          <div
            key={todo.id}
            onClick={() => handleCheckBox(idx)}
            className="flex justify-start items-center"
          >
            {todoMenu[idx].completed === false ? (
              <>
                <MdOutlineCheckBoxOutlineBlank className="mr-2 cursor-pointer" />{" "}
                <div key={todo.id}>{todo.text}</div>
              </>
            ) : (
              <>
                <MdOutlineCheckBox className="mr-2 cursor-pointer" />{" "}
                <div key={todo.id} className="line-through">
                  {todo.text}
                </div>
              </>
            )}
          </div>
        ))}
        <div className="flex justify-between w-full px-4 text-sm">
          <span>
            {todoMenu.filter((item) => item.completed === false).length} item
            left!
          </span>
          <button>Clear component</button>
        </div>

        <div className="relative flex justify-evenly items-evenly flex-row w-full px-4">
          <button className="mr-2 border-2 p-1">all</button>
          <button className="mr-2 border-2 p-1">active</button>
          <button className="mr-2 border-2 p-1">completed</button>
        </div>
      </div>
    </div>
  );
};
