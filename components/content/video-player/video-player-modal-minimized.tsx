import { IVideo, useVideoPlayerState } from "@data-access";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { toYouTubeThumbnailUrl } from "@utility";
import clsx from "clsx";
import {
  AspectRatio,
  CloseIconButton,
  useAnimationStyles,
} from "generic-components";
import Image from "next/image";
import React from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";

const VideoPlayPauseIcon = ({
  video,
  size,
}: {
  video: IVideo;
  size?: string;
}) => {
  const videoState = useVideoPlayerState();

  const isCurrentVideo = videoState.currentVideo?.url === video.url;

  const sizeStyles = size
    ? {
        width: size,
        height: size,
      }
    : {};

  const style = {
    ...sizeStyles,
  };

  return isCurrentVideo && videoState.playerState === "playing" ? (
    <MdPause style={style} />
  ) : (
    <MdPlayArrow style={style} />
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
    position: "fixed",
    zIndex: theme.zIndex.appBar - 1,
    bottom: ({ bottom }: { bottom: number | string }) => bottom,
  },

  card: {
    userSelect: "none",
    cursor: "pointer",
    maxWidth: theme.breakpoints.values["sm"],
    margin: "auto",
  },
}));

const HEIGHT = 64;
const VIDEO_THUMBNAIL_ASPECT_RATIO = 16 / 9;

export const VideoPlayerPopUp = ({ bottom }: { bottom: number | string }) => {
  const classes = useStyles({ bottom });
  const animationClasses = useAnimationStyles();
  const videoState = useVideoPlayerState();

  const theme = useTheme();

  return (
    <Slide direction="up" in={videoState.modalState === "minimized"}>
      <div className={classes.wrapper}>
        <Box
          component={Paper}
          // @ts-ignore
          elevation={12}
          maxWidth={theme.breakpoints.width("sm")}
          margin="auto"
          width="100%"
          style={{ cursor: "pointer" }}
          onClick={() => {
            videoState.setModalState("opened");
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            height="100%"
            justifyContent="space-between"
          >
            <Box
              width={VIDEO_THUMBNAIL_ASPECT_RATIO * HEIGHT}
              height={HEIGHT}
              minWidth={VIDEO_THUMBNAIL_ASPECT_RATIO * HEIGHT}
              minHeight={HEIGHT}
              marginRight={1}
            >
              <AspectRatio ratio={VIDEO_THUMBNAIL_ASPECT_RATIO}>
                <Image
                  objectFit="cover"
                  layout="fill"
                  src={toYouTubeThumbnailUrl(
                    videoState.currentVideo?.url ?? ""
                  )}
                />
              </AspectRatio>
            </Box>

            <Typography
              className={clsx({
                [animationClasses.flicker]: videoState.isPlaying,
              })}
              noWrap
            >
              {videoState.currentVideo?.name ?? "No video is selected"}
            </Typography>

            <Box
              display="flex"
              justifyContent="flex-end"
              flex={1}
              marginRight={2}
            >
              {videoState.currentVideo && (
                <IconButton
                  aria-label="play pause toggle button"
                  onClick={(event) => {
                    event.stopPropagation();
                    videoState.togglePlayerState();
                  }}
                >
                  <VideoPlayPauseIcon video={videoState.currentVideo} />
                </IconButton>
              )}

              <CloseIconButton
                onClick={(event) => {
                  event.stopPropagation();
                  videoState.closeVideo();
                }}
              />
            </Box>
          </Box>

          <LinearProgress
            value={
              (videoState.progress.playedSeconds / videoState.durationSeconds) *
              100
            }
            valueBuffer={
              (videoState.progress.loadedSeconds / videoState.durationSeconds) *
              100
            }
            variant="determinate"
          />
        </Box>
      </div>
    </Slide>
  );
};
