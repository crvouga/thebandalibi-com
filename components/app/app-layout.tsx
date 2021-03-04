import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import React from "react";
import { routes } from "../../constants/routes";
import { Gutter } from "./navigation/gutter";
import { NavigationActionBar } from "./navigation/navigation-action-bar";
import { NavigationBarLarge } from "./navigation/navigation-bar-large";

export const useStyles = makeStyles((theme) => ({
  bottom: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    left: 0,
    width: "100vw",
  },
  top: {
    zIndex: theme.zIndex.appBar,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
  },
}));

export const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const classes = useStyles();

  return (
    <>
      <Hidden xsDown>
        <NavigationBarLarge className={classes.top} />
        <Gutter />
      </Hidden>

      {children}

      <Hidden smUp>
        <NavigationActionBar className={classes.bottom} />
        <Gutter />
      </Hidden>
    </>
  );
};
