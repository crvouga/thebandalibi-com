import {
  Image,
  ImageSwipeModal,
  SLIDER_ITEM_CLASSNAME,
  SwipeableViews,
  UniformGrid,
} from "@components/generic";
import { Container, useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useImagesWithDimensions } from "@utility";
import React, { useEffect, useState } from "react";
import classes from "./product-images.module.css";

const percentage = (top: number, bottom: number) => {
  return `${(top / bottom) * 100}%`;
};

type IProductImagesState = "default" | "image-modal-opened";

export const useProductImagesState = () => {
  const [state, setState] = useState<IProductImagesState>("default");

  const [index, setIndex] = useState(0);

  return {
    state,
    setState,
    index,
    setIndex,
  };
};

export const ProductImages = ({
  images,
  state,
}: {
  images: { src: string; alt: string }[];
  state: ReturnType<typeof useProductImagesState>;
}) => {
  const theme = useTheme();
  const imagesWithDimensions = useImagesWithDimensions(images);
  return (
    <>
      <ImageSwipeModal
        startIndex={state.index}
        open={state.state === "image-modal-opened"}
        onClose={() => {
          state.setState("default");
        }}
        images={imagesWithDimensions}
      />
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            overflow: "hidden",
          }}
        >
          <Image
            className={classes.dim}
            aspectRatio={1}
            src={images[state.index].src}
            alt={images[state.index].alt}
          />
        </Box>

        <Container maxWidth="sm" disableGutters>
          <SwipeableViews
            index={state.index}
            onChangeIndex={(index) => {
              state.setIndex(index);
            }}
          >
            {images.map((image, index) => (
              <Box
                key={image.src}
                className={SLIDER_ITEM_CLASSNAME}
                sx={{
                  minWidth: "100%",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  state.setState("image-modal-opened");
                }}
              >
                <Image
                  priority={index === 0}
                  aspectRatio={1}
                  src={image.src}
                  alt={image.alt}
                />
              </Box>
            ))}
          </SwipeableViews>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          overflow: "hidden",
          backgroundColor: theme.palette.background.default,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={image.src}
            onClick={() => {
              state.setIndex(index);
            }}
            className={state.index !== index ? classes.dim : undefined}
            sx={{
              minWidth: {
                xs: percentage(1, 3),
                sm: percentage(1, 4),
                md: percentage(1, 6),
                lg: percentage(1, 8),
                xl: percentage(1, 12),
              },
            }}
          >
            <Image aspectRatio={1} src={image.src} alt={image.alt} />
          </Box>
        ))}
      </Box>
    </>
  );
};
