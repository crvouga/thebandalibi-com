import { makeStyles } from "@material-ui/core/styles";
import React from "react";
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
    boxSizing: "border-box",
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
    <div className={classes.root} {...MotionDivProps}>
      <svg className={classes.svg} viewBox={viewBox} />
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};
