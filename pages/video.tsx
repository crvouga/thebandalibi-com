import { GetStaticProps } from "next";
import { SectionLayout } from "../components/layout/section-layout";
import { Meta } from "../components/meta";
import { VideoCardGrid } from "../components/videos/video-card-grid";
import { cms } from "../lib/cms";
import { IVideo } from "../lib/contracts";

type IVideoProps = {
  videos: IVideo[];
};

export const getStaticProps: GetStaticProps<IVideoProps> = async () => {
  return {
    props: {
      videos: await cms.getVideos(),
    },
  };
};

const Video = (props: IVideoProps) => {
  const { videos } = props;
  return (
    <SectionLayout layoutId="video">
      <Meta />
      <VideoCardGrid videos={videos} />
    </SectionLayout>
  );
};

export default Video;
