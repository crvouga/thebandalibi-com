import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import React, { ElementType } from "react";
import { IMotionDivProps } from "./contracts";

export const MotionTypography = <T extends ElementType<any>>(
  props: IMotionDivProps & TypographyProps<T>
) => {
  return <Typography component={motion.div} {...props} />;
};
