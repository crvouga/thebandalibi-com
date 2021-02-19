import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { IVideo } from "../../lib/contracts";
import { SectionLayout } from "../layout/section-layout";
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
    flexWrap: "wrap",
    gap: theme.spacing(1),
  },

  cardWrapper: {
    width: `calc(33.33% - ${theme.spacing(1)}px)`,

    [theme.breakpoints.down("sm")]: {
      width: `calc(50% - ${theme.spacing(1)}px)`,
    },

    [theme.breakpoints.down("xs")]: {
      width: `calc(100% - ${theme.spacing(1)}px)`,
    },
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
    <SectionLayout>
      <Typography variant="h3" color="initial" gutterBottom>
        Videos
      </Typography>

      <AnimateSharedLayout type="crossfade">
        <div className={classes.cardContainer}>
          {dummyVideos.slice(0, 6).map((video) => (
            <motion.div
              className={classes.cardWrapper}
              layoutId={video.id}
              key={video.id}
              whileHover={{ zIndex: 1 }}
              whileTap={{ scale: 0.9 }}
              onHoverEnd={() => {
                console.log("hover end");
              }}
            >
              <VideoCardUnselected
                onClick={() => {
                  setSelected(video);
                }}
                video={video}
              />
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
    </SectionLayout>
  );
};
