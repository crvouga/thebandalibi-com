import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import { Logo } from "../logo";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  link: {
    cursor: "pointer",
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();

  return (
    <AppBar variant="outlined" position="sticky" className={classes.appBar}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar>
          <Link href="/">
            <Logo className={classes.link} />
          </Link>

          <Box flex={1} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
