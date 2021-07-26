import { useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";

type IProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export const NavigationBarTop = React.forwardRef<any, IProps>(
  ({ left, right }, ref) => {
    const theme = useTheme();

    const backgroundColor = theme.palette.primary.main;
    const color = theme.palette.getContrastText(backgroundColor);

    return (
      <AppBar
        ref={ref}
        sx={{
          color,
          backgroundColor,
        }}
      >
        <Container disableGutters>
          <Toolbar
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            {left}
            {right}
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
);
