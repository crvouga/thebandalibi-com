import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import React from "react";
import { IMotionDivProps } from "./contracts";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1 / 2),

    width: "33.33%",

    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

export const GridItem = (props: IMotionDivProps) => {
  const classes = useStyles();
  return <motion.div className={classes.root} {...props} />;
};
