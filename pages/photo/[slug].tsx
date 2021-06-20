import { GetStaticPaths, GetStaticProps } from "next";
import {
  IImageGallerySingleProps,
  ImageGallerySingle,
} from "../../components/content/image/image-gallery.single";
import { dataStore } from "@data-access";

export const getStaticPaths: GetStaticPaths = async () => {
  const imageGalleries = await dataStore.imageGallery.getAll();

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
  const slug = context?.params?.slug?.toString();

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const imageGallery = await dataStore.imageGallery.getOne(slug);

  if (!imageGallery) {
    return {
      notFound: true,
    };
  }

  const relatedImageGalleries = await dataStore.imageGallery.getAllRelated(
    slug
  );

  return {
    props: {
      settings: await dataStore.settings.get(),
      imageGallery,
      relatedImageGalleries,
    },
  };
};

export default ImageGallerySingle;
