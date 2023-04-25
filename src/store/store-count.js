import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 0,
  inCrease: () => set((state) => ({ count: state.count + 1 })),
  deCrease: () => set((state) => ({ count: state.count - 1 })),
}));
