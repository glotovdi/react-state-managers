import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useZustandStore = create(
  combine({ count: 0, loading: false }, (set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    setLoading: (loading: boolean) => set({ loading }),
  })),
);
