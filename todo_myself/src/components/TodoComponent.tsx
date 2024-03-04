import { useEffect, useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { TodoType } from "../type/tpye";
import { Input } from "./Input";

export const TodoComponent = () => {
  const [todoMenu, setTodoMenu] = useState<TodoType[]>([]);
  const [filterTodo, setFilterTodo] = useState<TodoType[] | null>(null);

  const addTodo = (text: string) => {
    setTodoMenu([
      ...todoMenu,
      { id: todoMenu.length, text: text, completed: false },
    ]);
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
      <Input onAddText={addTodo} />
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
