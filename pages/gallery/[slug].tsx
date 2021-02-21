import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { motion } from "framer-motion";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import { GalleryCardGrid } from "../../components/gallery/gallery-card-grid";
import { Meta } from "../../components/meta";
import { useGlobalStyles } from "../../components/styles";
import { cms } from "../../lib/cms";
import { IGallery } from "../../lib/contracts";
import { ImageCardGrid } from "../../components/gallery/image-card-grid";

type IGalleryProps = {
  gallery: IGallery;
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
  header: {
    padding: theme.spacing(2, 0),
  },
}));

const Gallery = (props: IGalleryProps) => {
  const { gallery } = props;

  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <motion.div layoutId={gallery.id} className={globalClasses.container}>
      <Meta />
      <div className={classes.header}>
        <div>
          <Typography variant="h3" color="initial">
            {gallery.name}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            {`${gallery.images.length} Photos`}
          </Typography>
        </div>
      </div>
      <ImageCardGrid images={gallery.images} />
    </motion.div>
  );
};

export default Gallery;
