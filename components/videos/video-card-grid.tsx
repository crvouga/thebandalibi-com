import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { IVideo } from "../../lib/contracts";
import { VideoPlayerCard } from "./video-card.player";
import { VideoThumbnailCard } from "./video-card.thumbnail";

type IVideosProps = {
  videos: IVideo[];
};

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
  },

  cardWrapper: {
    padding: theme.spacing(1 / 2),

    width: "33.33%",

    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

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

  const [selected, setSelected] = useState<IVideo | null>(null);

  const classes = useStyles();

  return (
    <AnimateSharedLayout type="crossfade">
      <div className={classes.cardContainer}>
        {videos.map((video) => (
          <motion.div
            className={classes.cardWrapper}
            layoutId={video.id}
            key={video.id}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setSelected(video);
            }}
          >
            <VideoThumbnailCard video={video} />
          </motion.div>
        ))}
      </div>

      <Backdrop
        className={classes.backdrop}
        open={Boolean(selected)}
        onClick={() => {
          setSelected(null);
        }}
      >
        <AnimatePresence>
          {selected && (
            <motion.div
              layoutId={selected.id}
              className={classes.cardWrapperSelected}
            >
              <VideoPlayerCard
                video={selected}
                onClose={() => {
                  setSelected(null);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Backdrop>
    </AnimateSharedLayout>
  );
};
