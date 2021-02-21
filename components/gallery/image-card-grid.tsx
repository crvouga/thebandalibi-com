import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "../reveal-animation";
import { ImageCard } from "./image-card";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
  },

  cardWrapper: {
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

  cardWrapperSelected: {
    width: "100vw",
    maxWidth: "100vh",

    zIndex: theme.zIndex.modal,
    position: "absolute",
    top: 0,
    [theme.breakpoints.down("xs")]: {
      left: 0,
    },
  },
}));

export const ImageCardGrid = (props: { images: string[] }) => {
  const { images } = props;

  const [selected, setSelected] = useState<string | null>(null);

  const classes = useStyles();

  return (
    <AnimateSharedLayout type="crossfade">
      <div className={classes.cardContainer}>
        {images.map((image) => (
          <motion.div
            className={classes.cardWrapper}
            layoutId={image}
            key={image}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setSelected(image);
            }}
          >
            <Reveal>
              <ImageCard image={image} />
            </Reveal>
          </motion.div>
        ))}
      </div>

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
              layoutId={selected}
              className={classes.cardWrapperSelected}
            >
              <ImageCard image={selected} />
            </motion.div>
          )}
        </AnimatePresence>
      </Backdrop>
    </AnimateSharedLayout>
  );
};
