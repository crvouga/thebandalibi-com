import {
  Image,
  ImageViewModal,
  PaginationDots,
  SwipeableViews,
  useBreakpointDown,
} from "@components/generic";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import React, { useState } from "react";
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
  return (
    <>
      <ImageViewModal
        startIndex={state.index}
        open={state.state === "image-modal-opened"}
        onClose={() => state.setState("default")}
        images={images.map((image) => ({
          src: image.src,
          width: 1000,
          height: 1000,
        }))}
      />

      <SwipeableViews index={state.index} onChangeIndex={state.setIndex}>
        {images.map((image) => (
          <Image
            onClick={() => state.setState("image-modal-opened")}
            key={image.src}
            aspectRatio={1}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </SwipeableViews>

      {images.length > 1 && (
        <Box width="100%" display="flex" justifyContent="center" paddingTop={1}>
          <PaginationDots
            hideArrows
            page={state.index + 1}
            count={images.length}
            onChange={(page) => state.setIndex(page - 1)}
          />
        </Box>
      )}
    </>
  );
};
