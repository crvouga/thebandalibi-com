import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";

export const NavBarMobile: FC<{
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}> = ({ left, center, right }) => {
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
            {right}
          </Box>
        </Toolbar>
        <Divider />
      </Box>
    </>
  );
};
