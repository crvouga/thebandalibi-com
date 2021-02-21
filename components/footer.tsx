import { makeStyles, SvgIcon, Avatar, Icon } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { ISocialMedia } from "../lib/contracts";
import { SocialMediaLinks } from "./social-media/social-media-link-grid";
import Image from "next/image";
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
      <Button
        href="/studio"
        size="small"
        startIcon={<DashboardIcon />}
        color="inherit"
      >
        Studio
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

export const Footer = ({ socialMedia }: { socialMedia: ISocialMedia[] }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <SocialMediaLinks socialMedia={socialMedia} />
      </div>
      <div className={classes.row}>
        <StudioLink />
      </div>
      <div className={classes.row}>
        <DeveloperLink />
      </div>
    </div>
  );
};
