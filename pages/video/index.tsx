import { GetStaticProps } from "next";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { MotionTypography } from "../../components/atoms/typography";
import { Meta } from "../../components/molecules/meta";
import { VideoCardGrid } from "../../components/organisms/video-card-grid";
import { PageLayout } from "../../components/templates/layout.tsx/page-layout";
import { cms } from "../../lib/cms";
import { ISocialMedia, IVideo } from "../../lib/contracts";

type IVideoProps = {
  socialMedia: ISocialMedia[];
  videos: IVideo[];
};

export const getStaticProps: GetStaticProps<IVideoProps> = async () => {
  return {
    props: {
      socialMedia: await cms.getSocialMedia(),
      videos: await cms.getVideos(),
    },
  };
};

const Video = (props: IVideoProps) => {
  const { videos, socialMedia } = props;

  return (
    <PageLayout socialMedia={socialMedia}>
      <Container layoutId="video">
        <Meta />

        <Header>
          <MotionTypography layoutId="video-title" variant="h3">
            Video
          </MotionTypography>
        </Header>

        <VideoCardGrid videos={videos} />
      </Container>
    </PageLayout>
  );
};

export default Video;
