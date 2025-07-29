export interface listPagesType {
  number: string;
  name: string;
  link: string;
}
export interface MobileNevbarType {
  isOpen: boolean;
  fuClose: () => void;
  listPages: listPagesType[];
  urlPage:string;
}

export interface dataDestinationsType {
  name: string;
  images: imagesType;
  description: string;
  distance:string;
  travel: string;
}
interface imagesType{
  png:string
  webp:string
}
export interface dataCrewType {
  name: string;
  images: imagesType;
  role:string
  bio:string
}
export interface dataTechnologyType {
  name: string;
  description: string;
  images: {
    portrait: string;
    landscape:string;
  };
}