import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Image from "next/image";
import React from "react";
import { IGallery } from "../../lib/contracts";
import { AspectRatio } from "../atoms/aspect-ratio";

type IGalleryCardProps = {
  gallery: IGallery;
};

const useStyles = makeStyles(() => ({
  cover: {
    objectFit: "cover",
  },
}));

const useStylesCardHeader = makeStyles(() => ({
  root: {
    overflow: "hidden",
  },
  content: {
    overflow: "hidden",
  },
}));

export const GalleryCard = React.forwardRef((props: IGalleryCardProps, ref) => {
  const { gallery } = props;
  const classes = useStyles();
  const classesCardHeader = useStylesCardHeader();

  return (
    <Card ref={ref}>
      <CardHeader
        classes={classesCardHeader}
        titleTypographyProps={{ noWrap: true }}
        title={gallery.name}
        subheader={`${gallery.images.length} Photos`}
      />

      <AspectRatio ratio={[16, 9]}>
        <Image
          className={classes.cover}
          layout="fill"
          src={gallery.images[0].url}
        />
      </AspectRatio>
    </Card>
  );
});
