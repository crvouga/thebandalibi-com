import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { ISettings } from "@data-access";
import { IVideoGallery } from "@data-access";
import { routes } from "../../../../routes";
import { PageWrapper } from "../../../top-level";
import { ResponsiveUniformGrid } from "generic-components";
import { VideoGalleryCard } from "../video-gallery-card";

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
            <Link
              key={videoGallery.slug}
              href={routes.singleVideoGallery(videoGallery.slug)}
            >
              <CardActionArea>
                <VideoGalleryCard videoGallery={videoGallery} />
              </CardActionArea>
            </Link>
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageWrapper>
  );
};
