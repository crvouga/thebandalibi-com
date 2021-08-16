import { Image, ImageSwipeModal, UniformGrid } from "@components/generic";
import { PageHeader, PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IImage, IImageGallery, ISettings } from "@data-access";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { plural, useBoolean, useBreakpointDown } from "@utility";
import React, { useRef } from "react";
import { ImageGalleryCard } from "../cards";

export type IImageGallerySingleProps = {
  settings: ISettings;
  relatedImageGalleries: IImageGallery[];
  imageGallery: IImageGallery;
};

export const ImageGallerySingle = ({
  imageGallery,
  relatedImageGalleries,
  settings,
}: IImageGallerySingleProps) => {
  const isOpen = useBoolean(false);
  const startIndexRef = useRef<number>(0);

  const handleImageClick = (_image: IImage, index: number) => {
    isOpen.setTrue();
    startIndexRef.current = index;
  };

  const breakpointDown = useBreakpointDown();

  return (
    <>
      <ImageSwipeModal
        startIndex={startIndexRef.current}
        open={isOpen.value}
        onClose={isOpen.setFalse}
        images={imageGallery.images.map((image) => ({
          src: image.url,
          width: image.metadata.dimensions.width,
          height: image.metadata.dimensions.height,
        }))}
      />

      <PageWrapper
        pageTitle={[LABELS.imageGallery, imageGallery.name]}
        settings={settings}
      >
        <PageHeader
          breadcrumbs={[
            {
              href: ROUTES.home(),
              label: LABELS.home,
            },
            {
              href: ROUTES.allImageGalleries(),
              label: LABELS.imageGallery,
            },
            {
              label: imageGallery.name,
            },
          ]}
          title={imageGallery.name}
          subtitle={plural({
            count: imageGallery.images.length,
            singularWord: "Photo",
          })}
        />

        <UniformGrid
          ContainerProps={{
            spacing: breakpointDown === "sm" ? 0 : 2,
            sx: {
              marginY: 2,
            },
          }}
          ItemProps={{
            xs: 4,
            md: 3,
          }}
        >
          {imageGallery.images.map((image, index) => (
            <CardActionArea
              key={image.url}
              onClick={() => {
                handleImageClick(image, index);
              }}
            >
              <Image aspectRatio={1} src={image.url} alt={imageGallery.name} />
            </CardActionArea>
          ))}
        </UniformGrid>

        <Typography variant="h2" sx={{ marginX: 2 }} align="center">
          {LABELS.relatedImageGalleries}
        </Typography>

        <UniformGrid>
          {relatedImageGalleries.map((imageGallery) => (
            <ImageGalleryCard
              key={imageGallery.slug}
              imageGallery={imageGallery}
            />
          ))}
        </UniformGrid>
      </PageWrapper>
    </>
  );
};
