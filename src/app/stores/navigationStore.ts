import { create } from 'zustand';

interface NavigationStore {
  active: string;
  setActive: (active: string) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  active: 'about',
  setActive: (active: string) => set({ active }),
}));