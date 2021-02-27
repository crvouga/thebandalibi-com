import Typography from "@material-ui/core/Typography";
import React from "react";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { Meta } from "../app/meta";
import { IPageLayoutProps, PageLayout } from "../app/page-layout";
import { IVideoGallery } from "../../lib/domain";
import { VideoCardGridWithPlayer } from "../video/video-card-grid-with-player";
import { pluralize } from "../../lib/utility/words";

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
              {pluralize(videoGallery.videos.length, "Video")}
            </Typography>
          </div>
        </Header>

        <VideoCardGridWithPlayer videos={videoGallery.videos} />
      </Container>
    </PageLayout>
  );
};
