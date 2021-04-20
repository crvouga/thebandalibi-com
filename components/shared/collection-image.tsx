import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "./aspect-ratio";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },

  item: {
    width: "50%",
  },
}));

export const CollectionImage = ({
  aspectRatio,
  images,
}: {
  aspectRatio: number;
  images: string[];
}) => {
  const classes = useStyles();

  if (images.length < 1) {
    return null;
  }

  if (images.length < 4) {
    return (
      <AspectRatio ratio={aspectRatio}>
        <Image objectFit="cover" layout="fill" src={images[0]} />
      </AspectRatio>
    );
  }

  return (
    <AspectRatio ratio={aspectRatio}>
      <div className={classes.container}>
        {images.slice(0, 4).map((image, index) => (
          <AspectRatio key={image} ratio={aspectRatio} className={classes.item}>
            <Image
              key={image}
              layout="fill"
              objectFit="cover"
              alt={`collection image position ${index}`}
              src={image}
            />
          </AspectRatio>
        ))}
      </div>
    </AspectRatio>
  );
};
