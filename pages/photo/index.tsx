import { GetStaticProps } from "next";
import {
  IImageGalleryProps,
  ImageGallery,
} from "../../components/content/image/image-gallery";
import { contentDataStore } from "@data-access";

export const getStaticProps: GetStaticProps<IImageGalleryProps> = async () => {
  return {
    props: {
      settings: await contentDataStore.settings.get(),
      imageGalleries: await contentDataStore.imageGallery.getAll(),
    },
  };
};

export default ImageGallery;
