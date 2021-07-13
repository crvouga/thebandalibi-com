import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useEventEmitter } from "@utility";
import { useState } from "react";
import { useAppEventEmitter } from "../app";
import { NavigationLinks } from "./navigation-links";
import { useSelectedPathname } from "./use-selected-pathname";

export const NavigationDrawer = ({
  links,
}: {
  links: { pathname: string; label: string }[];
}) => {
  const appEventEmitter = useAppEventEmitter();

  const [state, setState] = useState<"opened" | "closed">("closed");

  const handleClose = () => {
    appEventEmitter.emit("close-navigation", {});
  };

  useEventEmitter(appEventEmitter, {
    "close-navigation": () => {
      setState("closed");
    },
    "open-navigation": () => {
      setState("opened");
    },
    "route-changed-completed": () => {
      setState("closed");
    },
  });

  return (
    <Drawer
      open={state === "opened"}
      onClose={handleClose}
      anchor="bottom"
      keepMounted
    >
      <NavigationLinks orientation="vertical" links={links} />

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
