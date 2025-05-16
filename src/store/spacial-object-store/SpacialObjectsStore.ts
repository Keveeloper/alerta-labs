import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { spacialObject, SpacialObjectsInterface } from './types/types';
import { spacialObjectsData } from '../../modules/home/spacial-objects/spacial-objects-data';

const initialState = spacialObjectsData.nebula;

const useSpacialObjectStore = create<SpacialObjectsInterface>()(
    persist(
        (set) => ({
            spacialObject: initialState,
            setSpacialObject: (item: spacialObject) => set(() => ({ spacialObject: item })),
        }),
        {
            name: 'spacial-object-storage', // clave usada en localStorage
        }
    )
);

export default useSpacialObjectStore;