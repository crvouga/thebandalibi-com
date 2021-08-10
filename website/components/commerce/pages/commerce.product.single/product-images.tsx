import {
  Image,
  ImageSwipeModal,
  SLIDER_ITEM_CLASSNAME,
  SwipeableViews,
} from "@components/generic";
import { IProduct } from "@data-access";
import { Button, ButtonGroup, Container, useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { clamp, useImagesWithDimensions } from "@utility";
import React, { createRef, useEffect, useRef, useState } from "react";
import classes from "./product-images.module.css";

export const useProductImagesState = ({ product }: { product: IProduct }) => {
  const [modalState, setModalState] = useState<"opened" | "closed">("closed");
  const [index, _setIndex] = useState(0);

  const setIndex = (index: number) => {
    _setIndex(clamp(0, product.images.length - 1, index));
  };

  return {
    modalState,
    setModalState,
    index,
    setIndex,
  };
};

type IProductImagesState = ReturnType<typeof useProductImagesState>;

type IProductImagesProps = {
  product: IProduct;
  state: IProductImagesState;
};

const ProductImageBackdrop = ({ product, state }: IProductImagesProps) => {
  const image = product.images[state.index];

  return (
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
        priority={state.index === 0}
        className={classes.dim}
        aspectRatio={1}
        src={image.src}
        alt={image.alt}
      />
    </Box>
  );
};

const ProductImageSliderButtons = ({ product, state }: IProductImagesProps) => {
  const theme = useTheme();

  return (
    <ButtonGroup
      variant="outlined"
      size="large"
      sx={{
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      }}
    >
      <Button
        disabled={state.index <= 0}
        onClick={() => {
          state.setIndex(state.index - 1);
        }}
      >
        <ArrowBackIcon />
      </Button>
      <Button
        disabled={state.index >= product.images.length - 1}
        onClick={() => {
          state.setIndex(state.index + 1);
        }}
      >
        <ArrowForwardIcon />
      </Button>
    </ButtonGroup>
  );
};

const ProductImagesMain = ({ product, state }: IProductImagesProps) => {
  return (
    <SwipeableViews
      index={state.index}
      onChangeIndex={(index) => {
        state.setIndex(index);
      }}
    >
      {product.images.map((image, index) => (
        <Box
          key={image.src}
          className={SLIDER_ITEM_CLASSNAME}
          sx={{
            minWidth: "100%",
            width: "100%",
            cursor: "pointer",
          }}
          onClick={() => {
            state.setModalState("opened");
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
  );
};

const percent = (top: number, bottom: number) => {
  return `${(top / bottom) * 100}%`;
};

const ProductImagesThumbnails = ({ product, state }: IProductImagesProps) => {
  const theme = useTheme();

  const images = product.images;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [itemRefs, setItemRefs] = useState<
    React.MutableRefObject<HTMLDivElement>[]
  >([]);

  useEffect(() => {
    setItemRefs((itemRefs) =>
      [...Array(images.length)].map(
        (_, index) => itemRefs[index] ?? createRef()
      )
    );
  }, [images.length]);

  useEffect(() => {
    const container = containerRef.current;
    const item = itemRefs[state.index]?.current;

    if (!(container && item)) {
      return;
    }

    const containerScrollLeft =
      item.offsetLeft - item.getBoundingClientRect().width;

    container.scrollTo({
      behavior: "smooth",
      left: containerScrollLeft,
    });
  }, [state.index, itemRefs]);

  return (
    <Box
      component="div"
      ref={containerRef}
      sx={{
        position: "relative",
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "scroll",
        backgroundColor: theme.palette.background.default,
        scrollSnapType: `x mandatory`,
      }}
    >
      {images.map((image, index) => (
        <Box
          component="div"
          ref={itemRefs[index]}
          key={image.src}
          onClick={() => {
            state.setIndex(index);
          }}
          className={state.index === index ? undefined : classes.dim}
          sx={{
            scrollSnapAlign: "start",
            minWidth: {
              xs: percent(1, 3),
              sm: percent(1, 4),
              md: percent(1, 6),
              lg: percent(1, 8),
              xl: percent(1, 12),
            },
          }}
        >
          <Image aspectRatio={1} src={image.src} alt={image.alt} />
        </Box>
      ))}
    </Box>
  );
};

const ProductImagesModal = ({ product, state }: IProductImagesProps) => {
  const imagesWithDimensions = useImagesWithDimensions(product.images);

  return (
    <ImageSwipeModal
      startIndex={state.index}
      open={state.modalState === "opened"}
      onClose={() => {
        state.setModalState("closed");
      }}
      images={imagesWithDimensions}
    />
  );
};

export const ProductImages = (props: IProductImagesProps) => {
  return (
    <>
      <ProductImagesModal {...props} />

      <Box
        sx={{
          position: "relative",
        }}
      >
        <ProductImageBackdrop {...props} />

        <Container
          maxWidth="sm"
          disableGutters
          sx={{
            position: "relative",
          }}
        >
          <ProductImagesMain {...props} />
          <ProductImageSliderButtons {...props} />
        </Container>
      </Box>

      <ProductImagesThumbnails {...props} />
    </>
  );
};
