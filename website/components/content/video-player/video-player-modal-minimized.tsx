import { AspectRatio, CloseIconButton } from "@components/generic";
import { IVideo, useVideoPlayerState } from "@data-access";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import Slide from "@material-ui/core/Slide";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { toYouTubeThumbnailUrl } from "@utility";
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

const HEIGHT = 64;
const VIDEO_THUMBNAIL_ASPECT_RATIO = 16 / 9;

export const VideoPlayerPopUp = ({ bottom }: { bottom: number | string }) => {
  const theme = useTheme();
  const videoState = useVideoPlayerState();

  return (
    <Slide direction="up" in={videoState.modalState === "minimized"}>
      <Box
        sx={{
          width: "100vw",
          position: "fixed",
          zIndex: theme.zIndex.appBar,
          bottom: bottom,
        }}
      >
        <Box
          style={{ cursor: "pointer" }}
          sx={{
            bgcolor: "background.paper",
            maxWidth: theme.breakpoints.values.sm,
            margin: "auto",
            width: "100%",
          }}
          onClick={() => {
            videoState.setModalState("opened");
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: VIDEO_THUMBNAIL_ASPECT_RATIO * HEIGHT,
                height: HEIGHT,
                minWidth: VIDEO_THUMBNAIL_ASPECT_RATIO * HEIGHT,
                minHeight: HEIGHT,
                marginRight: 1,
              }}
            >
              <AspectRatio ratio={VIDEO_THUMBNAIL_ASPECT_RATIO}>
                {videoState.currentVideo ? (
                  <Image
                    objectFit="cover"
                    layout="fill"
                    src={toYouTubeThumbnailUrl(videoState.currentVideo.url)}
                  />
                ) : (
                  <></>
                )}
              </AspectRatio>
            </Box>

            <Typography noWrap>
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
      </Box>
    </Slide>
  );
};
