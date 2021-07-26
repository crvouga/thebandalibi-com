import { Link, UniformGrid } from "@components/generic";
import { ISettings, IVideoGallery } from "@data-access";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createEventEmitter } from "@utility";
import React, { useRef } from "react";
import { LABELS, ROUTES } from "@config";
import { PageWrapper } from "../../shared";
import { VideoGalleryCard } from "../cards/video-gallery-card";
import { IVideoPlayerEvents, VideoPlayer } from "../video-player";

export type IVideoGallerySingleProps = {
  settings: ISettings;
  videoGallery: IVideoGallery;
  relatedVideoGalleries: IVideoGallery[];
};

export const VideoGallerySingle = (props: IVideoGallerySingleProps) => {
  const { relatedVideoGalleries, videoGallery, settings } = props;

  const eventEmitterRef = useRef(
    createEventEmitter<IVideoPlayerEvents>({
      maxListeners: 100,
    })
  );

  return (
    <PageWrapper
      pageTitle={[LABELS.videoGallery, videoGallery.name]}
      settings={settings}
    >
      <Container sx={{ paddingTop: 2 }}>
        <Breadcrumbs>
          <Link href={ROUTES.landing()}>{LABELS.landingPage}</Link>
          <Link href={ROUTES.allVideoGalleries()}>{LABELS.videoGallery}</Link>
          <Link color="text.primary">{videoGallery.name}</Link>
        </Breadcrumbs>

        <Typography variant="h1">{videoGallery.name}</Typography>
      </Container>

      <Container disableGutters>
        <UniformGrid>
          {videoGallery.videos.map((video) => (
            <VideoPlayer
              key={video.url}
              video={video}
              eventEmitter={eventEmitterRef.current}
            />
          ))}
        </UniformGrid>
      </Container>

      <Container sx={{ paddingY: 1 }}>
        <Typography variant="h2">{LABELS.relatedVideoGalleries}</Typography>
      </Container>

      <Container disableGutters>
        <UniformGrid>
          {relatedVideoGalleries.map((videoGallery) => (
            <VideoGalleryCard
              key={videoGallery.slug}
              videoGallery={videoGallery}
            />
          ))}
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
