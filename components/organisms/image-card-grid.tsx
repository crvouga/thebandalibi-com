import { Button, Dialog, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import React, { useState } from "react";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { ImageCard } from "../molecules/image-card";
import { ImageView } from "./image-view";

const useStylesDialog = makeStyles((theme) => ({
  container: {},
}));

const SlideUp = React.forwardRef((props: TransitionProps, ref) => (
  <Slide ref={ref} direction="up" {...props} />
));

export const ImageCardGrid = (props: { images: string[] }) => {
  const { images } = props;

  const [selected, setSelected] = useState<string | null>(null);

  const classesDialog = useStylesDialog();

  return (
    <React.Fragment>
      <Dialog
        classes={classesDialog}
        TransitionComponent={SlideUp}
        fullScreen
        open={Boolean(selected)}
      >
        {selected && <ImageView image={selected} />}

        <Button
          onClick={() => {
            setSelected(null);
          }}
          fullWidth
          size="large"
        >
          Close
        </Button>
      </Dialog>

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
    </React.Fragment>
  );
};
