import { IImage, IImageGallery, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  CollectionCard,
  Image,
  PhotoSwiper,
  ResponsiveUniformGrid,
  UniformGrid,
  useBoolean,
} from "@ui";
import { formatCollectionCount, plural } from "@utility";
import clsx from "clsx";
import Link from "next/link";
import React, { useRef } from "react";
import "react-photoswipe/lib/photoswipe.css";
import { routes } from "../../routes";
import { PageWrapper } from "../top-level";

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
    <PageWrapper pageTitle={["Photos", imageGallery.name]} settings={settings}>
      <PhotoSwiper
        startIndex={startIndexRef.current}
        open={isOpen.value}
        onClose={isOpen.setFalse}
        images={imageGallery.images.map((image) => ({
          src: image.url,
          width: image.metadata.dimensions.width,
          height: image.metadata.dimensions.height,
        }))}
      />

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
              <Image aspectRatio={1} src={image.url} alt={imageGallery.name} />
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
                <CollectionCard
                  aspectRatio={16 / 9}
                  srcs={imageGallery.images.map((image) => image.url)}
                  title={imageGallery.name}
                  subheader={formatCollectionCount({
                    count: imageGallery.imageCount,
                    singularWord: "Photo",
                  })}
                />
              </CardActionArea>
            </Link>
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageWrapper>
  );
};
