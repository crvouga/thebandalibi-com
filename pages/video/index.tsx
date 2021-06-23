import { GetStaticProps } from "next";
import {
  IVideoGalleryProps,
  VideoGallery,
} from "../../components/content/video/video-gallery";
import { content } from "@data-access";

export const getStaticProps: GetStaticProps<IVideoGalleryProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      videoGalleries: await content.videoGallery.getAll(),
    },
  };
};

export default VideoGallery;
