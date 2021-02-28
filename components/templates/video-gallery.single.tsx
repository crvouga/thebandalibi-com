import Typography from "@material-ui/core/Typography";
import React from "react";
import { ISettings, IVideoGallery } from "../../lib/domain";
import { plural } from "../../lib/utility/words";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { VideoCardGridWithPlayer } from "../video/video-card-grid-with-player";

export type IVideoGallerySingleProps = {
  settings: ISettings;
  videoGallery: IVideoGallery;
};

export const VideoGallerySingle = (props: IVideoGallerySingleProps) => {
  const { videoGallery, settings } = props;

  return (
    <PageLayout
      title={DocumentTitle(videoGallery.name, "Video", settings.band.name)}
      settings={settings}
    >
      <Container>
        <Header>
          <div>
            <Typography variant="h3">{videoGallery.name}</Typography>
            <Typography variant="subtitle1">
              {plural(videoGallery.videos.length, "Video")}
            </Typography>
          </div>
        </Header>

        <VideoCardGridWithPlayer videos={videoGallery.videos} />
      </Container>
    </PageLayout>
  );
};
