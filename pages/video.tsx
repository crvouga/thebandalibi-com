import { GetStaticProps } from "next";
import { IVideoGalleryProps, VideoGallery } from "../components/video/video";
import { dataStore } from "../lib/data-access";

export const getStaticProps: GetStaticProps<IVideoGalleryProps> = async () => {
  return {
    props: {
      tags: await dataStore.tag.getAll(),
      settings: await dataStore.settings.get(),
      initialVideos: await dataStore.video.getAll(),
    },
  };
};

export default VideoGallery;
