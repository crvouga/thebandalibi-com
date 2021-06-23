import { ISettings, IVideoGallery } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { ResponsiveUniformGrid } from "generic-components";
import React from "react";
import { PageWrapper } from "../../top-level";
import { VideoGalleryCard } from "./video-gallery-card";

export type IVideoGalleryProps = {
  settings: ISettings;
  videoGalleries: IVideoGallery[];
};

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { videoGalleries, settings } = props;

  return (
    <PageWrapper pageTitle={["Videos"]} settings={settings}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1" color="initial">
            Videos
          </Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid>
          {videoGalleries.map((videoGallery) => (
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
