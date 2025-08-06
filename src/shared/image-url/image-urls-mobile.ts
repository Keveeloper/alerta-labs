import { imageUrlMobileInterface } from "./types_mobile";

type ImageKey = keyof imageUrlMobileInterface;

export const ImagesUrlsMobile: imageUrlMobileInterface = {
    astronaut_mobile: '7c8d043e-0aac-4e56-fa44-a63ce7106400',
}

export const getImageUrlMobile = (imageValue: ImageKey) => `${import.meta.env.VITE_CDN_BASE_URL}${ImagesUrlsMobile[imageValue]}/public`;