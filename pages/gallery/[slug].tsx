import { makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { useBoolean } from "../../components/atoms/use-boolean";
import { useCarousel } from "../../components/atoms/use-carousel";
import { usePanZoom } from "../../components/atoms/use-pan-zoom";
import { CarouselToolbar } from "../../components/molecules/carousel-toolbar";
import { Meta } from "../../components/molecules/meta";
import { ImageCardGrid } from "../../components/organisms/image-card-grid";
import { PageLayout } from "../../components/templates/layout.tsx/page-layout";
import { cms } from "../../lib/cms";
import { IGallery, ISocialMedia } from "../../lib/contracts";

type IGalleryProps = {
  gallery: IGallery;
  socialMedia: ISocialMedia[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const galleries = await cms.getGalleries();

  const paths = galleries.map((gallery) => ({
    params: {
      slug: gallery.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IGalleryProps> = async (
  context
) => {
  const slug = context?.params?.slug?.toString() ?? "";

  const gallery = await cms.getGallery(slug);

  if (gallery) {
    return {
      props: {
        socialMedia: await cms.getSocialMedia(),
        gallery,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: "100%",

    overflow: "hidden",
    margin: "auto",
  },

  panzoom: {
    width: "100%",
    height: "100%",
  },

  image: {
    maxWidth: theme.breakpoints.values.sm,
    width: "100%",
  },
}));

const Gallery = (props: IGalleryProps) => {
  const { gallery, socialMedia } = props;

  const isOpen = useBoolean(false);
  const panzoom = usePanZoom<HTMLDivElement, HTMLImageElement>();
  const carousel = useCarousel(gallery.images);

  const classes = useStyles();

  const handleImageClick = (image: string, index: number) => {
    isOpen.setTrue();
    carousel.setIndex(index);
    panzoom.center();
  };

  return (
    <PageLayout socialMedia={socialMedia}>
      <Container layoutId={gallery.slug}>
        <Meta />

        <Header>
          <div>
            <Typography variant="h3">{gallery.name}</Typography>

            <Typography variant="subtitle1">
              {`${gallery.images.length} Photos`}
            </Typography>
          </div>
        </Header>

        <ImageCardGrid onClick={handleImageClick} images={gallery.images} />
      </Container>

      <Dialog fullScreen open={isOpen.value} onClose={isOpen.setFalse}>
        <div className={classes.wrapper}>
          <div className={classes.panzoom} ref={panzoom.panzoomRef}>
            <img
              ref={panzoom.centeredRef}
              className={classes.image}
              src={carousel.currentItem}
            />
          </div>
        </div>

        <CarouselToolbar
          onPrevious={() => {
            panzoom.center();
            carousel.previous();
          }}
          onNext={() => {
            panzoom.center();
            carousel.next();
          }}
          onClose={isOpen.setFalse}
        />
      </Dialog>
    </PageLayout>
  );
};

export default Gallery;
