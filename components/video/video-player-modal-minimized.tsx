import { Card, Container } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import { IVideo } from "../../lib/domain";
import { toYouTubeThumbnailUrl } from "../../lib/utility/youtube";
import { NAV_BAR_HEIGHT } from "../navigation/navigation-constants";
import { Avatar } from "../shared/avatar";
import { CardHeader } from "../shared/card-header";
import { CloseIconButton } from "../shared/close-icon-button";
import { TogglePlayerButton } from "./video";
import { useVideoState } from "./video-state";

const GAP = "2px";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    position: "fixed",
    zIndex: theme.zIndex.appBar - 1,
    bottom: 0,
    [theme.breakpoints.down("xs")]: {
      bottom: `calc(${NAV_BAR_HEIGHT} - ${GAP})`,
    },
  },
  clickable: {
    cursor: "pointer",
  },
  "@keyframes flicker": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 2 / 3,
    },
    "100%": {
      opacity: 1,
    },
  },
  flicker: {
    animation: `$flicker 1s infinite`,
  },
}));

export const VideoPlayerModalMinimized = ({
  currentVideo,
}: {
  currentVideo: IVideo;
}) => {
  const classes = useStyles();
  const videoState = useVideoState();

  return (
    <div className={classes.root}>
      <Container maxWidth="md" disableGutters>
        <Slide direction="up" in={videoState.modalState === "minimized"}>
          <Card
            className={classes.clickable}
            onClick={() => {
              videoState.setModalState("opened");
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  variant="rounded"
                  src={toYouTubeThumbnailUrl(currentVideo?.url ?? "")}
                />
              }
              titleTypographyProps={{ noWrap: true }}
              title={currentVideo?.name}
              subheader={
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  noWrap
                  className={clsx({
                    [classes.flicker]: videoState.playerState === "playing",
                  })}
                >
                  {videoState.playerState === "playing" ? "Playing" : "Paused"}
                </Typography>
              }
              action={
                <>
                  <TogglePlayerButton
                    playerState={videoState.playerState}
                    onClick={(event) => {
                      event.stopPropagation();
                      videoState.togglePlayerState();
                    }}
                  />
                  <CloseIconButton
                    onClick={(event) => {
                      event.stopPropagation();
                      videoState.setModalState("closed");
                    }}
                  />
                </>
              }
            />
          </Card>
        </Slide>
      </Container>
    </div>
  );
};
