import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { IVideo } from "../../lib/contracts";
import { HorizontalSnapScroll } from "../horizontal-snap-scroll";
import { VideoCardSelected } from "./video-card.selected";
import { VideoCardUnselected } from "./video-card.unselected";

type IVideosProps = {
  videos: IVideo[];
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer - 1,
  },

  cardWrapper: {
    width: "360px",
    marginRight: theme.spacing(2),
  },

  cardWrapperSelected: {
    zIndex: theme.zIndex.modal,
    maxWidth: "1080px",
    width: "100%",
  },
}));

export const VideoCardSection = (props: IVideosProps) => {
  const { videos } = props;

  const dummyVideos = [
    ...videos,
    ...videos,
    ...videos,
    ...videos,
    ...videos,
  ].map((video, index) => ({ id: String(index), ...video }));

  const [selected, setSelected] = useState<(IVideo & { id: string }) | null>(
    null
  );

  const classes = useStyles();

  return (
    <section>
      <Typography variant="h3" color="initial">
        Videos
      </Typography>

      <AnimateSharedLayout type="crossfade">
        <HorizontalSnapScroll>
          {dummyVideos.map((video) => (
            <motion.div
              className={classes.cardWrapper}
              layoutId={video.id}
              key={video.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <VideoCardUnselected
                onClick={() => {
                  setSelected(video);
                }}
                video={video}
              />
            </motion.div>
          ))}
        </HorizontalSnapScroll>

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
