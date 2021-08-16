import { UniformGrid } from "@components/generic";
import { PageHeader, PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { ISettings, IVideoGallery } from "@data-access";
import React from "react";
import { VideoGalleryCard } from "../cards/video-gallery-card";

export type IVideoGalleryProps = {
  settings: ISettings;
  videoGalleries: IVideoGallery[];
};

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { videoGalleries, settings } = props;

  return (
    <PageWrapper pageTitle={[LABELS.videoGallery]} settings={settings}>
      <PageHeader
        breadcrumbs={[
          {
            href: ROUTES.home(),
            label: LABELS.home,
          },
          {
            label: LABELS.videoGallery,
          },
        ]}
        title={LABELS.videoGallery}
      />

      <UniformGrid>
        {videoGalleries.map((videoGallery) => (
          <VideoGalleryCard
            key={videoGallery.slug}
            videoGallery={videoGallery}
          />
        ))}
      </UniformGrid>
    </PageWrapper>
  );
};
