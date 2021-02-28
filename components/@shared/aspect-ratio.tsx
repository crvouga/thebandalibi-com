import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ReactAspectRatio from "react-aspect-ratio";
import "react-aspect-ratio/aspect-ratio.css";

const useStyles = makeStyles(() => ({
  root: {
    boxSizing: "border-box",
    position: "relative",
    padding: 0,
    margin: 0,
  },

  svg: {
    boxSizing: "border-box",
    width: "100%",
    padding: 0,
    margin: 0,
  },

  wrapper: {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

export const AspectRatio = ({
  ratio,
  children,
  className,
  style,
}: React.PropsWithChildren<{
  style?: {};
  className?: string;
  ratio: [number, number] | number | string;
}>) => {
  const aspectRatio =
    typeof ratio === "string"
      ? ratio
      : typeof ratio === "number"
      ? ratio
      : ratio[0] / ratio[1];

  return (
    <ReactAspectRatio style={style} className={className} ratio={aspectRatio}>
      <div>{children}</div>
    </ReactAspectRatio>
  );
};
