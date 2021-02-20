import React from "react";
import { IGallery } from "../../lib/contracts";
import { SectionLayout, SectionTitle } from "../layout/section-layout";
import { GalleryCard } from "./gallery-card";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";

type IGallerySectionProps = {
  galleries: IGallery[];
};

const useStyles = makeStyles((theme) => ({
  galleryCardWrapper: {
    padding: theme.spacing(1 / 2),

    width: "33.33%",

    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

export const GallerySection = (props: IGallerySectionProps) => {
  const { galleries } = props;

  const classes = useStyles();

  return (
    <SectionLayout>
      <SectionTitle>Gallery</SectionTitle>

      {galleries.map((gallery) => (
        <motion.div
          key={gallery.id}
          layoutId={gallery.id}
          className={classes.galleryCardWrapper}
        >
          <GalleryCard gallery={gallery} />
        </motion.div>
      ))}
    </SectionLayout>
  );
};
