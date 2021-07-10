import { useUiState } from "@data-access";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouterHandlers } from "@utility";
import { useRouter } from "next/router";
import { NavigationLinks } from "./navigation-links";

export const NavigationDrawer = ({
  links,
}: {
  links: { pathname: string; label: string }[];
}) => {
  const uiState = useUiState();

  const handleClose = () => {
    uiState.setStatus("closed");
  };

  useRouterHandlers({
    onRouteChangeComplete: handleClose,
  });

  const router = useRouter();

  return (
    <Drawer
      open={uiState.status === "navigation-opened"}
      onClose={handleClose}
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
