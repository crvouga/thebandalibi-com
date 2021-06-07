import React from "react";
import ReactAspectRatio from "react-aspect-ratio";
import "react-aspect-ratio/aspect-ratio.css";

const toValidRatio = (ratio: [number, number] | number | string) => {
  if (typeof ratio === "string") {
    return ratio;
  }

  if (typeof ratio === "number") {
    return ratio;
  }

  if (Array.isArray(ratio)) {
    return ratio[0] / ratio[1];
  }

  throw new Error(`invalid ratio ${ratio}`);
};

export const AspectRatio = ({
  ratio,
  children,
  className,
  style,
}: {
  className?: string;
  style?: {};
  ratio: [number, number] | number | string;
  children: React.ReactElement;
}) => {
  return (
    <ReactAspectRatio
      style={style}
      className={className}
      ratio={toValidRatio(ratio)}
    >
      {children}
    </ReactAspectRatio>
  );
};
