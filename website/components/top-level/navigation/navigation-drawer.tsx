import { Button } from "@components/generic";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { useEventEmitter } from "@utility";
import { useState } from "react";
import { useAppEventEmitter } from "../app";
import { NavigationLinks } from "./navigation-links";

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

      <Button
        color="inherit"
        fullWidth
        size="large"
        onClick={handleClose}
        sx={{ marginY: 1 }}
      >
        Close
      </Button>
    </Drawer>
  );
};
