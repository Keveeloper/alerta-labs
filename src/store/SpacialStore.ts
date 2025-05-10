import { create } from 'zustand'

interface SpacialObjectsState {
  textHoovered: string;
  setTextHovered: (text: string) => void;
}

const useSpacialStore = create<SpacialObjectsState>()((set) => ({
    textHoovered: "[futurebit] Experimental TECH, yet essential",
    setTextHovered: (text: string) => set(() => ({ textHoovered: text })),
}))

export default useSpacialStore;

