import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { spacialObject, SpacialObjectsInterface } from './types/types';

// const useSpacialObjectStore = create<SpacialObjectsInterface>()((set) => ({
//     spacialObject: {
//         title: 'X DESIGN',
//         object_image: 'imagen',
//         item: [{
//             image: 'sdfasd',
//             title: 'dfadfa',
//             description: 'dfasdf'
//         }],
//     },
//     setSpacialObject: (item: spacialObject) => set(() => ({ spacialObject: item })),
// }))

// export default useSpacialObjectStore;

const useSpacialObjectStore = create<SpacialObjectsInterface>()(
    persist(
        (set) => ({
        spacialObject: {
            title: 'X DESIGN',
            object_image: 'imagen',
            item: [{
            image: 'sdfasd',
            title: 'dfadfa',
            description: 'dfasdf',
            }],
        },
        setSpacialObject: (item: spacialObject) => set(() => ({ spacialObject: item })),
        }),
        {
            name: 'spacial-object-storage', // clave usada en localStorage
        }
    )
);

export default useSpacialObjectStore;