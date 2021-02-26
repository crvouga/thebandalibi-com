import { GetStaticPaths, GetStaticProps } from "next";
import {
  IVideoGallerySingleProps,
  VideoGallerySingle,
} from "../../components/templates/video-gallery.single";
import { cms } from "../../lib/cms";

export const getStaticPaths: GetStaticPaths = async () => {
  const videoGalleries = await cms.getVideoGalleries();

  const paths = videoGalleries.map((videoGallery) => ({
    params: {
      slug: videoGallery.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IVideoGallerySingleProps> = async (
  context
) => {
  const slug = context?.params?.slug?.toString() ?? "";

  const videoGallery = await cms.getSingleVideoGallery(slug);

  if (videoGallery) {
    return {
      props: {
        platforms: await cms.getPlatforms(),
        videoGallery,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default VideoGallerySingle;
