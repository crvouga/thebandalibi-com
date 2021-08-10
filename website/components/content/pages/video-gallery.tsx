import { Link, UniformGrid } from "@components/generic";
import { PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { ISettings, IVideoGallery } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { VideoGalleryCard } from "../cards/video-gallery-card";

export type IVideoGalleryProps = {
  settings: ISettings;
  videoGalleries: IVideoGallery[];
};

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { videoGalleries, settings } = props;

  return (
    <PageWrapper
      pageTitle={[LABELS.videoGallery]}
      settings={settings}
      breadcrumbs={
        <Breadcrumbs>
          <Link href={ROUTES.home()}>{LABELS.home}</Link>
          <Link color="text.primary">{LABELS.videoGallery}</Link>
        </Breadcrumbs>
      }
    >
      <Typography variant="h1" align="center" sx={{ marginX: 2 }}>
        {LABELS.videoGallery}
      </Typography>

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
