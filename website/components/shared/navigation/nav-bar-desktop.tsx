import { APP_MAX_WIDTH } from "@config";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";

export const NavBarDesktop: FC<{
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}> = ({ left, center, right }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: theme.zIndex.appBar,
          backgroundColor: "background.default",
          maxWidth: APP_MAX_WIDTH,
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
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

        <Divider />
      </Box>
    </>
  );
};
