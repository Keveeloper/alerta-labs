import { imageUrlMobileInterface } from "./types_mobile";

type ImageKey = keyof imageUrlMobileInterface;

export const ImagesUrlsMobile: imageUrlMobileInterface = {
    astronaut_mobile: '7c8d043e-0aac-4e56-fa44-a63ce7106400',
    station_mobole: '8a58e2ba-a362-4d7c-973e-3b7edf813e00',
    satellite_mobile: '6f431d1f-8806-43bc-64de-1412e1ee2a00',
    nebula_mobile: '5a606854-e3bc-42d5-91e7-0377bd61a600',
    cristal_mobile: 'cd1da9fe-1223-4ed3-d279-2769f6715800',
    home_background_mobile: '02651477-c0ce-45e1-963e-b354255a1400',
}

export const getImageUrlMobile = (imageValue: ImageKey) => `${import.meta.env.VITE_CDN_BASE_URL}${ImagesUrlsMobile[imageValue]}/public`;