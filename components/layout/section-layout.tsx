import { makeStyles } from "@material-ui/core/styles";
import { PropsWithChildren } from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(2, 0),
  },
}));

export const SectionLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  const classes = useStyles();

  return <section className={classes.section}>{children}</section>;
};
