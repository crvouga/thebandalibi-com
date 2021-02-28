import { GetStaticProps } from "next";
import {
  IVideoGalleryProps,
  VideoGallery,
} from "../../components/templates/video-gallery";
import { store } from "../../lib/store";

export const getStaticProps: GetStaticProps<IVideoGalleryProps> = async () => {
  return {
    props: {
      settings: await store.settings.get(),
      videoGalleries: await store.videoGallery.getAll(),
    },
  };
};

export default VideoGallery;
