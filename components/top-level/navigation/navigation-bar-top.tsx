import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { NAVIGATION_BAR_HEIGHT } from "./navigation-constants";

type IProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: NAVIGATION_BAR_HEIGHT,
    color: theme.palette.getContrastText(theme.palette.background.default),
    backgroundColor: theme.palette.primary.main,
  },
}));

export const NavigationBarTop = React.forwardRef<any, IProps>(
  ({ left, right }, ref) => {
    const classes = useStyles();

    return (
      <AppBar ref={ref} position="fixed" className={classes.appBar}>
        <Container>
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
