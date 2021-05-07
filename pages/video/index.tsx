import { GetStaticProps } from "next";
import {
  IVideoGalleryProps,
  VideoGallery,
} from "../../components/video/video-gallery";
import { dataStore } from "@core";

export const getStaticProps: GetStaticProps<IVideoGalleryProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      videoGalleries: await dataStore.videoGallery.getAll(),
    },
  };
};

export default VideoGallery;
