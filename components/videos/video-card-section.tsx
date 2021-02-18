import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { IVideo } from "../../lib/contracts";
import { VideoCard } from "./video-card";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, Backdrop } from "@material-ui/core";
import { VideoCardSelected } from "./video-card.selected";

type IVideosProps = {
  videos: IVideo[];
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer - 1,
  },

  cardContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      width: "33.33%",
    },
  },
  cardWrapperSelected: {
    width: "480px",
  },
}));

export const VideoCardSection = (props: IVideosProps) => {
  const { videos } = props;

  const [selected, setSelected] = useState<IVideo | null>(null);

  const classes = useStyles();

  return (
    <section>
      <Typography variant="h3" color="initial" gutterBottom>
        Videos
      </Typography>

      <AnimateSharedLayout type="crossfade">
        <motion.div className={classes.cardContainer}>
          {videos.map((video) => (
            <motion.div
              className={classes.cardWrapper}
              layoutId={video.url}
              key={video.url}
            >
              <VideoCard
                onClick={() => {
                  setSelected(video);
                }}
                video={video}
              />
            </motion.div>
          ))}
        </motion.div>

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
                layoutId={selected.url}
                className={classes.cardWrapperSelected}
              >
                <VideoCardSelected
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
    </section>
  );
};
