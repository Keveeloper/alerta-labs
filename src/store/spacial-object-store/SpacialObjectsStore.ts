import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SpacialObjectsInterface } from './types/types';

// const initialState = spacialObjectsData.nebula;
const initialStateKey = 'nebula';

const useSpacialObjectStore = create<SpacialObjectsInterface>()(
    persist(
        (set) => ({
            // spacialObject: initialState,
            // setSpacialObject: (item: spacialObject) => set(() => ({ spacialObject: item })),
            spacialObjectKey: initialStateKey,
            setSpacialObjectKey: (key: string) => set(() => ({ spacialObjectKey: key })),
        }),
        {
            name: 'spacial-object-storage', // clave usada en localStorage
        }
    )
);

export default useSpacialObjectStore;