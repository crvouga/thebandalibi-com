import {
  Box,
  Card,
  CardActionArea,
  Container,
  IconButton,
  useTheme,
} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import { toYouTubeThumbnailUrl } from "../../lib/utility/youtube";
import { Avatar } from "../shared/avatar";
import { CloseIconButton } from "../shared/close-icon-button";
import { useAnimationStyles } from "../shared/use-animation-styles";
import { VideoCardSubheader } from "./video-card-subheader";
import { VideoPlayPauseIcon } from "./video-play-pause-icon";
import { useVideoState } from "./video-state";

const useStyles = makeStyles((theme) => ({
  videoModalMinimized: {
    width: "100vw",
    position: "fixed",
    zIndex: theme.zIndex.appBar - 1,
    bottom: 0,
  },

  card: {
    backgroundColor: fade(theme.palette.background.paper, 0.9),
    userSelect: "none",
    cursor: "pointer",
  },
}));

export const VideoPlayerModalMinimized = () => {
  const classes = useStyles();
  const animationClasses = useAnimationStyles();
  const videoState = useVideoState();
  const theme = useTheme();
  return (
    <Slide direction="up" in={videoState.modalState === "minimized"}>
      <div className={classes.videoModalMinimized}>
        <Container maxWidth="md" disableGutters>
          <Card className={classes.card} variant="outlined">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <CardActionArea
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: theme.spacing(1, 0, 1, 2),
                  flex: `1 1 auto`,
                  overflow: "hidden",
                }}
                onClick={() => {
                  videoState.setModalState("opened");
                }}
              >
                <Box marginRight={2}>
                  <Avatar
                    variant="rounded"
                    src={toYouTubeThumbnailUrl(
                      videoState.currentVideo?.url ?? ""
                    )}
                  />
                </Box>
                <Box style={{ flex: `1 1 auto`, overflow: "hidden" }}>
                  <Typography noWrap>
                    {videoState.currentVideo?.name}
                  </Typography>
                  {videoState.currentVideo && (
                    <VideoCardSubheader
                      className={clsx({
                        [animationClasses.flicker]: videoState.isPlaying,
                      })}
                      video={videoState.currentVideo}
                    />
                  )}
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
            </Box>
          </Card>
        </Container>
      </div>
    </Slide>
  );
};
