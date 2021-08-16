import { APP_MAX_WIDTH } from "@config";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";

export const NavBarDesktop: FC<{
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}> = ({ left, center, right }) => {
  return (
    <>
      <AppBar>
        <Toolbar
          variant="dense"
          sx={{
            maxWidth: APP_MAX_WIDTH,
            width: "100%",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              minWidth: "10%",
            }}
          >
            {left}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              minWidth: "80%",
            }}
          >
            {center}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              minWidth: "10%",
            }}
          >
            {right}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
