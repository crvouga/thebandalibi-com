import { GetStaticProps } from "next";
import {
  IVideoGalleryProps,
  VideoGallery,
} from "../../components/templates/video-gallery";
import { store } from "../../lib/store";

export const getStaticProps: GetStaticProps<IVideoGalleryProps> = async () => {
  return {
    props: {
      platforms: await store.platform.getAll(),
      videoGalleries: await store.videoGallery.getAll(),
    },
  };
};

export default VideoGallery;
