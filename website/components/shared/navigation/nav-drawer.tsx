import { CloseIconButton } from "@components/generic";
import { NavLinks } from "@components/shared";
import { appEventEmitter, INavEvents, IRouterEvents } from "@data-access";
import { useTheme } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import { IEventEmitter, useEventEmitter } from "@utility";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

export const OpenNavDrawerButton = () => {
  const handleClick = () => {
    appEventEmitter.emit("open-navigation", {});
  };

  return (
    <IconButton
      color="inherit"
      aria-label="view navigation drawer"
      onClick={handleClick}
    >
      <MenuIcon />
    </IconButton>
  );
};

export const NavDrawer = ({
  eventEmitter,
  links,
}: {
  eventEmitter: IEventEmitter<INavEvents & IRouterEvents>;
  links: { href: string; label: string }[];
}) => {
  const [state, setState] = useState<"opened" | "closed">("closed");

  const handleClose = () => {
    eventEmitter.emit("close-navigation", {});
  };

  useEventEmitter(eventEmitter, {
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

  const theme = useTheme();

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
          display: "flex",
          flexDirection: "column",
          position: "relative",
        },
      }}
    >
      <Toolbar
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          justifyContent: "flex-start",
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <CloseIconButton onClick={handleClose} />
      </Toolbar>

      <NavLinks
        links={links}
        ListProps={{
          sx: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          },
        }}
      />
    </Drawer>
  );
};
