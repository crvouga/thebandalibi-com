import { IVideo } from "@data-access";
import { IEventEmitter } from "@utility";
import { useState } from "react";
import { VideoCard } from "../cards";
import { IVideoPlayerEvents, VideoPlayer } from "./video-player";

type IStatus = "idle" | "not-idle";

export const VideoPlayerCard = ({
  video,
  eventEmitter,
}: {
  video: IVideo;
  eventEmitter: IEventEmitter<IVideoPlayerEvents>;
}) => {
  const [state, setState] = useState<IStatus>("idle");

  const handleOpen = () => {
    setState("not-idle");
  };

  if (state === "idle") {
    return <VideoCard video={video} onClick={handleOpen} />;
  }

  return <VideoPlayer video={video} eventEmitter={eventEmitter} />;
};
