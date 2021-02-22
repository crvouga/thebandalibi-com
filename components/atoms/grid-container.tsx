import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import { IMotionDivProps } from "./contracts";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}));

export const GridContainer = ({ className, ...props }: IMotionDivProps) => {
  const classes = useStyles();
  return <motion.div className={clsx(classes.root, className)} {...props} />;
};
