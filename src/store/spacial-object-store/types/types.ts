export interface spacialObject {
    title: string;
    object_image: string;
    height: string;
    item: spacialItem[];
}

export interface spacialItem {
    image: string;
    fontSize: string;
    title: string;
    isColumn: boolean;
    description: string;
}

export interface SpacialObjectsInterface {
  spacialObject: spacialObject;
  setSpacialObject: (item: spacialObject) => void;
}