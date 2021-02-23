import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { CloseIconButton } from "../../atoms/close-icon-button";
import { NavigationTabs } from "./navigation-tabs";

const useDrawerStyles = makeStyles(() => ({
  paper: {
    width: "66.66vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
  },
}));

export const NavigationDrawer = (props: DrawerProps) => {
  const drawerClasses = useDrawerStyles();

  return (
    <Drawer keepMounted classes={drawerClasses} anchor="left" {...props}>
      <Toolbar>
        <CloseIconButton onClick={() => props.onClose?.({}, "backdropClick")} />
      </Toolbar>
      <NavigationTabs orientation="vertical" />
    </Drawer>
  );
};
