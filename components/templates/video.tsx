import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { MotionTypography } from "../../components/atoms/typography";
import { Meta } from "../../components/molecules/meta";
import { PageLayout } from "../../components/templates/layout.tsx/page-layout";
import { IPlatform, IVideo } from "../../lib/contracts";
import { VideoCardGridWithPlayer } from "../organisms/video-card-grid-with-player";

export type IVideoProps = {
  platforms: IPlatform[];
  videos: IVideo[];
};

export const Video = (props: IVideoProps) => {
  const { videos, platforms } = props;

  return (
    <PageLayout platforms={platforms}>
      <Container layoutId="video">
        <Meta />

        <Header>
          <MotionTypography layoutId="video-title" variant="h3">
            Video
          </MotionTypography>
        </Header>

        <VideoCardGridWithPlayer videos={videos} />
      </Container>
    </PageLayout>
  );
};
