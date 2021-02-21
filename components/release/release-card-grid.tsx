import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { IRelease } from "../../lib/contracts";
import { Reveal } from "../reveal-animation";
import { useGlobalStyles } from "../styles";
import { ReleaseArtworkCard, ReleaseCard } from "./release-card";
import { useRouter } from "next/router";
import { CloseIconButton } from "../close-icon-button";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer - 1,
  },

  cardWrapperSelected: {
    width: "100vw",
    maxWidth: "480px",

    zIndex: theme.zIndex.modal,
    position: "absolute",
    top: 0,
    [theme.breakpoints.down("xs")]: {
      left: 0,
    },
  },
}));

export const ReleaseCardGrid = (props: { releases: IRelease[] }) => {
  const { releases } = props;

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected =
    releases.find((release) => release.id === selectedId) ?? null;

  const globalClasses = useGlobalStyles();
  const classes = useStyles();

  return (
    <AnimateSharedLayout type="crossfade">
      <div className={globalClasses.cardGridContainer}>
        {releases.map((release) => (
          <motion.div
            className={globalClasses.cardGridItemWrapper}
            layoutId={release.id}
            key={release.id}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setSelectedId(release.id);
            }}
          >
            <Reveal>
              <ReleaseArtworkCard release={release} />
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
              layoutId={selected.id}
              className={classes.cardWrapperSelected}
            >
              <ReleaseCard
                release={selected}
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
