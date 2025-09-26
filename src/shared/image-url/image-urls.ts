import { imageUrlInterface } from "./types";

type ImageKey = keyof imageUrlInterface;

export const ImagesUrls: imageUrlInterface = {
    homeBackground: "67101712-efc2-4dcf-3bea-0fbafde64f00",
    station: '1cd060bc-6e36-4286-3d92-234765af0300',
    satellite: '4667d586-b939-47bb-4a00-312799925e00',
    nebula: '843780a4-94af-4d9e-6e5f-c101aa487800',
    nebulaHighlighted: 'a7fdfdbc-9728-4d11-ac67-a0ff7eebe600',
    cristal: 'c86ffcab-84fb-4f9c-401b-7eb5d2a69900',
    asteroid: '0f85095f-b206-4f45-b4aa-ca5575d50b00',
    astronaut: 'a3980ff6-3869-4b3c-1340-366c8e145000',
    vignette: 'd2a95ff8-65a1-439b-cc90-ded1b8d0aa00',
    flip_camera_icon: 'a9236d92-b3a0-4ab7-a465-67cfea970f00',
}

export const getImageUrl = (imageValue: ImageKey) => `${import.meta.env.VITE_CDN_BASE_URL}${ImagesUrls[imageValue]}/public`;