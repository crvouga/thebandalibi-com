import { CardActionArea, CloseIconButton } from "@components/generic";
import { INavEvents, IRouterEvents } from "@data-access";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IEventEmitter, useEventEmitter } from "@utility";
import { useState } from "react";
import { ToggleThemeButton } from "../theme/toggle-theme-button";

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
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-start" }}>
        <CloseIconButton onClick={handleClose} />
      </Toolbar>

      <Box sx={{ flex: 1 }}>
        {links.map(({ href, label }) => (
          <CardActionArea key={href} href={href}>
            <Box
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                fontWeight="bold"
                variant="button"
                align="center"
                sx={{
                  fontSize: "1.8em",
                }}
              >
                {label}
              </Typography>
            </Box>
          </CardActionArea>
        ))}
      </Box>
    </Drawer>
  );
};
