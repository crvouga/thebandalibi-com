import { makeStyles } from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
import { ISocialMedia } from "../../lib/contracts";
import { SocialMediaActionBar } from "./social-media-action-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2, 0),
  },
  socialMedia: {
    padding: theme.spacing(2, 0),
  },
}));

const StudioLink = (props: BoxProps) => {
  return (
    <Box color="text.secondary" {...props}>
      <Button href="/studio" size="small" color="inherit">
        Admin
      </Button>
    </Box>
  );
};

const DeveloperLink = (props: BoxProps) => {
  return (
    <Box color="text.secondary" {...props}>
      <Button href={"https://chrisvouga.dev/"} size="small" color="inherit">
        Site By Chris Vouga
      </Button>
    </Box>
  );
};

export const Footer = ({ socialMedia }: { socialMedia: ISocialMedia[] }) => {
  const classes = useStyles();

  return (
    <motion.div layoutId="footer" className={classes.root}>
      <SocialMediaActionBar
        className={classes.socialMedia}
        socialMedia={socialMedia}
      />

      <DeveloperLink />
      <StudioLink />
    </motion.div>
  );
};
