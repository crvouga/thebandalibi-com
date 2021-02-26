import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import React from "react";

export const SlideUp = React.forwardRef((props: TransitionProps, ref) => (
  <Slide ref={ref} direction="up" {...props} />
));

export const SlideDown = React.forwardRef((props: TransitionProps, ref) => (
  <Slide ref={ref} direction="down" {...props} />
));
