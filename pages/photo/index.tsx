import { GetStaticProps } from "next";
import {
  IImageGalleryProps,
  ImageGallery,
} from "../../components/content/image/image-gallery";
import { content } from "@data-access";

export const getStaticProps: GetStaticProps<IImageGalleryProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      imageGalleries: await content.imageGallery.getAll(),
    },
  };
};

export default ImageGallery;
