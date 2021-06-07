import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import clsx from "clsx";
import Image from "next/image";
import { IVideo } from "@data-access";
import { toYouTubeThumbnailUrl } from "../../utility/youtube";
import { AspectRatio } from "@ui";

export const VIDEO_THUMBNAIL_ASPECT_RATIO = 1.75;

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
}));

export const VideoThumbnail = ({
  video,
  ratio,
  className,
}: {
  video?: IVideo;
  ratio?: number;
  className?: string;
}) => {
  const classes = useStyles();
  return (
    <Box position="relative" width="100%" height="100%">
      <AspectRatio
        className={clsx(classes.root, className)}
        ratio={ratio ?? VIDEO_THUMBNAIL_ASPECT_RATIO}
      >
        <Image
          objectFit="cover"
          layout="fill"
          src={toYouTubeThumbnailUrl(video?.url ?? "")}
          alt={video?.name}
        />
      </AspectRatio>
    </Box>
  );
};

export const VideoThumbnailSkeleton = () => {
  return (
    <AspectRatio ratio={VIDEO_THUMBNAIL_ASPECT_RATIO}>
      <Skeleton variant="rect" width="100%" height="100%" />
    </AspectRatio>
  );
};
