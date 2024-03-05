import { useState } from "react";
import { TodoType } from "../type/tpye";
import { Input } from "./Input";
import { TodoFooter } from "./TodoFooter";
import { FilteredButton } from "./FilteredButton";
import { TodoList } from "./TodoList";

export const TodoComponent = () => {
  const [todoMenu, setTodoMenu] = useState<TodoType[]>([]);
  const [filterTodo, setFilterTodo] = useState<TodoType[] | null>(null);

  const addTodo = (text: string) => {
    setTodoMenu([
      ...todoMenu,
      { id: Date.now(), text: text, completed: false },
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

  const handleDelete = () => {
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

  const handleTodoDelete = (id: number) => {
    const newTodo = todoMenu.filter((item) => item.id !== id);
    setTodoMenu(newTodo);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Input onAddText={addTodo} />
      <div className="w-full flex flex-col items-start justify-center">
        <TodoList
          todos={filterTodo || todoMenu}
          onCheck={handleCheckBox}
          onDelete={handleTodoDelete}
        />
        <TodoFooter onDo={handleDelete} items={todoMenu} />

        <div className="relative flex justify-evenly items-evenly flex-row w-full px-4">
          <FilteredButton
            onAll={handleAllButton}
            onActive={handleActiveButton}
            onCompleted={handleCompletedButton}
          />
        </div>
      </div>
    </div>
  );
};
