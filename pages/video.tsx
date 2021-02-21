import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";
import { SectionLayout } from "../components/section";
import { Meta } from "../components/meta";
import { Reveal } from "../components/reveal-animation";
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

      <Reveal>
        <Typography variant="h1" color="initial">
          Video
        </Typography>
      </Reveal>

      <VideoCardGrid videos={videos} />
    </SectionLayout>
  );
};

export default Video;
