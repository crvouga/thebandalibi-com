import { Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import { IGallery } from "../../lib/contracts";
import { GalleryCard } from "./gallery-card";
import { Reveal } from "../reveal-animation";

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

export const GalleryGrid = (props: { galleries: IGallery[] }) => {
  const { galleries } = props;

  const classes = useStyles();

  const [selected, setSelected] = useState<IGallery | null>(null);

  return (
    <AnimateSharedLayout type="crossfade">
      {galleries.map((gallery) => (
        <motion.div
          key={gallery.id}
          layoutId={gallery.id}
          className={classes.galleryCardWrapper}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setSelected(gallery);
          }}
        >
          <Reveal>
            <GalleryCard gallery={gallery} />
          </Reveal>
        </motion.div>
      ))}

      <Backdrop
        className={classes.backdrop}
        open={Boolean(selected)}
        onClick={() => {
          setSelected(null);
        }}
      >
        <AnimatePresence>
          {selected && (
            <motion.div
              layoutId={selected.id}
              className={classes.galleryViewWrapper}
            >
              <GalleryCard gallery={selected} />
            </motion.div>
          )}
        </AnimatePresence>
      </Backdrop>
    </AnimateSharedLayout>
  );
};
