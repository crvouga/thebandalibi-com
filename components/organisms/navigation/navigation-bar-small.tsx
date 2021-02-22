import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Logo } from "../../atoms/logo";
import { useBoolean } from "../../atoms/use-boolean";
import { NAV_BAR_HEIGHT } from "./navigation-constants";
import { NavigationDrawer } from "./navigation-drawer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  gutter: {
    width: "100vw",
    height: NAV_BAR_HEIGHT,
  },
  space: {
    flex: 1,
  },
  toolbar: {
    maxWidth: theme.breakpoints.values.lg,
    margin: "auto",
    width: "100%",
    padding: theme.spacing(0, 2),
  },
}));

export const NavigationBarSmall = () => {
  const classes = useStyles();

  const router = useRouter();

  const isOpen = useBoolean(false);

  useEffect(() => {
    router.events.on("routeChangeComplete", isOpen.setFalse);
    return () => {
      router.events.off("routeChangeComplete", isOpen.setFalse);
    };
  }, []);

  return (
    <React.Fragment>
      <NavigationDrawer open={isOpen.value} onClose={isOpen.setFalse} />

      <AppBar variant="outlined" position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            aria-label="open navigation menu"
            onClick={isOpen.setTrue}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.space} />

          <Link href="/">
            <Logo />
          </Link>

          <div className={classes.space} />

          <IconButton
            style={{ opacity: 0 }}
            aria-label="dummy icon button to center logo"
            disabled
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className={classes.gutter} />
    </React.Fragment>
  );
};
