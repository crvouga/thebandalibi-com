import { UniformGrid } from "@components/generic";
import { ISettings, IVideoGallery } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createEventEmitter } from "@utility";
import React from "react";
import { PageWrapper } from "../../shared";
import { VideoGalleryCard } from "../cards/video-gallery-card";
import { VideoPlayerCard } from "../video-player";
import { IVideoPlayerEvents } from "../video-player/video-player";

export type IVideoGallerySingleProps = {
  settings: ISettings;
  videoGallery: IVideoGallery;
  relatedVideoGalleries: IVideoGallery[];
};

const eventEmitter = createEventEmitter<IVideoPlayerEvents>({
  maxListeners: 100,
});

export const VideoGallerySingle = (props: IVideoGallerySingleProps) => {
  const { relatedVideoGalleries, videoGallery, settings } = props;

  return (
    <PageWrapper pageTitle={["Video", videoGallery.name]} settings={settings}>
      <Container>
        <Box paddingTop={2}>
          <Typography variant="h1">{videoGallery.name}</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <UniformGrid>
          {videoGallery.videos.map((video) => (
            <VideoPlayerCard
              key={video.url}
              video={video}
              eventEmitter={eventEmitter}
            />
          ))}
        </UniformGrid>
      </Container>

      <Container>
        <Box paddingY={2}>
          <Typography variant="h2" color="initial">
            More Videos
          </Typography>
        </Box>
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
