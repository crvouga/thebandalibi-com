import { Link, UniformGrid } from "@components/generic";
import { PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { ISettings, IVideoGallery } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createEventEmitter } from "@utility";
import React, { useRef } from "react";
import { VideoGalleryCard } from "../cards/video-gallery-card";
import { VideoPlayerCard } from "../cards/video-player-card";
import { IVideoPlayerEvents } from "../video-player";

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
      breadcrumbs={
        <Breadcrumbs>
          <Link href={ROUTES.landing()}>{LABELS.landingPage}</Link>
          <Link href={ROUTES.allVideoGalleries()}>{LABELS.videoGallery}</Link>
          <Link color="text.primary">{videoGallery.name}</Link>
        </Breadcrumbs>
      }
    >
      <Container sx={{ paddingTop: 2 }}>
        <Typography variant="h1">{videoGallery.name}</Typography>
      </Container>

      <Container disableGutters>
        <UniformGrid>
          {videoGallery.videos.map((video) => (
            <VideoPlayerCard
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
