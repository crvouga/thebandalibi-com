import { Link, UniformGrid } from "@components/generic";
import { IImageGallery, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { LABELS, ROUTES } from "@config";
import { PageWrapper } from "@components/shared";
import { ImageGalleryCard } from "../cards";

export type IImageGalleryProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
};

export const ImageGallery = (props: IImageGalleryProps) => {
  const { imageGalleries, settings } = props;

  return (
    <PageWrapper
      pageTitle={[LABELS.imageGallery]}
      settings={settings}
      breadcrumbs={
        <Breadcrumbs>
          <Link href={ROUTES.home()}>{LABELS.home}</Link>
          <Link color="text.primary">{LABELS.imageGallery}</Link>
        </Breadcrumbs>
      }
    >
      <Typography variant="h1" align="center" sx={{ marginX: 2 }}>
        {LABELS.imageGallery}
      </Typography>

      <UniformGrid>
        {imageGalleries.map((imageGallery) => (
          <ImageGalleryCard
            key={imageGallery.slug}
            imageGallery={imageGallery}
          />
        ))}
      </UniformGrid>
    </PageWrapper>
  );
};
