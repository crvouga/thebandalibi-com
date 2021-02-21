import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { IVideo } from "../../lib/contracts";
import { CloseIconButton } from "../close-icon-button";
import { Reveal } from "../reveal-animation";
import { useGlobalStyles } from "../styles";
import { VideoPlayerCard } from "./video-card.player";
import { VideoThumbnailCard } from "./video-card.thumbnail";

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

  const globalClasses = useGlobalStyles();

  return (
    <AnimateSharedLayout type="crossfade">
      <div className={globalClasses.cardGridContainer}>
        {videos.map((video) => (
          <motion.div
            className={globalClasses.cardGridItemWrapper}
            layoutId={video.url}
            key={video.url}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setSelectedId(video.url);
            }}
          >
            <Reveal>
              <VideoThumbnailCard video={video} />
            </Reveal>
          </motion.div>
        ))}
      </div>

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
