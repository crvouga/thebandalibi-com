import React from "react";
import { makeStyles } from "@material-ui/core/styles";

type IAspectRatioProps = React.PropsWithChildren<{
  ratio: [number, number];
}>;

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
  const { ratio, children } = props;

  const viewBox = [0, 0, ...ratio].join(" ");

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <svg className={classes.svg} viewBox={viewBox} />
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};
