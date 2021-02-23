import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { motion } from "framer-motion";
import { IMotionDivProps } from "./contracts";

type IAspectRatioProps = React.PropsWithChildren<{
  ratio: [number, number];
}> &
  IMotionDivProps;

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },

  svg: {
    width: "100%",
  },

  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

export const AspectRatio = (props: IAspectRatioProps) => {
  const { ratio, children, ...MotionDivProps } = props;

  const viewBox = [0, 0, ...ratio].join(" ");

  const classes = useStyles();

  return (
    <motion.div className={classes.root} {...MotionDivProps}>
      <svg className={classes.svg} viewBox={viewBox} />
      <div className={classes.wrapper}>{children}</div>
    </motion.div>
  );
};
