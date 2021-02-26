import { IVideo } from "../../lib/contracts";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { VideoThumbnailCard } from "../molecules/video-thumbnail-card";

export const VideoCardGrid = ({
  videos,
  onClick,
}: {
  videos: IVideo[];
  onClick?: (video: IVideo, index: number) => void;
}) => {
  return (
    <GridContainer>
      {videos.map((video, index) => (
        <GridItem
          layoutId={video.url}
          key={video.url}
          onClick={() => {
            onClick?.(video, index);
          }}
          clickable={Boolean(onClick)}
        >
          <Reveal>
            <VideoThumbnailCard video={video} />
          </Reveal>
        </GridItem>
      ))}
    </GridContainer>
  );
};
