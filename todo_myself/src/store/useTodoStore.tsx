import { create } from "zustand";
import { TodoType } from "../type/type";

interface TodoStore {
  todo: TodoType[];
  filterTodo: TodoType[] | null;
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  clearTodo: () => void;
  checkTodo: (idx: number) => void;
  handleActive: () => void;
  handleComplete: () => void;
  handleAll: () => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todo: [],
  filterTodo: null,
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
      return { todo: newTodo, filterTodo: newTodo };
    });
  },
  handleActive: () => {
    set((state) => {
      const activeTodo = state.todo.filter((item) => item.completed === false);
      return { filterTodo: activeTodo };
    });
  },
  handleComplete: () => {
    set((state) => {
      const completedTodo = state.todo.filter(
        (item) => item.completed !== false
      );
      return { filterTodo: completedTodo };
    });
  },
  handleAll: () => {
    set({ filterTodo: null });
  },
}));
