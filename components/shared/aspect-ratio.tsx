import React from "react";
import ReactAspectRatio from "react-aspect-ratio";
import "react-aspect-ratio/aspect-ratio.css";

export const AspectRatio = ({
  ratio,
  children,
  className,
  style,
}: {
  style?: {};
  className?: string;
  ratio: [number, number] | number | string;
  children: React.ReactElement;
}) => {
  const aspectRatio =
    typeof ratio === "string"
      ? ratio
      : typeof ratio === "number"
      ? ratio
      : Array.isArray(ratio)
      ? ratio[0] / ratio[1]
      : 1;

  return (
    <ReactAspectRatio style={style} className={className} ratio={aspectRatio}>
      {children}
    </ReactAspectRatio>
  );
};
