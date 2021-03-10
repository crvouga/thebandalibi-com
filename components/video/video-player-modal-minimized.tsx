import { Card, Container } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { toYouTubeThumbnailUrl } from "../../lib/utility/youtube";
import { Avatar } from "../@shared/avatar";
import { CardHeader } from "../@shared/card-header";
import { CloseIconButton } from "../@shared/close-icon-button";
import { NAV_BAR_HEIGHT } from "../app/navigation/navigation-constants";
import { TogglePlayerButton, toSubtitle } from "./video";
import { useVideoState } from "./video-state";
import { IVideo } from "../../lib/domain";

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
              subheaderTypographyProps={{ noWrap: true }}
              subheader={toSubtitle(currentVideo)}
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
