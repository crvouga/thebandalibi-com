import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Logo } from "../logo";

export const APP_BAR_HEIGHT = 64;

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: APP_BAR_HEIGHT,
    backgroundColor: theme.palette.background.default,
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();

  return (
    <AppBar variant="outlined" position="sticky" className={classes.appBar}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar>
          <Logo />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
