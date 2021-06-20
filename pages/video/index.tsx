import { GetStaticProps } from "next";
import {
  IVideoGalleryProps,
  VideoGallery,
} from "../../components/content/video/pages/video-gallery";
import { dataStore } from "@data-access";

export const getStaticProps: GetStaticProps<IVideoGalleryProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      videoGalleries: await dataStore.videoGallery.getAll(),
    },
  };
};

export default VideoGallery;
