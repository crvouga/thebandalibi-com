import { Icon, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { SocialMediaLinks } from "./social-media-link-grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(2, 0),
  },
  row: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    padding: theme.spacing(1 / 2, 0),
  },
}));

const StudioLink = () => {
  return (
    <Box color="text.secondary">
      <Button href="/studio" size="small" color="inherit">
        Admin
      </Button>
    </Box>
  );
};

const DeveloperLink = () => {
  return (
    <Box color="text.secondary">
      <Button
        href={"https://chrisvouga.dev/"}
        size="small"
        startIcon={
          <Icon style={{ position: "relative" }}>
            <Image
              layout="fill"
              src="https://chrisvouga.dev/personal-logo-dark.svg"
            />
          </Icon>
        }
        color="inherit"
      >
        Chris Vouga
      </Button>
    </Box>
  );
};

export const Footer = () => {
  const classes = useStyles();

  return (
    <motion.div layoutId="footer" className={classes.root}>
      <div className={classes.row}>
        <SocialMediaLinks socialMedia={[]} />
      </div>

      <div className={classes.row}>
        <DeveloperLink />
      </div>

      <div className={classes.row}>
        <StudioLink />
      </div>
    </motion.div>
  );
};
