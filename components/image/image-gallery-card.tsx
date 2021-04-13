import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import React from "react";
import { IImageGallery } from "../../lib/data-access/image-gallery";
import { abbreviateNumber } from "../../lib/utility";
import { AspectRatio } from "../shared/aspect-ratio";
import { CardHeader } from "../shared/card-header";

const useStyles = makeStyles(() => ({
  cover: {
    objectFit: "cover",
  },
  imageGridContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },
  imageGridItem: {
    width: "50%",
  },
  image: {},
}));

export const ImageGalleryCardMedia = ({
  imageGallery,
}: {
  imageGallery: IImageGallery;
}) => {
  const classes = useStyles();

  if (imageGallery.images.length < 4) {
    return (
      <AspectRatio ratio={[16, 9]}>
        <Image
          className={classes.image}
          objectFit="cover"
          layout="fill"
          src={imageGallery.images[0].url}
        />
      </AspectRatio>
    );
  }

  return (
    <AspectRatio ratio={1.75}>
      <div className={classes.imageGridContainer}>
        {imageGallery.images.slice(0, 4).map((image) => (
          <AspectRatio
            key={image.url}
            ratio={1.75}
            className={classes.imageGridItem}
          >
            <Image
              className={classes.image}
              key={image.url}
              layout="fill"
              objectFit="cover"
              alt={`image gallery preview for ${imageGallery.name}`}
              src={image.url}
            />
          </AspectRatio>
        ))}
      </div>
    </AspectRatio>
  );
};

export const ImageGalleryCard = React.forwardRef(
  (
    {
      imageGallery,
    }: {
      imageGallery: IImageGallery;
    },
    ref
  ) => {
    return (
      <Card ref={ref}>
        <ImageGalleryCardMedia imageGallery={imageGallery} />
        <CardHeader
          titleTypographyProps={{ noWrap: true }}
          title={imageGallery.name}
          subheader={`${abbreviateNumber(imageGallery.imageCount)} Photos`}
        />
      </Card>
    );
  }
);
