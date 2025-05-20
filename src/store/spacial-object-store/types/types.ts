export interface spacialObject {
    title: string;
    object_image: string;
    item: spacialItem[];
}

export interface spacialItem {
    image: string;
    title: string;
    description: string;
}

export interface SpacialObjectsInterface {
  spacialObject: spacialObject;
  setSpacialObject: (item: spacialObject) => void;
}