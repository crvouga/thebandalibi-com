import { Container, Theme, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useRef } from "react";
import "react-photoswipe/lib/photoswipe.css";
import { IImage, IImageGallery } from "../../lib/domain";
import { ISettings } from "../../lib/domain/settings";
import { plural } from "../../lib/utility/words";
import { Clickable } from "../@shared/clickable";

import { ImageSwiper } from "../@shared/image-swiper";
import { UniformGrid } from "../@shared/uniform-grid";
import { useBoolean } from "../@shared/use-boolean";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { ImageCard } from "../image/image-card";

export type IImageGallerySingleProps = {
  settings: ISettings;
  imageGallery: IImageGallery;
};

export const ImageGallerySingle = (props: IImageGallerySingleProps) => {
  const { imageGallery, settings } = props;

  const isOpen = useBoolean(false);
  const startIndexRef = useRef<number>(0);

  const handleImageClick = (image: IImage, index: number) => {
    isOpen.setTrue();
    startIndexRef.current = index;
  };

  const isSmallScreen = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("xs")
  );

  return (
    <PageLayout
      title={DocumentTitle(imageGallery.name, "Photos", settings.band.name)}
      settings={settings}
    >
      <Container>
        <Box paddingY={2}>
          <Typography variant="h3">{imageGallery.name}</Typography>

          <Typography variant="subtitle1">
            {plural(imageGallery.images.length, "Photo")}
          </Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <UniformGrid
          ContainerProps={{ spacing: isSmallScreen ? 0 : 4 }}
          ItemProps={{ xs: 4 }}
        >
          {imageGallery.images.map((image, index) => (
            <Clickable
              key={image.url}
              onClick={() => {
                handleImageClick(image, index);
              }}
            >
              <ImageCard image={image} alt={imageGallery.name} />
            </Clickable>
          ))}
        </UniformGrid>
      </Container>

      <ImageSwiper
        startIndex={startIndexRef.current}
        open={isOpen.value}
        onClose={isOpen.setFalse}
        images={imageGallery.images}
      />
    </PageLayout>
  );
};
