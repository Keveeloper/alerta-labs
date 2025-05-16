import { create } from 'zustand';

interface ModalStore {
  showheader: boolean;
  setShowHeader: (value: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  showheader: false,
  setShowHeader: (value) => set({ showheader: value }),
}));
