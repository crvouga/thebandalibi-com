import { Box, Container, makeStyles, Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import React, { useRef } from "react";
import "react-photoswipe/lib/photoswipe.css";
import { routes } from "../../constants/routes";
import { IImage, IImageGallery } from "../../lib/domain";
import { ISettings } from "../../lib/domain/settings";
import { plural } from "../../lib/utility/words";
import { Clickable, ClickableLink } from "../shared/clickable";
import { ImageSwiper } from "../shared/image-swiper";
import { UniformGrid } from "../shared/uniform-grid";
import { useBoolean } from "../shared/use-boolean";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { ImageCard } from "../image/image-card";
import { ImageGalleryCard } from "../image/image-gallery-card";

export type IImageGallerySingleProps = {
  settings: ISettings;
  relatedImageGalleries: IImageGallery[];
  imageGallery: IImageGallery;
};

const useStyles = makeStyles((theme) => ({
  main: {},
  section: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export const ImageGallerySingle = (props: IImageGallerySingleProps) => {
  const { imageGallery, relatedImageGalleries, settings } = props;

  const isOpen = useBoolean(false);
  const startIndexRef = useRef<number>(0);

  const classes = useStyles();

  const handleImageClick = (_image: IImage, index: number) => {
    isOpen.setTrue();
    startIndexRef.current = index;
  };

  const isSmallScreen = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("xs")
  );

  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Photos", imageGallery.name)}
      settings={settings}
    >
      <Container>
        <Box paddingY={2}>
          <Typography variant="h2">{imageGallery.name}</Typography>

          <Typography variant="subtitle1">
            {plural(imageGallery.images.length, "Photo")}
          </Typography>
        </Box>
      </Container>

      <Container
        component="main"
        className={clsx(classes.main, classes.section)}
        disableGutters
      >
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

      <Container className={classes.section}>
        <Box paddingY={2}>
          <Typography variant="h2">More Photos</Typography>
        </Box>
        <UniformGrid>
          {relatedImageGalleries.map((imageGallery) => (
            <ClickableLink
              key={imageGallery.slug}
              href={routes.singleImageGallery(imageGallery.slug)}
            >
              <ImageGalleryCard imageGallery={imageGallery} />
            </ClickableLink>
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
