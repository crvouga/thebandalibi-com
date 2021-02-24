import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { ImageCard } from "../molecules/image-card";

const useStyles = makeStyles((theme) => ({
  pointer: {
    cursor: "pointer",
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
      <GridContainer layoutId="images">
        {images
          .filter((image) => Boolean(image))
          .map((image) => (
            <GridItem
              clickable
              layoutId={image}
              key={image}
              onClick={() => {
                setSelected(image);
              }}
            >
              <Reveal>
                <ImageCard image={image} />
              </Reveal>
            </GridItem>
          ))}
      </GridContainer>

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
