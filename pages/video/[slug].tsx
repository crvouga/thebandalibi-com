import { GetStaticPaths, GetStaticProps } from "next";
import {
  IVideoGallerySingleProps,
  VideoGallerySingle,
} from "../../components/templates/video-gallery.single";
import { store } from "../../lib/store";

export const getStaticPaths: GetStaticPaths = async () => {
  const videoGalleries = await store.videoGallery.getAll();

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

  const videoGallery = await store.videoGallery.getOne(slug);

  if (videoGallery) {
    return {
      props: {
        platforms: await store.platform.getAll(),
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
