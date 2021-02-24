import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { ImageCard } from "../molecules/image-card";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.modal - 1,
  },

  closeButton: {
    zIndex: theme.zIndex.speedDial,
    position: "absolute",
    bottom: theme.spacing(8),
    margin: "auto",
  },
  wrapper: {},
  image: {
    width: "100%",
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

  return (
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
  );
};
