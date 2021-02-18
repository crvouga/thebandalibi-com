import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { IVideo } from "../../lib/contracts";
import { VideoCardSelected } from "./video-card.selected";
import { VideoCardUnselected } from "./video-card.unselected";

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
    maxWidth: "1080px",
    width: "100%",
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
              <VideoCardUnselected
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
