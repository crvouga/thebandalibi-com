import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAVIGATION_ACTIONS } from "./navigation-constants";
import Drawer from "@material-ui/core/Drawer";
import { useNavigationState } from "./navigation-state";
import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";
import { useEffect } from "react";

const useStylesDrawer = makeStyles(() => ({
  paper: {
    width: "66.66vw",
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

export const NavigationDrawer = () => {
  const navigationState = useNavigationState();

  const router = useRouter();

  const selected = NAVIGATION_ACTIONS.find(
    (action) => router.pathname === action.pathname
  );

  const classesDrawer = useStylesDrawer();

  useCloseOnRouteChange();

  return (
    <Drawer
      anchor="right"
      open={navigationState.drawerState === "opened"}
      onClose={navigationState.closeDrawer}
      classes={classesDrawer}
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
      <List>
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
    </Drawer>
  );
};
