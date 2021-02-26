import { GetStaticPaths, GetStaticProps } from "next";
import {
  IImageGallerySingleProps,
  ImageGallerySingle,
} from "../../components/templates/image-gallery.single";
import { store } from "../../lib/store";

export const getStaticPaths: GetStaticPaths = async () => {
  const imageGalleries = await store.imageGallery.getAll();

  const paths = imageGalleries.map((imageGallery) => ({
    params: {
      slug: imageGallery.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IImageGallerySingleProps> = async (
  context
) => {
  const slug = context?.params?.slug?.toString() ?? "";

  const imageGallery = await store.imageGallery.getOne(slug);

  if (imageGallery) {
    return {
      props: {
        platforms: await store.platform.getAll(),
        imageGallery,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default ImageGallerySingle;
