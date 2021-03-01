import { GetStaticProps } from "next";
import {
  IImageGalleryProps,
  ImageGallery,
} from "../../components/pages/image-gallery";
import { store } from "../../lib/store";

export const getStaticProps: GetStaticProps<IImageGalleryProps> = async () => {
  return {
    props: {
      settings: await store.settings.get(),
      imageGalleries: await store.imageGallery.getAll(),
    },
  };
};

export default ImageGallery;
