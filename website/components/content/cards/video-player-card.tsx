import { IVideo } from "@data-access";
import { IEventEmitter } from "@utility";
import React, { useState } from "react";
import { IVideoPlayerEvents, VideoPlayer } from "../video-player";
import { VideoCard } from "./video-card";

type IVideoPlayerCardState = "idle" | "clicked";

export const VideoPlayerCard = ({
  video,
  eventEmitter,
}: {
  video: IVideo;
  eventEmitter: IEventEmitter<IVideoPlayerEvents>;
}) => {
  const [state, setState] = useState<IVideoPlayerCardState>("idle");

  if (state === "idle") {
    return (
      <VideoCard
        video={video}
        subtitle="Watch Video"
        onClick={() => {
          setState("clicked");
        }}
      />
    );
  }

  return <VideoPlayer eventEmitter={eventEmitter} video={video} />;
};
