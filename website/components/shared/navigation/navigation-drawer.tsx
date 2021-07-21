import { CloseIconButton } from "@components/generic";
import { Toolbar } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { useEventEmitter } from "@utility";
import { useState } from "react";
import { appEventEmitter } from "../app";
import { NavigationLinks } from "./navigation-links";

export const NavigationDrawer = ({
  links,
}: {
  links: { pathname: string; label: string }[];
}) => {
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
      anchor="right"
      keepMounted
      sx={{
        "& .MuiDrawer-paper": {
          width: "66.66vw",
          maxWidth: "320px",
        },
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <CloseIconButton onClick={handleClose} />
      </Toolbar>

      <NavigationLinks orientation="vertical" links={links} />
    </Drawer>
  );
};
