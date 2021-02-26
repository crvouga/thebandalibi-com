import { GetStaticPaths, GetStaticProps } from "next";
import {
  GallerySingle,
  IGallerySingleProps,
} from "../../components/templates/gallery.single";
import { cms } from "../../lib/cms";

export const getStaticPaths: GetStaticPaths = async () => {
  const galleries = await cms.getGalleries();

  const paths = galleries.map((gallery) => ({
    params: {
      slug: gallery.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IGallerySingleProps> = async (
  context
) => {
  const slug = context?.params?.slug?.toString() ?? "";

  const gallery = await cms.getSingleGallery(slug);

  if (gallery) {
    return {
      props: {
        platforms: await cms.getPlatforms(),
        gallery,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default GallerySingle;
