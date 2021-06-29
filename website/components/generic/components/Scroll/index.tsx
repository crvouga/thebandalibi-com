import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    overflowX: "scroll",
    scrollSnapType: `x mandatory`,
  },

  item: {
    scrollSnapAlign: "start",
  },
}));

export const ScrollItem = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  return <div className={classes.item}>{children}</div>;
};

export const ScrollContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};
