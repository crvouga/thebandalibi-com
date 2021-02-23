import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { Meta } from "../../components/molecules/meta";
import { VideoCardGrid } from "../../components/organisms/video-card-grid";
import { cms } from "../../lib/cms";
import { IVideo } from "../../lib/contracts";
import { MotionTypography } from "../../components/atoms/typography";

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
    <Container layoutId="video">
      <Meta />

      <Header>
        <MotionTypography layoutId="video-title" variant="h3">
          Video
        </MotionTypography>
      </Header>

      <VideoCardGrid videos={videos} />
    </Container>
  );
};

export default Video;
