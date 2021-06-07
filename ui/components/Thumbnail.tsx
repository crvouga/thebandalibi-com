import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import { AspectRatio } from "@ui";
import clsx from "clsx";
import Image from "next/image";

export const VIDEO_THUMBNAIL_ASPECT_RATIO = 1.75;

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
}));

export const Thumbnail = ({
  src,
  alt,
  ratio = VIDEO_THUMBNAIL_ASPECT_RATIO,
  className,
}: {
  src: string;
  alt: string;
  ratio?: number;
  className?: string;
}) => {
  const classes = useStyles();
  return (
    <Box position="relative" width="100%" height="100%">
      <AspectRatio className={clsx(classes.root, className)} ratio={ratio}>
        <Image objectFit="cover" layout="fill" src={src} alt={alt} />
      </AspectRatio>
    </Box>
  );
};

export const ThumbnailSkeleton = () => {
  return (
    <AspectRatio ratio={VIDEO_THUMBNAIL_ASPECT_RATIO}>
      <Skeleton variant="rect" width="100%" height="100%" />
    </AspectRatio>
  );
};
