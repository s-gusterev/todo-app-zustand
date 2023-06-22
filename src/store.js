import { create } from 'zustand';

export const useTheme = create((set) => ({
  theme: 'light',
  toogleTheme: () =>
    set((state) => {
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    }),
}));
