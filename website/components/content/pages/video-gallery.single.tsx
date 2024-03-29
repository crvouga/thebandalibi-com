import { UniformGrid } from "@components/generic";
import { PageHeader, PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { ISettings, IVideoGallery } from "@data-access";
import Typography from "@material-ui/core/Typography";
import { createEventEmitter, plural } from "@utility";
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
    >
      <PageHeader
        breadcrumbs={[
          {
            href: ROUTES.home(),
            label: LABELS.home,
          },
          {
            href: ROUTES.allVideoGalleries(),
            label: LABELS.videoGallery,
          },
          {
            label: videoGallery.name,
          },
        ]}
        title={videoGallery.name}
        subtitle={plural({
          count: videoGallery.videoCount,
          singularWord: "video",
        })}
      />

      <UniformGrid ContainerProps={{ sx: { marginY: 2 } }}>
        {videoGallery.videos.map((video) => (
          <VideoPlayerCard
            key={video.url}
            video={video}
            eventEmitter={eventEmitterRef.current}
          />
        ))}
      </UniformGrid>

      <Typography variant="h2" align="center" sx={{ marginX: 2 }}>
        {LABELS.relatedVideoGalleries}
      </Typography>

      <UniformGrid>
        {relatedVideoGalleries.map((videoGallery) => (
          <VideoGalleryCard
            key={videoGallery.slug}
            videoGallery={videoGallery}
          />
        ))}
      </UniformGrid>
    </PageWrapper>
  );
};
