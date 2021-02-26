import { GetStaticProps } from "next";
import {
  IVideoGalleryProps,
  VideoGallery,
} from "../../components/templates/video-gallery";
import { cms } from "../../lib/cms";

export const getStaticProps: GetStaticProps<IVideoGalleryProps> = async () => {
  return {
    props: {
      platforms: await cms.getPlatforms(),
      videoGalleries: await cms.getVideoGalleries(),
    },
  };
};

export default VideoGallery;
