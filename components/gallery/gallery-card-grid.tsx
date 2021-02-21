import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IGallery } from "../../lib/contracts";
import { Reveal } from "../reveal-animation";
import { GalleryCard } from "./gallery-card";

const useStyles = makeStyles((theme) => ({
  galleryViewWrapper: {},
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

  backdrop: {
    zIndex: theme.zIndex.drawer - 1,
  },
}));

export const GalleryCardGrid = (props: { galleries: IGallery[] }) => {
  const { galleries } = props;

  const classes = useStyles();

  return (
    <div>
      {galleries.map((gallery) => (
        <Link key={gallery.id} href={`/gallery/${gallery.slug}`}>
          <motion.div
            layoutId={gallery.id}
            className={classes.galleryCardWrapper}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
          >
            <Reveal>
              <GalleryCard gallery={gallery} />
            </Reveal>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};
