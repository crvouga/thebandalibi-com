import { IImage } from "./image";

export type IHero = {
  title: string;
  mainImage: IImage;
  callToAction: {
    title: string;
    url: string;
  };
};
