import { UniformGrid } from "@components/generic";
import { PageHeader, PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IImageGallery, ISettings } from "@data-access";
import React from "react";
import { ImageGalleryCard } from "../cards";

export type IImageGalleryProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
};

export const ImageGallery = (props: IImageGalleryProps) => {
  const { imageGalleries, settings } = props;

  return (
    <PageWrapper pageTitle={[LABELS.imageGallery]} settings={settings}>
      <PageHeader
        breadcrumbs={[
          {
            href: ROUTES.home(),
            label: LABELS.home,
          },
          {
            label: LABELS.imageGallery,
          },
        ]}
        title={LABELS.imageGallery}
      />

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
