import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Logo } from "../../atoms/logo";
import { useBoolean } from "../../atoms/use-boolean";
import { NavigationDrawer } from "./navigation-drawer";
import { useStyles } from "./styles";

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
    <AppBar variant="outlined" position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton aria-label="open navigation menu" onClick={isOpen.setTrue}>
          <MenuIcon />
        </IconButton>

        <NavigationDrawer open={isOpen.value} onClose={isOpen.setFalse} />

        <div className={classes.space} />

        <Logo />

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
  );
};
