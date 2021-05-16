import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { toYouTubeThumbnailUrl } from "../../../lib/utility/youtube";
import { AspectRatio } from "../../shared/aspect-ratio";
import { CloseIconButton } from "../../shared/close-icon-button";
import { useAnimationStyles } from "../../shared/use-animation-styles";
import { VideoPlayPauseIcon } from "../video-play-pause-icon";
import { useVideoState } from "../video-state";

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

  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const VideoPlayerModalMinimized = () => {
  const classes = useStyles();
  const animationClasses = useAnimationStyles();
  const videoState = useVideoState();

  return (
    <Slide direction="up" in={videoState.modalState === "minimized"}>
      <div className={classes.wrapper}>
        <Paper className={classes.card}>
          <div className={classes.content}>
            <CardActionArea
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flex: `1 1 auto`,
                overflow: "hidden",
              }}
              onClick={() => {
                videoState.setModalState("opened");
              }}
            >
              <Box width="5em" marginRight={1}>
                <AspectRatio ratio={1}>
                  <Image
                    objectFit="cover"
                    layout="fill"
                    src={toYouTubeThumbnailUrl(
                      videoState.currentVideo?.url ?? ""
                    )}
                  />
                </AspectRatio>
              </Box>
              <Box style={{ flex: `1 1 auto`, overflow: "hidden" }}>
                <Typography
                  className={clsx({
                    [animationClasses.flicker]: videoState.isPlaying,
                  })}
                  noWrap
                >
                  {videoState.currentVideo?.name}
                </Typography>
              </Box>
            </CardActionArea>

            <Box display="flex" flex={1} paddingRight={2}>
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
          </div>
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
        </Paper>
      </div>
    </Slide>
  );
};
