import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { NavigationLinks } from "./navigation-links";
import { INavigationBarProps } from "./navigation-bar-interface";

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: theme.palette.getContrastText(theme.palette.background.default),
    backgroundColor: theme.palette.primary.main,
  },
}));

export const NavigationBarTop = React.forwardRef<any, INavigationBarProps>(
  ({ logo, links }, ref) => {
    const classes = useStyles();

    return (
      <AppBar ref={ref} position="sticky" className={classes.appBar}>
        <Container>
          <Toolbar>
            {logo}

            <Box flex={1} />

            <NavigationLinks orientation="horizontal" links={links} />
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
);
