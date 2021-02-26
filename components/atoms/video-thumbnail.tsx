import Image from "next/image";
import { IVideo } from "../../lib/domain";
import { toYouTubeThumbnailUrl } from "../../lib/utility/youtube";
import { AspectRatio } from "./aspect-ratio";
import { SEO_KEYWORD } from "../molecules/meta";

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
