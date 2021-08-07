import {
  Image,
  ImageViewModal,
  SLIDER_CONTAINER_CLASSNAME,
  SLIDER_ITEM_CLASSNAME,
  useSlider,
} from "@components/generic";
import { Container, Divider } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React, { useEffect, useState } from "react";

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
  const [sliderRef, slider] = useSlider({
    slidesPerView: 1,
    loop: true,
    showControls: true,
    move: (sliderState) => {
      state.setIndex(sliderState.index);
    },
  });

  const { setIndex } = state;
  const imagesString = images.map((image) => image.src).join(", ");

  useEffect(() => {
    setIndex(0);
  }, [setIndex, imagesString]);

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

      <Container maxWidth="sm" disableGutters>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></Box>
        <div ref={sliderRef} className={SLIDER_CONTAINER_CLASSNAME}>
          {images.map((image) => (
            <Box
              key={image.src}
              className={SLIDER_ITEM_CLASSNAME}
              sx={{
                minWidth: "100%",
                width: "100%",
                cursor: "pointer",
              }}
              onClick={() => state.setState("image-modal-opened")}
            >
              <Image aspectRatio={1} src={image.src} alt={image.alt} />
            </Box>
          ))}
        </div>

        <Box sx={{ display: "flex", overflow: "hidden" }}>
          {images.map((image, index) => (
            <Box
              onClick={() => {
                slider.moveToSlideRelative(index);
              }}
              key={image.src}
              className={SLIDER_ITEM_CLASSNAME}
              sx={{
                width: "33.33%",
                maxWidth: "33.33%",
                opacity: state.index === index ? 0.5 : 1,
                cursor: state.index === index ? "inherit" : "pointer",
              }}
            >
              <Image aspectRatio={1} src={image.src} alt={image.alt} />
            </Box>
          ))}

          <Box sx={{ display: "flex", overflow: "hidden" }}>
            {images.map((image, index) => (
              <Box
                onClick={() => {
                  slider.moveToSlideRelative(index);
                }}
                key={image.src}
                className={SLIDER_ITEM_CLASSNAME}
                sx={{
                  width: "33.33%",
                  maxWidth: "33.33%",
                  opacity: state.index === index ? 0.5 : 1,
                  cursor: state.index === index ? "inherit" : "pointer",
                }}
              >
                <Image aspectRatio={1} src={image.src} alt={image.alt} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};
