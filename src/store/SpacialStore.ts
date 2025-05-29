import { create } from 'zustand'

interface SpacialObjectsState {
  textHoovered: string;
  setTextHovered: (text: string) => void;
}

const useSpacialStore = create<SpacialObjectsState>()((set) => ({
    textHoovered: "[ALERTA SERVICES] universe of capabilities_",
    setTextHovered: (text: string) => set(() => ({ textHoovered: text })),
}))

export default useSpacialStore;

