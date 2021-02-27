import { makeStyles } from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
import { IPlatform } from "../../lib/domain";
import { Clickable } from "../@shared/clickable";
import { PlatformActionBar } from "../platform/platform-action-bar";
import { routes } from "../../constants/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2, 0),
  },
  platformActionBar: {
    padding: theme.spacing(2, 0),
  },
}));

const StudioLink = (props: BoxProps) => {
  return (
    <Box color="text.secondary" {...props}>
      <Button
        href={routes.contentManagmentDashboard()}
        size="small"
        color="inherit"
      >
        Admin
      </Button>
    </Box>
  );
};

const DeveloperLink = (props: BoxProps) => {
  return (
    <Box color="text.secondary" {...props}>
      <Button href={"https://chrisvouga.dev/"} size="small" color="inherit">
        Built By Chris Vouga
      </Button>
    </Box>
  );
};

export const Footer = ({ platforms }: { platforms: IPlatform[] }) => {
  const classes = useStyles();

  return (
    <motion.div layoutId="footer" className={classes.root}>
      <PlatformActionBar
        className={classes.platformActionBar}
        platforms={platforms}
      />

      <Clickable>
        <DeveloperLink />
      </Clickable>

      <Clickable>
        <StudioLink />
      </Clickable>
    </motion.div>
  );
};
