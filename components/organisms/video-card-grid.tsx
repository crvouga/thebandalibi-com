import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { IVideo } from "../../lib/contracts";
import { CloseIconButton } from "../atoms/close-icon-button";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { VideoPlayerCard } from "../molecules/video-player-card";
import { VideoThumbnailCard } from "../molecules/video-thumbnail-card";

type IVideosProps = {
  videos: IVideo[];
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer - 1,
  },

  cardWrapperSelected: {
    width: "100vw",
    maxWidth: "1080px",

    zIndex: theme.zIndex.modal,
    position: "absolute",
    top: 0,
    [theme.breakpoints.down("xs")]: {
      left: 0,
    },
  },
}));

export const VideoCardGrid = (props: IVideosProps) => {
  const { videos } = props;

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = videos.find((video) => video.url === selectedId) ?? null;

  const classes = useStyles();

  return (
    <AnimateSharedLayout type="crossfade">
      <GridContainer>
        {videos.map((video) => (
          <GridItem
            layoutId={video.url}
            key={video.url}
            onClick={() => {
              setSelectedId(video.url);
            }}
            clickable
          >
            <Reveal>
              <VideoThumbnailCard video={video} />
            </Reveal>
          </GridItem>
        ))}
      </GridContainer>

      <Backdrop
        className={classes.backdrop}
        open={Boolean(selected)}
        onClick={() => {
          setSelectedId(null);
        }}
      >
        <AnimatePresence>
          {selected && (
            <motion.div
              layoutId={selected.url}
              className={classes.cardWrapperSelected}
            >
              <VideoPlayerCard
                video={selected}
                CardHeaderProps={{
                  action: (
                    <CloseIconButton
                      onClick={() => {
                        setSelectedId(null);
                      }}
                    />
                  ),
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Backdrop>
    </AnimateSharedLayout>
  );
};
