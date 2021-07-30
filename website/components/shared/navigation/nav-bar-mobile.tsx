import { OpenCartIconButton } from "@components/commerce";
import { appEventEmitter } from "@data-access";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";
import { MdMenu } from "react-icons/md";
import { useNavColor } from "./use-nav-color";
import Divider from "@material-ui/core/Divider";
import { useTheme } from "@material-ui/core";

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
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100vw",
          zIndex: theme.zIndex.appBar,
          backgroundColor: "background.default",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            "& > *": {
              width: `${(1 / 3) * 100}%`,
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              justifyContent: "flex-start",
            }}
          >
            <OpenNavDrawerButton />
          </Box>

          <Box
            sx={{
              justifyContent: "center",
            }}
          >
            {logo}
          </Box>

          <Box
            sx={{
              justifyContent: "flex-end",
            }}
          >
            <OpenCartIconButton />
          </Box>
        </Toolbar>
        <Divider />
      </Box>
    </>
  );
};
