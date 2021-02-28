import { makeStyles } from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { routes } from "../../constants/routes";
import { IPlatformLink } from "../../lib/domain";
import { Clickable } from "../@shared/clickable";
import { PlatformLinkActionBar } from "../platform/platform-action-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  platformActionBar: {},
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

export const Footer = ({
  platformsLinks,
}: {
  platformsLinks: IPlatformLink[];
}) => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <PlatformLinkActionBar
        className={classes.platformActionBar}
        platformsLinks={platformsLinks}
      />

      <Clickable>
        <DeveloperLink />
      </Clickable>

      <Clickable>
        <StudioLink />
      </Clickable>
    </footer>
  );
};
