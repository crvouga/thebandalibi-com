import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { IVideoGallery } from "../../lib/data-access/video-gallery";
import { routes } from "../../lib/routes";
import { PageLayout } from "../app/layout";
import { ResponsiveUniformGrid } from "../shared/uniform-grid";
import { VideoCardGrid } from "./video-card-grid";
import { VideoGalleryCard } from "./video-gallery-card";
import { useVideoState } from "./video-state";

export type IVideoGallerySingleProps = {
  settings: ISettings;
  videoGallery: IVideoGallery;
  relatedVideoGalleries: IVideoGallery[];
};

export const VideoGallerySingle = (props: IVideoGallerySingleProps) => {
  const { relatedVideoGalleries, videoGallery, settings } = props;

  const videoState = useVideoState();

  return (
    <PageLayout
      pageTitle={[settings.band.name, "Video", videoGallery.name]}
      settings={settings}
    >
      <Container>
        <Box paddingTop={2}>
          <Typography variant="h1">{videoGallery.name}</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <VideoCardGrid
          onClick={videoState.openVideo}
          videos={videoGallery.videos}
        />
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
    </PageLayout>
  );
};
