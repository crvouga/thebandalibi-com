import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { PlatformIcon } from "../../shared/platform/platform-icon";
import { useQuerySettings } from "../settings";
import { NAVIGATION_ACTIONS } from "./navigation-constants";
import { useNavigationState } from "./navigation-state";

const useStyles = makeStyles(() => ({
  drawer: {
    width: "66.66vw",
    display: "flex",
  },
  list: {
    flex: 1,
  },
}));

const useCloseOnRouteChange = () => {
  const navigationState = useNavigationState();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      navigationState.closeDrawer();
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
          <Box p={1}>
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

  const router = useRouter();

  const selected = NAVIGATION_ACTIONS.find(
    (action) => router.pathname === action.pathname
  );

  const classes = useStyles();

  useCloseOnRouteChange();

  return (
    <Drawer
      anchor="right"
      open={navigationState.drawerState === "opened"}
      onClose={navigationState.closeDrawer}
      classes={{ paper: classes.drawer }}
      keepMounted
    >
      <Toolbar>
        <Box display="flex" flex={1} flexDirection="row-reverse">
          <IconButton
            aria-label="close drawer"
            onClick={navigationState.closeDrawer}
          >
            <MdClose />
          </IconButton>
        </Box>
      </Toolbar>

      <List className={classes.list}>
        {NAVIGATION_ACTIONS.map(({ pathname, label }) => (
          <Link key={pathname} href={pathname}>
            <ListItem selected={selected?.pathname === pathname} button>
              <ListItemText
                primaryTypographyProps={{ variant: "h6", align: "center" }}
                primary={label}
              />
            </ListItem>
          </Link>
        ))}
      </List>

      <NavigationDrawerFooter />
    </Drawer>
  );
};
