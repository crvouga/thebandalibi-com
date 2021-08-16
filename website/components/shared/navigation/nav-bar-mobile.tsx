import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";

export const NavBarMobile: FC<{
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}> = ({ left, center, right }) => {
  return (
    <>
      <AppBar>
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
            {right}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
