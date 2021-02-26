import NextImage from "next/image";
import { IImage } from "../../lib/domain";
import { AspectRatio } from "./aspect-ratio";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  aspectRatio: {
    position: "relative",
    width: "100%",
  },
}));

export const Image = (props: { image: IImage; alt: string }) => {
  const { image, alt } = props;

  const classes = useStyles();

  return (
    <AspectRatio
      style={{ width: "100%", position: "relative" }}
      className={classes.aspectRatio}
      ratio={image.metadata.dimensions.aspectRatio}
    >
      <NextImage layout="fill" src={image.url} alt={alt} />
    </AspectRatio>
  );
};
