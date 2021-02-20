import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { PropsWithChildren } from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(4, 0),
  },
}));

export const SectionTitle = (props: TypographyProps) => {
  return <Typography variant="h3" gutterBottom {...props} />;
};

export const SectionLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <section className={classes.section}>{children}</section>
    </Container>
  );
};
