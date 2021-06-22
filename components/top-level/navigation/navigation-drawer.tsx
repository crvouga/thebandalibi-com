import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import { NavigationLinks } from "./navigation-links";
import { useNavigationState } from "./navigation-state";
import { useRouterHandlers } from "./use-router-handlers";

export const NavigationDrawer = ({
  links,
}: {
  links: { pathname: string; label: string }[];
}) => {
  const navigationState = useNavigationState();

  const handleClose = () => {
    navigationState.setDrawerState("closed");
  };

  useRouterHandlers({
    onRouteChangeComplete: handleClose,
  });

  const router = useRouter();

  return (
    <Drawer
      open={navigationState.drawerState === "opened"}
      onClose={() => {
        navigationState.setDrawerState("closed");
      }}
      anchor="bottom"
      keepMounted
    >
      <NavigationLinks
        orientation="vertical"
        selectedPathname={router.pathname}
        links={links}
      />

      <Divider />

      <List>
        <ListItem button onClick={handleClose}>
          <ListItemText
            primaryTypographyProps={{ align: "center", variant: "button" }}
            primary={"Close"}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};
