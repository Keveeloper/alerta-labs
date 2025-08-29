import { create } from 'zustand'

interface SpacialObjectsState {
  homeTitle: string;
  setHomeTitle: (title: string) => void;
  textHoovered: string;
  setTextHovered: (text: string) => void;
}

const useSpacialStore = create<SpacialObjectsState>()((set) => ({
    homeTitle: "EXPLORE THE UNIVERSE",
    textHoovered: "[ALERTA SERVICES] UNIVERSE OF CAPABILITIES_",
    setHomeTitle: (title: string) => set(() => ({ homeTitle: title })),
    setTextHovered: (text: string) => set(() => ({ textHoovered: text })),
}))

export default useSpacialStore;

