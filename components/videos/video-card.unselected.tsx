import Card, { CardProps } from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Image from "next/image";
import { IVideo } from "../../lib/contracts";
import { AspectRatio } from "../aspect-ratio";
import { toYouTubeThumbnailUrl } from "../../lib/youtube/thumbnail";

type IVideoCardUnselectedProps = CardProps & {
  video: IVideo;
};

export const VideoCardUnselected = (props: IVideoCardUnselectedProps) => {
  const { video, ...cardProps } = props;

  return (
    <Card {...cardProps}>
      <CardHeader title={video.name} />

      <AspectRatio ratio={[16, 9]}>
        <Image layout="fill" src={toYouTubeThumbnailUrl(video.url)} />
      </AspectRatio>
    </Card>
  );
};
