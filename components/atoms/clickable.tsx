import { motion } from "framer-motion";
import React from "react";
import { IMotionDivProps } from "./contracts";

export const Clickable = React.forwardRef<HTMLDivElement, IMotionDivProps>(
  (props, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.9 }}
        {...props}
      />
    );
  }
);
