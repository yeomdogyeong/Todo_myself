import { useState } from "react";
import { TodoType } from "../type/type";
import { Input } from "./Input";
import { TodoFooter } from "./TodoFooter";
import { Buttons } from "./FilteredButton/Buttons";
import { TodoList } from "./TodoList";
import { useTodoStore } from "../store/useTodoStore";
export const TodoComponent = () => {
  const [filterTodo, setFilterTodo] = useState<TodoType[] | null>(null);
  const { todo, addTodo, clearTodo, deleteTodo, checkTodo } = useTodoStore();

  const handleActiveButton = () => {
    const activeTodo = todo.filter((item) => item.completed === false);
    setFilterTodo(activeTodo);
  };

  const handleCompletedButton = () => {
    const completedTodo = todo.filter((item) => item.completed !== false);
    setFilterTodo(completedTodo);
  };

  const handleAllButton = () => {
    setFilterTodo(null);
  };

  return (
    <div className="w-1/3 flex flex-col justify-center items-center">
      <Input onAddText={addTodo} />
      <div className="w-full flex flex-col items-center justify-center">
        <TodoList
          todos={filterTodo || todo}
          onCheck={checkTodo}
          onDelete={deleteTodo}
        />
        <TodoFooter onDo={clearTodo} items={todo} />

        <div className="relative flex justify-evenly items-evenly flex-row w-full px-4">
          <Buttons onDo={handleAllButton} buttonName="all" />
          <Buttons onDo={handleActiveButton} buttonName="active" />
          <Buttons onDo={handleCompletedButton} buttonName="completed" />
        </div>
      </div>
    </div>
  );
};
