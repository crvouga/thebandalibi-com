import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { NAV_BAR_HEIGHT } from "./navigation-constants";

export const useStyles = makeStyles(() => ({
  gutter: {
    width: "100vw",
    height: NAV_BAR_HEIGHT,
  },
}));

export const Gutter = () => {
  const classes = useStyles();

  return <div className={classes.gutter} />;
};
