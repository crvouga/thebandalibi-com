import { OpenCartIconButton } from "@components/commerce";
import { appEventEmitter } from "@data-access";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";
import { MdMenu } from "react-icons/md";
import { useNavColor } from "./use-nav-color";

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
      <MdMenu />
    </IconButton>
  );
};

export const NavBarMobile: FC<{ logo: ReactNode }> = ({ logo }) => {
  const { backgroundColor, color } = useNavColor();

  return (
    <>
      <AppBar
        sx={{
          color,
          backgroundColor,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <OpenNavDrawerButton />

          {logo}

          <OpenCartIconButton />
        </Toolbar>
      </AppBar>
    </>
  );
};
