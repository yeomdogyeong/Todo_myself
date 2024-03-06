import { create } from "zustand";
import { TodoType } from "../type/type";

interface TodoStore {
  todo: TodoType[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  clearTodo: () => void;
  checkTodo: (idx: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todo: [],
  addTodo: (text: string) => {
    set((state) => ({
      todo: [...state.todo, { id: Date.now(), text: text, completed: false }],
    }));
  },
  deleteTodo: (id: number) =>
    set((state) => ({ todo: state.todo.filter((item) => item.id !== id) })),
  clearTodo: () => set({ todo: [] }),
  checkTodo: (idx: number) => {
    set((state) => {
      const newTodo = [...state.todo];
      newTodo[idx] = {
        ...newTodo[idx],
        completed: !newTodo[idx].completed,
      };
      return { todo: newTodo };
    });
  },
}));
