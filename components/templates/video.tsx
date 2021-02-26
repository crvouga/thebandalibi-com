import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { MotionTypography } from "../../components/atoms/typography";
import { Meta } from "../../components/molecules/meta";
import { VideoCardGrid } from "../../components/organisms/video-card-grid";
import { PageLayout } from "../../components/templates/layout.tsx/page-layout";
import { ISocialMedia, IVideo } from "../../lib/contracts";

export type IVideoProps = {
  socialMedia: ISocialMedia[];
  videos: IVideo[];
};

export const Video = (props: IVideoProps) => {
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
