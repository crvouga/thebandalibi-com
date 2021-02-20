import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
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
    <motion.div layoutId="video">
      <Meta />
      <Container maxWidth="lg">
        <Typography variant="h1" color="initial">
          Video
        </Typography>

        <VideoCardGrid videos={videos} />
      </Container>
    </motion.div>
  );
};

export default Video;
