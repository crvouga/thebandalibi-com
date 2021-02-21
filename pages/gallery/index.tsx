import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import React from "react";
import { GalleryCardGrid } from "../../components/gallery/gallery-card-grid";
import { Meta } from "../../components/meta";
import { useGlobalStyles } from "../../components/styles";
import { cms } from "../../lib/cms";
import { IGallery } from "../../lib/contracts";

type IGalleryProps = {
  galleries: IGallery[];
};

export const getStaticProps: GetStaticProps<IGalleryProps> = async () => {
  return {
    props: {
      galleries: await cms.getGalleries(),
    },
  };
};

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(2, 0),
  },
}));

const Gallery = (props: IGalleryProps) => {
  const { galleries } = props;

  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <React.Fragment>
      <Meta />
      <motion.div layoutId="gallery" className={globalClasses.container}>
        <div className={clsx(globalClasses.header, classes.header)}>
          <Typography variant="h2" color="initial">
            Gallery
          </Typography>
        </div>
        <GalleryCardGrid galleries={galleries} />
      </motion.div>
    </React.Fragment>
  );
};

export default Gallery;
