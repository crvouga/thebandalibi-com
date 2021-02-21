import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import React from "react";
import { Meta } from "../../components/meta";
import { useGlobalStyles } from "../../components/styles";
import { VideoCardGrid } from "../../components/videos/video-card-grid";
import { cms } from "../../lib/cms";
import { IVideo } from "../../lib/contracts";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

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

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(2, 0),
  },
}));

const Video = (props: IVideoProps) => {
  const { videos } = props;

  const globalClasses = useGlobalStyles();

  const classes = useStyles();

  return (
    <React.Fragment>
      <Meta />

      <motion.div layoutId="video" className={globalClasses.container}>
        <div className={clsx(globalClasses.header, classes.header)}>
          <Typography variant="h3" color="initial">
            Video
          </Typography>
        </div>

        <VideoCardGrid videos={videos} />
      </motion.div>
    </React.Fragment>
  );
};

export default Video;
