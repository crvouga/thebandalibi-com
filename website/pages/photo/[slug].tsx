import { GetStaticPaths, GetStaticProps } from "next";
import {
  IImageGallerySingleProps,
  ImageGallerySingle,
} from "../../components/content/pages/image-gallery.single";
import { content } from "@data-access";

export const getStaticPaths: GetStaticPaths = async () => {
  const imageGalleries = await content.imageGallery.getAll();

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

  const imageGallery = await content.imageGallery.getOne(slug);

  if (!imageGallery) {
    return {
      notFound: true,
    };
  }

  const relatedImageGalleries = await content.imageGallery.getAllRelated(slug);

  return {
    props: {
      settings: await content.settings.get(),
      imageGallery,
      relatedImageGalleries,
    },
  };
};

export default ImageGallerySingle;
