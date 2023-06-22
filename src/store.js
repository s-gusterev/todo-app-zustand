import { create } from 'zustand';
import { nanoid } from 'nanoid';

export const useTheme = create((set) => ({
  theme: 'light',
  toogleTheme: () =>
    set((state) => {
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    }),
}));

export const useTodos = create((set, get) => ({
  todos: [
    { id: 1, title: 'Complete online JavaScript course', completed: true },
    { id: 2, title: 'Jog around the park 3x', completed: false },
    { id: 3, title: '10 minutes meditation', completed: false },
    { id: 4, title: 'Read for 1 hour', completed: false },
    { id: 5, title: 'Pick up groceries', completed: false },
    { id: 6, title: 'Complete Todo App on Frontend Mentor', completed: false },
  ],
  addTodo: (title) =>
    set((state) => {
      const newTodo = { title, completed: false, id: nanoid() };

      return { todos: [...state.todos, newTodo] };
    }),

  toogleTodo: (id) => {
    const { todos } = get();

    set({
      todos: todos.map((todo) =>
        id === todo.id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  },

  deleteTodo: (id) => {
    const { todos } = get();

    set({
      todos: todos.filter((todo) => todo.id !== id),
    });
  },
}));
