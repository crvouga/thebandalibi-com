import Typography from "@material-ui/core/Typography";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { Meta } from "../../components/molecules/meta";
import {
  IPageLayoutProps,
  PageLayout,
} from "../../components/templates/layout.tsx/page-layout";
import { IVideoGallery } from "../../lib/domain";
import { VideoCardGridWithPlayer } from "../organisms/video-card-grid-with-player";

export type IVideoGallerySingleProps = IPageLayoutProps & {
  videoGallery: IVideoGallery;
};

export const VideoGallerySingle = (props: IVideoGallerySingleProps) => {
  const { videoGallery, ...PageLayoutProps } = props;

  return (
    <PageLayout {...PageLayoutProps}>
      <Container>
        <Meta />

        <Header>
          <div>
            <Typography variant="h3">{videoGallery.name}</Typography>
            <Typography variant="subtitle1">
              {`${videoGallery.videos.length} Photos`}
            </Typography>
          </div>
        </Header>

        <VideoCardGridWithPlayer videos={videoGallery.videos} />
      </Container>
    </PageLayout>
  );
};
