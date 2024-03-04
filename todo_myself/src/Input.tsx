import { ChangeEvent, useEffect, useState } from "react";
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
  const [filterTodo, setFilterTodo] = useState<TodoType[] | null>(null);

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

  const handleDeleteButton = () => {
    setTodoMenu([]);
  };

  const handleActiveButton = () => {
    const activeTodo = todoMenu.filter((item) => item.completed === false);
    setFilterTodo(activeTodo);
  };

  const handleCompletedButton = () => {
    const completedTodo = todoMenu.filter((item) => item.completed !== false);
    setFilterTodo(completedTodo);
  };

  const handleAllButton = () => {
    setFilterTodo(null);
  };

  useEffect(() => {}, [todoMenu]);

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
        {filterTodo
          ? filterTodo.map((item) =>
              item.completed !== false ? (
                <span
                  className="flex justify-start items-center line-through"
                  key={item.id}
                >
                  <MdOutlineCheckBox className="mr-2 cursor-pointer" />
                  {item.text}
                </span>
              ) : (
                <span className="flex justify-start items-center" key={item.id}>
                  <MdOutlineCheckBoxOutlineBlank className="mr-2 cursor-pointer" />
                  {item.text}
                </span>
              )
            )
          : todoMenu.map((todo, idx) => (
              <div
                key={todo.id}
                onClick={() => handleCheckBox(idx)}
                className="flex justify-start items-center"
              >
                {todoMenu[idx].completed === false ? (
                  <>
                    <MdOutlineCheckBoxOutlineBlank className="mr-2 cursor-pointer" />
                    <div key={todo.id}>{todo.text}</div>
                  </>
                ) : (
                  <>
                    <MdOutlineCheckBox className="mr-2 cursor-pointer" />
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
          <button className="border-2" onClick={handleDeleteButton}>
            Clear component
          </button>
        </div>

        <div className="relative flex justify-evenly items-evenly flex-row w-full px-4">
          <button onClick={handleAllButton} className="mr-2 border-2 p-1">
            all
          </button>
          <button onClick={handleActiveButton} className="mr-2 border-2 p-1">
            active
          </button>
          <button onClick={handleCompletedButton} className="mr-2 border-2 p-1">
            completed
          </button>
        </div>
      </div>
    </div>
  );
};
