import { CloseIconButton } from "@components/generic";
import { Toolbar } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { useEventEmitter } from "@utility";
import { useState } from "react";
import { appEventEmitter } from "../app";
import { NavLinks } from "./nav-links";

export const NavDrawer = ({
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
      anchor="left"
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

      <NavLinks orientation="vertical" links={links} />
    </Drawer>
  );
};
