import { create } from "zustand";
import { TodoType } from "../type/type";

interface TodoStore {
  todo: TodoType[];
  filterTodo: TodoType[] | null;
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  clearTodo: () => void;
  checkTodo: (id: number) => void;
  handleActive: () => void;
  handleComplete: () => void;
  handleAll: () => void;
  filterStatus: "all" | "active" | "completed";
}

export const useTodoStore = create<TodoStore>((set) => ({
  todo: [],
  filterTodo: null,
  filterStatus: "all",

  addTodo: (text: string) => {
    set((state) => ({
      todo: [...state.todo, { id: Date.now(), text: text, completed: false }],
    }));
  },

  deleteTodo: (id: number) =>
    set((state) => ({
      todo: state.todo.filter((item) => item.id !== id),
    })),

  clearTodo: () => set({ todo: [] }),

  checkTodo: (id: number) => {
    set((state) => {
      const newTodo = state.todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      let newFilterTodo = null;
      if (state.filterStatus === "active") {
        newFilterTodo = newTodo.filter((item) => item.completed === false);
      } else if (state.filterStatus === "completed") {
        newFilterTodo = newTodo.filter((item) => item.completed !== false);
      }

      return { todo: newTodo, filterTodo: newFilterTodo };
    });
  },

  handleActive: () => {
    set((state) => {
      const activeTodo = state.todo.filter((item) => item.completed === false);
      return { filterTodo: activeTodo, filterStatus: "active" };
    });
  },

  handleComplete: () => {
    set((state) => {
      const completedTodo = state.todo.filter(
        (item) => item.completed !== false
      );
      return { filterTodo: completedTodo, filterStatus: "completed" };
    });
  },

  handleAll: () => {
    set((state) => {
      return { filterTodo: state.todo, filterStatus: "all" };
    });
  },
}));
