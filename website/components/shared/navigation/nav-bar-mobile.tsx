import { OpenCartIconButton } from "@components/commerce";
import { useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";
import { OpenNavDrawerButton } from "./open-nav-drawer-button";

export const NavBarMobile: FC<{ logo: ReactNode }> = ({ logo }) => {
  const theme = useTheme();

  const backgroundColor = theme.palette.primary.main;
  const color = theme.palette.getContrastText(backgroundColor);

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
