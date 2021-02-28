import { Container, Grid, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, { useRef } from "react";
import "react-photoswipe/lib/photoswipe.css";
import { IImage, IImageGallery } from "../../lib/domain";
import { ISettings } from "../../lib/domain/settings";
import { plural } from "../../lib/utility/words";
import { Clickable } from "../@shared/clickable";
import { Header } from "../@shared/header";
import { ImageSwiper } from "../@shared/image-swiper";
import { useBoolean } from "../@shared/use-boolean";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { ImageCard } from "../image/image-card";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
      <Container maxWidth="lg">
        <Header layoutId={imageGallery.slug}>
          <div>
            <Typography variant="h3">{imageGallery.name}</Typography>

            <Typography variant="subtitle1">
              {plural(imageGallery.images.length, "Photo")}
            </Typography>
          </div>
        </Header>
      </Container>

      <Container maxWidth="lg" disableGutters>
        <Grid container spacing={isSmallScreen ? 0 : 4}>
          {imageGallery.images.map((image, index) => (
            <Grid key={image.url} item xs={4}>
              <Clickable
                onClick={() => {
                  handleImageClick(image, index);
                }}
              >
                <ImageCard image={image} alt={imageGallery.name} />
              </Clickable>
            </Grid>
          ))}
        </Grid>
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
