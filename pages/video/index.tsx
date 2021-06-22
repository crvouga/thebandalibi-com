import { GetStaticProps } from "next";
import {
  IVideoGalleryProps,
  VideoGallery,
} from "../../components/content/video/pages/video-gallery";
import { contentDataStore } from "@data-access";

export const getStaticProps: GetStaticProps<IVideoGalleryProps> = async () => {
  return {
    props: {
      settings: await contentDataStore.settings.get(),
      videoGalleries: await contentDataStore.videoGallery.getAll(),
    },
  };
};

export default VideoGallery;
