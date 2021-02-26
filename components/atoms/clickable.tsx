import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { IMotionDivProps } from "./contracts";

const useStyles = makeStyles(() => ({
  root: {
    cursor: "pointer",
  },
}));

export const Clickable = React.forwardRef<HTMLDivElement, IMotionDivProps>(
  (props, ref) => {
    const classes = useStyles();
    return (
      <motion.div
        className={classes.root}
        ref={ref}
        whileHover={{
          scale: 0.95,
          opacity: 0.75,
        }}
        whileTap={{
          scale: 0.9,
          opacity: 0.5,
        }}
        {...props}
      />
    );
  }
);
