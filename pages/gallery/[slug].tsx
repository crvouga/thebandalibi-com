import { GetStaticPaths, GetStaticProps } from "next";
import "react-photoswipe/lib/photoswipe.css";
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

  const gallery = await cms.getGallery(slug);

  if (gallery) {
    return {
      props: {
        socialMedia: await cms.getSocialMedia(),
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
