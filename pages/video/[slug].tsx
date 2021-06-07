import { dataStore } from "@data-access";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  IVideoGallerySingleProps,
  VideoGallerySingle,
} from "../../components/video/pages/video-gallery.single";

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
  const slug = context?.params?.slug?.toString();

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const videoGallery = await dataStore.videoGallery.getOne(slug);

  if (!videoGallery) {
    return {
      notFound: true,
    };
  }

  const relatedVideoGalleries = await dataStore.videoGallery.getAllRelated(
    slug
  );

  return {
    props: {
      settings: await dataStore.settings.get(),
      videoGallery,
      relatedVideoGalleries,
    },
  };
};

export default VideoGallerySingle;
