import { ISettings, IVideoGallery } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { ResponsiveUniformGrid } from "generic-components";
import React from "react";
import { PageWrapper } from "../../top-level";
import { VideoCard } from "../cards/video-card";
import { VideoGalleryCard } from "../cards/video-gallery-card";
import { useVideoPlayerState } from "@data-access";

export type IVideoGallerySingleProps = {
  settings: ISettings;
  videoGallery: IVideoGallery;
  relatedVideoGalleries: IVideoGallery[];
};

export const VideoGallerySingle = (props: IVideoGallerySingleProps) => {
  const { relatedVideoGalleries, videoGallery, settings } = props;

  const videoState = useVideoPlayerState();

  return (
    <PageWrapper pageTitle={["Video", videoGallery.name]} settings={settings}>
      <Container>
        <Box paddingTop={2}>
          <Typography variant="h1">{videoGallery.name}</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid>
          {videoGallery.videos.map((video) => (
            <VideoCard
              key={video.url}
              video={video}
              onClick={() => videoState.openVideo(video)}
            />
          ))}
        </ResponsiveUniformGrid>
      </Container>

      <Container>
        <Box paddingY={2}>
          <Typography variant="h2" color="initial">
            More Videos
          </Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid>
          {relatedVideoGalleries.map((videoGallery) => (
            <VideoGalleryCard
              key={videoGallery.slug}
              videoGallery={videoGallery}
            />
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageWrapper>
  );
};
