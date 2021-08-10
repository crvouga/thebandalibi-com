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
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            margin: "auto",
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
