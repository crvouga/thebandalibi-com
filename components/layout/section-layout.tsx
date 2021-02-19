import { makeStyles } from "@material-ui/core/styles";
import { PropsWithChildren } from "react";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(4, 0),
  },
}));

export const SectionLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <section className={classes.section}>{children}</section>
    </Container>
  );
};
