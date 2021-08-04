import { OpenCartIconButton } from "@components/commerce";
import { appEventEmitter } from "@data-access";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";
import { useNavColor } from "./use-nav-color";
import { MdMenu } from "react-icons/md";
import Divider from "@material-ui/core/Divider";
import { useTheme } from "@material-ui/core";

export const NavBarMobile: FC<{ left: ReactNode; center: ReactNode }> = ({
  left,
  center,
}) => {
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
            {left}
          </Box>

          <Box
            sx={{
              justifyContent: "center",
            }}
          >
            {center}
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
