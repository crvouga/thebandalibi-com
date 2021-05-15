import { GetStaticPaths, GetStaticProps } from "next";
import {
  IVideoGallerySingleProps,
  VideoGallerySingle,
} from "../../components/video/pages/video-gallery.single";
import { dataStore } from "@core";

export const getStaticPaths: GetStaticPaths = async () => {
  const videoGalleries = await dataStore.videoGallery.getAll();

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

  const relatedVideoGalleries = await dataStore.videoGallery.getAllRelated(
    slug
  );

  const videoGallery = await dataStore.videoGallery.getOne(slug);

  if (videoGallery) {
    return {
      props: {
        settings: await dataStore.settings.get(),
        videoGallery,
        relatedVideoGalleries,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default VideoGallerySingle;
