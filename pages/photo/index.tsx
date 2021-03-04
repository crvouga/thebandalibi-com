import { GetStaticProps } from "next";
import {
  IImageGalleryProps,
  ImageGallery,
} from "../../components/pages/image-gallery";
import { dataStore } from "../../lib/data-store";

export const getStaticProps: GetStaticProps<IImageGalleryProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      imageGalleries: await dataStore.imageGallery.getAll(),
    },
  };
};

export default ImageGallery;
