import { GetStaticProps } from "next";
import {
  IImageGalleryProps,
  ImageGallery,
} from "../../components/image/image-gallery";
import { dataStore } from "../../lib/data-access";

export const getStaticProps: GetStaticProps<IImageGalleryProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      imageGalleries: await dataStore.imageGallery.getAll(),
    },
  };
};

export default ImageGallery;
