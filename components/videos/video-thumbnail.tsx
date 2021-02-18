import Image from "next/image";
import { IVideo } from "../../lib/contracts";
import { toYouTubeThumbnailUrl } from "../../lib/youtube/thumbnail";
import { AspectRatio } from "../aspect-ratio";

type IVideoThumbnailProps = {
  video: IVideo;
};

export const VideoThumbnail = (props: IVideoThumbnailProps) => {
  const { video } = props;

  return (
    <AspectRatio ratio={[16, 9]}>
      <Image
        layout="fill"
        src={toYouTubeThumbnailUrl(video.url)}
        alt={`${video.name} the band alibi`}
      />
    </AspectRatio>
  );
};
