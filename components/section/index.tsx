import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import Link from "next/link";
import { PropsWithChildren } from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    margin: "auto",
    maxWidth: theme.breakpoints.values.lg,
    padding: theme.spacing(4, 0),
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const SectionTitle = (props: TypographyProps) => {
  return <Typography variant="h3" gutterBottom {...props} />;
};

export const SectionHeader = (props: {
  title: string;
  action?: {
    name: string;
    href: string;
  };
}) => {
  const { title, action } = props;
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <SectionTitle>{title}</SectionTitle>

      {action && (
        <Link href={action.href}>
          <Button size="large">{action.name}</Button>
        </Link>
      )}
    </div>
  );
};

export const SectionLayout = (
  props: PropsWithChildren<{ layoutId?: string }>
) => {
  const { layoutId, children } = props;

  const classes = useStyles();

  return (
    <motion.section layoutId={layoutId} className={classes.section}>
      {children}
    </motion.section>
  );
};
