import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ISocialMedia } from "../../lib/contracts";
import { SocialMediaButton } from "../molecules/social-media-button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "auto",
  },
  itemWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1),
  },
}));

export const SocialMediaButtonGrid = (props: {
  className?: string;
  socialMedia: ISocialMedia[];
}) => {
  const { socialMedia, className } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.container, className)}>
      {socialMedia.map((socialMedia) => (
        <motion.div
          className={classes.itemWrapper}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 0.95 }}
        >
          <SocialMediaButton socialMedia={socialMedia} />
        </motion.div>
      ))}
    </div>
  );
};
