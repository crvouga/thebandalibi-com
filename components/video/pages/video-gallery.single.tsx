import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { ISettings } from "@core";
import { IVideoGallery } from "@core";
import { routes } from "../../../routes";
import { PageLayout } from "../../app/layout";
import { ResponsiveUniformGrid } from "@ui";
import { VideoCardGrid } from "../video-card-grid";
import { VideoGalleryCard } from "../video-gallery-card";
import { useVideoState } from "../../../features/content/data-access/video-state";
import { PreloadVideos } from "../preload-videos";

export type IVideoGallerySingleProps = {
  settings: ISettings;
  videoGallery: IVideoGallery;
  relatedVideoGalleries: IVideoGallery[];
};

export const VideoGallerySingle = (props: IVideoGallerySingleProps) => {
  const { relatedVideoGalleries, videoGallery, settings } = props;

  const videoState = useVideoState();

  return (
    <PageLayout pageTitle={["Video", videoGallery.name]} settings={settings}>
      <PreloadVideos
        videoUrls={videoGallery.videos.map((video) => video.url)}
      />

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
