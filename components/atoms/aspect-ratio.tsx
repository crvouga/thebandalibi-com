import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

export type IAspectRatioProps = React.PropsWithChildren<{
  className?: string;
  ratio: [number, number];
}>;

const useStyles = makeStyles(() => ({
  root: {
    boxSizing: "border-box",
    position: "relative",
  },

  svg: {
    boxSizing: "border-box",
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
  const { ratio, children, className } = props;

  const viewBox = [0, 0, ...ratio].join(" ");

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <svg className={classes.svg} viewBox={viewBox} />
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};
