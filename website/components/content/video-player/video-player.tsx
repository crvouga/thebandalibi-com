import { AspectRatio } from "@components/generic";
import { IVideo } from "@data-access";
import { IEventEmitter, useEventEmitter } from "@utility";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

/* 

docs: https://www.npmjs.com/package/react-player

*/

export type IPlayerState = "playing" | "paused";

type IProgress = {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
};

type IDurationSeconds = number & { type: "DurationSeconds" };

const DurationSeconds = (unknownNumber: unknown) => {
  const number =
    typeof unknownNumber === "number" ? Number(unknownNumber) ?? 0 : 0;

  return Math.max(0, number) as IDurationSeconds;
};

export type IVideoPlayerEvents = {
  play: {
    video?: IVideo;
  };
  pause: {
    video?: IVideo;
  };
  duration: {
    durationSeconds: IDurationSeconds;
  };
  progress: {
    progress: IProgress;
  };
  ended: {};
  unstarted: {};
};

export const VideoPlayer = ({
  video,
  eventEmitter,
}: {
  video: IVideo | undefined;
  eventEmitter: IEventEmitter<IVideoPlayerEvents>;
}) => {
  const [state, setState] = useState<"playing" | "paused">("paused");

  useEventEmitter(eventEmitter, {
    play: (payload) => {
      if (video?.url === payload.video?.url) {
        setState("playing");
        return;
      }

      setState("paused");
    },
    pause: (payload) => {
      if (video?.url === payload.video?.url) {
        setState("paused");
      }
    },
  });

  return (
    <AspectRatio ratio={16 / 9}>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing={state === "playing"}
        url={video?.url}
        onDuration={(durationSeconds) => {
          eventEmitter.emit("duration", {
            durationSeconds: DurationSeconds(durationSeconds),
          });
        }}
        onProgress={(progress) => {
          eventEmitter.emit("progress", {
            progress,
          });
        }}
        onPlay={() => {
          eventEmitter.emit("play", {
            video,
          });
        }}
        onPause={() => {
          eventEmitter.emit("pause", {
            video,
          });
        }}
        onEnded={() => {
          eventEmitter.emit("ended", {});
        }}
        config={{
          onUnstarted: () => {
            eventEmitter.emit("unstarted", {});
          },
          playerVars: {
            autoplay: 1,
            modestBranding: 1,
          },
        }}
      />
    </AspectRatio>
  );
};
