import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { NavigationLinks } from "./navigation-links";
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

export const NavigationDrawer = ({
  links,
}: {
  links: { pathname: string; label: string }[];
}) => {
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
        <NavigationLinks orientation="vertical" links={links} />
      </Box>
    </Drawer>
  );
};
