import { IImage } from "./image";

export type IHero = {
  title: string;
  mainImage: IImage;
  backgroundImage: IImage;
  callToAction: {
    title: string;
    url: string;
  };
};
