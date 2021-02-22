import Image from "next/image";
import { IVideo } from "../../../lib/contracts";
import { toYouTubeThumbnailUrl } from "../../../lib/youtube/thumbnail";
import { AspectRatio } from "../../atoms/aspect-ratio";
import { SEO_KEYWORD } from "../meta";

type IVideoThumbnailProps = {
  video: IVideo;
};

export const VideoThumbnail = (props: IVideoThumbnailProps) => {
  const { video } = props;

  return (
    <AspectRatio ratio={[1.75, 1]}>
      <Image
        layout="fill"
        src={toYouTubeThumbnailUrl(video.url)}
        alt={`${video.name} ${SEO_KEYWORD}`}
      />
    </AspectRatio>
  );
};
