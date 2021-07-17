import { ISettings, IVideoGallery } from "@data-access";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link, UniformGrid } from "@components/generic";
import React from "react";
import { PageWrapper, routes } from "../../shared";
import { VideoGalleryCard } from "../cards/video-gallery-card";

export type IVideoGalleryProps = {
  settings: ISettings;
  videoGalleries: IVideoGallery[];
};

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { videoGalleries, settings } = props;

  return (
    <PageWrapper pageTitle={["Videos"]} settings={settings}>
      <Container sx={{ paddingTop: 2 }}>
        <Breadcrumbs>
          <Link href={routes.landing()}>Home</Link>
          <Link>Videos</Link>
        </Breadcrumbs>

        <Typography variant="h1" color="initial">
          Videos
        </Typography>
      </Container>

      <Container disableGutters>
        <UniformGrid>
          {videoGalleries.map((videoGallery) => (
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
