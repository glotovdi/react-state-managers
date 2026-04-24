import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useUsersZustandStore = create(
  combine({ user: 0, loading: false }, (set) => ({
    user: 0,
    increment: () => set((state) => ({ user: state.user + 1 })),
  })),
);
