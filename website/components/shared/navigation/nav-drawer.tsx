import { Button, CloseIconButton } from "@components/generic";
import { IRouterEvents, INavEvents } from "@data-access";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import { IEventEmitter, useEventEmitter } from "@utility";
import { useState } from "react";

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
      <Toolbar sx={{ justifyContent: "flex-start " }}>
        <CloseIconButton onClick={handleClose} />
      </Toolbar>

      {links.map(({ href, label }) => (
        <Button color="inherit" key={href} href={href}>
          {label}
        </Button>
      ))}
    </Drawer>
  );
};
