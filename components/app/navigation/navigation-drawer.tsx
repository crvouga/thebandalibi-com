import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { PlatformIcon } from "../../shared/platform/platform-icon";
import { useQuerySettings } from "../settings";
import { NavigationVerticalLinks } from "./navigation-links";
import { useNavigationState } from "./navigation-state";

const useStyles = makeStyles(() => ({
  drawer: {
    width: "66.66vw",
    display: "flex",
    maxWidth: "360px",
  },
}));

const useCloseOnRouteChange = () => {
  const navigationState = useNavigationState();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      navigationState.setDrawerState("closed");
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);
};

const NavigationDrawerFooter = () => {
  const query = useQuerySettings();

  if (!query.data) {
    return null;
  }

  const settings = query.data;

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      marginBottom={2}
    >
      {settings.band.platformLinks.map((platformLink) => (
        <Link key={platformLink.url} href={platformLink.url}>
          <Box p={1 / 2}>
            <IconButton aria-label="social media link">
              <PlatformIcon platformName={platformLink.platform.name} />
            </IconButton>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export const NavigationDrawer = () => {
  const navigationState = useNavigationState();

  const classes = useStyles();

  useCloseOnRouteChange();

  return (
    <Drawer
      open={navigationState.drawerState === "opened"}
      onClose={() => {
        navigationState.setDrawerState("closed");
      }}
      classes={{ paper: classes.drawer }}
      keepMounted
    >
      <Toolbar>
        <Box display="flex" flex={1} flexDirection="row">
          <IconButton
            edge="start"
            aria-label="close drawer"
            onClick={() => {
              navigationState.setDrawerState("closed");
            }}
          >
            <MdClose />
          </IconButton>
        </Box>
      </Toolbar>

      <Box flex={1}>
        <NavigationVerticalLinks />
      </Box>

      <NavigationDrawerFooter />
    </Drawer>
  );
};
