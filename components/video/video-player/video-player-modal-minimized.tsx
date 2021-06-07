import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import Slide from "@material-ui/core/Slide";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { toYouTubeThumbnailUrl } from "../../../utility/youtube";
import { AspectRatio } from "../../shared/aspect-ratio";
import { CloseIconButton } from "../../shared/close-icon-button";
import { useAnimationStyles } from "../../shared/use-animation-styles";
import { VideoPlayPauseIcon } from "../video-play-pause-icon";
import { useVideoState } from "../../../features/content/data-access/video-state";
import { VIDEO_THUMBNAIL_ASPECT_RATIO } from "../video-thumbnail";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
    position: "fixed",
    zIndex: theme.zIndex.appBar - 1,
    bottom: 0,
  },

  card: {
    userSelect: "none",
    cursor: "pointer",
    maxWidth: theme.breakpoints.width("sm"),
    margin: "auto",
  },
}));

const HEIGHT = 64;

export const VideoPlayerModalMinimized = () => {
  const classes = useStyles();
  const animationClasses = useAnimationStyles();
  const videoState = useVideoState();

  const theme = useTheme();

  return (
    <Slide direction="up" in={videoState.modalState === "minimized"}>
      <div className={classes.wrapper}>
        <Box
          component={Paper}
          //@ts-ignore
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
