import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { IGallery } from "../../lib/contracts";
import { AspectRatio } from "../atoms/aspect-ratio";
import { MotionTypography } from "../atoms/typography";

type IGalleryCardProps = {
  gallery: IGallery;
};

const useStyles = makeStyles(() => ({
  cover: {
    objectFit: "cover",
  },
}));

export const GalleryCard = (props: IGalleryCardProps) => {
  const { gallery } = props;
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        title={
          <MotionTypography layoutId={`${gallery.slug}-title`} variant="h5">
            {gallery.name}
          </MotionTypography>
        }
        subheader={
          <MotionTypography
            layoutId={`${gallery.slug}-subtitle`}
            variant="subtitle1"
          >
            {gallery.images.length} Photos
          </MotionTypography>
        }
      />

      <AspectRatio layoutId={gallery.images[0]} ratio={[16, 9]}>
        <Image
          className={classes.cover}
          layout="fill"
          src={gallery.images[0]}
        />
      </AspectRatio>
    </Card>
  );
};
