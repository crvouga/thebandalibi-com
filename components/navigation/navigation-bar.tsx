import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import { Logo } from "../logo";
import { NavigationTabs } from "./navigation-tabs";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    cursor: "pointer",
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();

  return (
    <>
      <Hidden smDown>
        <AppBar position="sticky" className={classes.appBar}>
          <Container maxWidth="lg" disableGutters>
            <Toolbar>
              <Link href="/">
                <Logo className={classes.link} />
              </Link>

              <Box flex={1} />

              <NavigationTabs variant="standard" />
            </Toolbar>
          </Container>
        </AppBar>
      </Hidden>

      <Hidden mdUp>
        <AppBar position="sticky" className={classes.appBar}>
          <NavigationTabs variant="fullWidth" />
        </AppBar>
      </Hidden>
    </>
  );
};
