import { GetStaticProps } from "next";
import { IVideoGalleryProps, VideoGallery } from "../components/pages/video";
import { dataStore } from "../lib/data-store";

export const getStaticProps: GetStaticProps<IVideoGalleryProps> = async () => {
  return {
    props: {
      tags: await dataStore.tag.getAll(),
      settings: await dataStore.settings.get(),
      initialVideos: await dataStore.video.getAll(),
    },
    revalidate: 1,
  };
};

export default VideoGallery;
