import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { motion } from "framer-motion";
import { IMotionDivProps } from "./contracts";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2, 0),
  },
}));

export const Header = ({ className, ...props }: IMotionDivProps) => {
  const classes = useStyles();

  return <motion.div className={clsx(classes.root, className)} {...props} />;
};
