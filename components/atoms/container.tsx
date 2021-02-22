import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { IMotionDivProps } from "./contracts";
import clsx from "clsx";

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    maxWidth: theme.breakpoints.values.lg,
    padding: theme.spacing(0, 2),
  },
}));

export const Container = ({ className, ...props }: IMotionDivProps) => {
  const classes = useStyles();
  return <motion.div className={clsx(classes.root, className)} {...props} />;
};
