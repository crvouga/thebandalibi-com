import Skeleton from "@material-ui/lab/Skeleton";
import Image from "next/image";
import { IVideo } from "../../lib/domain";
import { toYouTubeThumbnailUrl } from "../../lib/utility/youtube";
import { AspectRatio } from "../@shared/aspect-ratio";

const ASPECT_RATIO = 1.75;

export const VideoThumbnail = ({ video }: { video: IVideo }) => {
  return (
    <AspectRatio ratio={ASPECT_RATIO}>
      <Image
        layout="fill"
        src={toYouTubeThumbnailUrl(video.url)}
        alt={video.name}
      />
    </AspectRatio>
  );
};

export const VideoThumbnailSkeleton = () => {
  return (
    <AspectRatio ratio={ASPECT_RATIO}>
      <Skeleton variant="rect" width="100%" height="100%" />
    </AspectRatio>
  );
};
