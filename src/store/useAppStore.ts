import { create } from 'zustand';

type AppState = {
  booted: boolean;
  markBooted: () => void;
};

export const useAppStore = create<AppState>()((set) => ({
  booted: false,
  markBooted: () => set({ booted: true }),
}));
