import { GetStaticProps } from "next";
import { IVideoProps, Video } from "../components/templates/video";
import { cms } from "../lib/cms";

export const getStaticProps: GetStaticProps<IVideoProps> = async () => {
  return {
    props: {
      platforms: await cms.getPlatforms(),
      videos: await cms.getVideos(),
    },
  };
};

export default Video;
