import { Button, ButtonGroup, Dialog, Slide, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import CloseIcon from "@material-ui/icons/Close";
import React, { useEffect, useState } from "react";
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

const clamp = (lower: number, upper: number, number: number) =>
  Math.min(Math.max(lower, number), upper);

export const ImageCardGrid = (props: { images: string[] }) => {
  const { images } = props;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const image = selectedIndex === null ? null : images[selectedIndex];

  useEffect(() => {
    console.log({ selectedIndex, image });
  }, [selectedIndex]);

  const classesDialog = useStylesDialog();

  return (
    <React.Fragment>
      <Dialog
        classes={classesDialog}
        TransitionComponent={SlideUp}
        fullScreen
        open={Boolean(selectedIndex)}
      >
        {image && <ImageView image={image} />}

        <Toolbar>
          <ButtonGroup fullWidth size="large" orientation="horizontal">
            <Button
              onClick={() => {
                setSelectedIndex((index) => (index ?? 0) - 1);
              }}
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                setSelectedIndex(null);
              }}
            >
              Close
            </Button>
            <Button
              onClick={() => {
                setSelectedIndex((index) => {
                  return (index ?? 0) + 1;
                });
              }}
            >
              Next
            </Button>
          </ButtonGroup>
        </Toolbar>
      </Dialog>

      <GridContainer layoutId="images">
        {images
          .filter((image) => Boolean(image))
          .map((image, index) => (
            <GridItem
              clickable
              layoutId={image}
              key={image}
              onClick={() => {
                setSelectedIndex(index);
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
