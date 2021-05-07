import { IImage, IImageGallery, ISettings } from "@core";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import Link from "next/link";
import React, { useRef } from "react";
import "react-photoswipe/lib/photoswipe.css";
import { routes } from "../../lib/routes";
import { plural } from "../../lib/utility/words";
import { PageLayout } from "../app/layout";
import { ImageSwiper } from "../shared/image-swiper";
import { ResponsiveUniformGrid, UniformGrid } from "../shared/uniform-grid";
import { useBoolean } from "../shared/use-boolean";
import { ImageCard } from "./image-card";
import { ImageGalleryCard } from "./image-gallery-card";

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
      pageTitle={[settings.band.name, "Photos", imageGallery.name]}
      settings={settings}
    >
      <Container>
        <Box paddingTop={2}>
          <Typography variant="h1">{imageGallery.name}</Typography>

          <Typography variant="subtitle1">
            {plural({
              count: imageGallery.images.length,
              singularWord: "Photo",
            })}
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
            <CardActionArea
              key={image.url}
              onClick={() => {
                handleImageClick(image, index);
              }}
            >
              <ImageCard image={image} alt={imageGallery.name} />
            </CardActionArea>
          ))}
        </UniformGrid>
      </Container>

      <Container>
        <Box paddingY={2}>
          <Typography variant="h2">More Photos</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid>
          {relatedImageGalleries.map((imageGallery) => (
            <Link
              key={imageGallery.slug}
              href={routes.singleImageGallery(imageGallery.slug)}
            >
              <CardActionArea>
                <ImageGalleryCard imageGallery={imageGallery} />
              </CardActionArea>
            </Link>
          ))}
        </ResponsiveUniformGrid>
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
