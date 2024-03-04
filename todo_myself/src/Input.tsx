import { ChangeEvent, useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

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
    return newCompleted;
  };

  const handleChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <>
      <input
        className="border-2 w-[200px]"
        placeholder="click to write"
        onChange={(e) => handleChangeEvent(e)}
        onKeyDown={(e) => handleTodo(e)}
        value={todoText}
      />
      <div className="w-[200px]">
        {todoMenu.map((todo, idx) => (
          <div
            key={todo.id}
            onClick={() => handleCheckBox(idx)}
            className="flex justify-start items-center"
          >
            {todoMenu[idx].completed === false ? (
              <>
                <MdOutlineCheckBoxOutlineBlank className="mr-2 cursor-pointer" />{" "}
                <div>{todo.text}</div>
              </>
            ) : (
              <div>hi</div>
            )}
          </div>
        ))}
        <span>남은갯수:</span>
        <div className="flex flex-row">
          <span className="mr-2">all:</span>
          <span className="mr-2">active:</span>
          <span className="mr-2">completed:</span>
        </div>
      </div>
    </>
  );
};
