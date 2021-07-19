import { useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
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
    return (
      <AppBar
        ref={ref}
        sx={{
          color: theme.palette.getContrastText(theme.palette.primary.main),
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Container disableGutters>
          <Toolbar>
            {left}

            <Box flex={1} />

            {right}
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
);
