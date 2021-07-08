import { useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";

type IProps = {
  left: React.ReactNode;
  center: React.ReactNode;
  right: React.ReactNode;
};

export const NavigationBarBottom = React.forwardRef<any, IProps>(
  ({ left, center, right }, ref) => {
    const theme = useTheme();

    return (
      <AppBar
        ref={ref}
        sx={{
          top: "auto",
          left: 0,
          bottom: 0,
          color: theme.palette.getContrastText(
            theme.palette.background.default
          ),
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Toolbar
          sx={{
            color: theme.palette.getContrastText(theme.palette.primary.main),
          }}
        >
          {left}

          <Box display="flex" justifyContent="center" flex={1}>
            {center}
          </Box>

          {right}
        </Toolbar>
      </AppBar>
    );
  }
);
