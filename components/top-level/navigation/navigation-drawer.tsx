import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import { NavigationLinks } from "./navigation-links";
import { useUiState } from "@data-access";
import { useRouterHandlers } from "./use-router-handlers";

export const NavigationDrawer = ({
  links,
}: {
  links: { pathname: string; label: string }[];
}) => {
  const uiState = useUiState();

  const handleClose = () => {
    uiState.setState("closed");
  };

  useRouterHandlers({
    onRouteChangeComplete: handleClose,
  });

  const router = useRouter();

  return (
    <Drawer
      open={uiState.state === "navigation-opened"}
      onClose={() => {
        uiState.setState("closed");
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
