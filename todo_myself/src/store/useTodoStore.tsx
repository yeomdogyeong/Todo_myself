import { create } from "zustand";
import { TodoType } from "../type/type";

interface TodoStore {
  todo: TodoType[];
  addTodo: (text: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todo: [],
  addTodo: (text: string) => {
    set((state) => ({
      todo: [...state.todo, { id: Date.now(), text: text, completed: false }],
    }));
  },
}));
