import { useState } from "react";
import { TodoType } from "../type/type";
import { Input } from "./Input";
import { TodoFooter } from "./TodoFooter";
import { Buttons } from "./FilteredButton/Buttons";
import { TodoList } from "./TodoList";
import { useTodoStore } from "../store/useTodoStore";
export const TodoComponent = () => {
  // const [filterTodo, setFilterTodo] = useState<TodoType[] | null>(null);
  const {
    todo,
    addTodo,
    clearTodo,
    deleteTodo,
    checkTodo,
    handleActive,
    handleAll,
    handleComplete,
    filterTodo,
  } = useTodoStore();

  // const handleActiveButton = () => {
  //   const activeTodo = todo.filter((item) => item.completed === false);
  //   setFilterTodo(activeTodo);
  // };

  // const handleCompletedButton = () => {
  //   const completedTodo = todo.filter((item) => item.completed !== false);
  //   setFilterTodo(completedTodo);
  // };
  // console.log(filterTodo);
  // const handleAllButton = () => {
  //   setFilterTodo(null);
  // };

  const now = new Date();
  const time = `${now.getFullYear()}년${
    now.getMonth() + 1
  }월${now.getDate()}일${now.getHours()}시${now.getMinutes()}분`;

  return (
    <div className="bg-gray-100 p-4 w-1/2 flex flex-col justify-between items-center min-h-screen">
      <div className="w-full flex flex-col justify-between items-center">
        <Input onAddText={addTodo} />
        <TodoList
          todos={filterTodo || todo}
          onCheck={checkTodo}
          onDelete={deleteTodo}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <TodoFooter onDo={clearTodo} items={todo} />
        <div className="bg-pink-100 flex justify-evenly items-evenly w-full mb-4">
          <Buttons onDo={handleAll} buttonName="all" />
          <Buttons onDo={handleActive} buttonName="active" />
          <Buttons onDo={handleComplete} buttonName="completed" />
        </div>
      </div>
    </div>
  );
};
