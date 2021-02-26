import Typography from "@material-ui/core/Typography";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
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
      <Container>
        <Meta />

        <Header>
          <Typography variant="h3">Video</Typography>
        </Header>

        <VideoCardGridWithPlayer videos={videos} />
      </Container>
    </PageLayout>
  );
};
