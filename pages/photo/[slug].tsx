import { GetStaticPaths, GetStaticProps } from "next";
import {
  IImageGallerySingleProps,
  ImageGallerySingle,
} from "../../components/pages/image-gallery.single";
import { dataStore } from "../../lib/data-store";

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
  const slug = context?.params?.slug?.toString() ?? "";

  const relatedImageGalleries = await dataStore.imageGallery.getAllRelated(
    slug
  );
  const imageGallery = await dataStore.imageGallery.getOne(slug);

  if (imageGallery) {
    return {
      props: {
        settings: await dataStore.settings.get(),
        imageGallery,
        relatedImageGalleries,
      },
      revalidate: 1,
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default ImageGallerySingle;
