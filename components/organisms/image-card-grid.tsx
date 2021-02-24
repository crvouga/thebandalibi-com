import { Button } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { AnimateSharedLayout } from "framer-motion";
import { useRouter } from "next/router";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
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

  closeButton: {
    zIndex: theme.zIndex.speedDial,
    position: "absolute",
    bottom: theme.spacing(8),
    margin: "auto",
  },
}));

export const ImageCardGrid = (props: { images: string[] }) => {
  const { images } = props;

  const router = useRouter();
  const openImage = (image: string) => {
    router.push({
      query: {
        ...router.query,
        image: image,
      },
    });
  };

  const closeImage = () => {
    const { image, ...query } = router.query;
    router.push({
      query,
    });
  };

  const openedImage = router.query.image ? String(router.query.image) : null;

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
                openImage(image);
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
        open={Boolean(openedImage)}
        onClick={() => {
          closeImage();
        }}
      >
        <Button
          variant="contained"
          size="large"
          className={classes.closeButton}
          startIcon={<CloseIcon />}
          color="primary"
          onClick={() => {
            closeImage();
          }}
        >
          Close Picture
        </Button>

        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <TransformWrapper>
            <TransformComponent>
              {openedImage && <img src={openedImage} alt="test" />}
            </TransformComponent>
          </TransformWrapper>
        </div>
      </Backdrop>
    </AnimateSharedLayout>
  );
};
