import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "space-between",
  },

  appBar: {
    top: "auto",
    left: 0,
    bottom: 0,
    color: theme.palette.getContrastText(theme.palette.background.default),
    backgroundColor: theme.palette.primary.main,
  },
}));

type IProps = {
  left: React.ReactNode;
  center: React.ReactNode;
  right: React.ReactNode;
};

export const NavigationBarBottom = React.forwardRef<any, IProps>(
  ({ left, center, right }, ref) => {
    const classes = useStyles();

    return (
      <AppBar elevation={6} ref={ref} className={classes.appBar}>
        <Toolbar disableGutters>
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
