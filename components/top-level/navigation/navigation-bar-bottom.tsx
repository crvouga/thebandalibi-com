import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
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
        <Box paddingY={2} paddingX={1} display="flex">
          {left}

          <Box display="flex" justifyContent="center" flex={1}>
            {center}
          </Box>

          {right}
        </Box>
      </AppBar>
    );
  }
);
