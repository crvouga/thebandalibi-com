import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import { IMotionDivProps } from "./contracts";

const useStyles = makeStyles((theme) => ({
  clickable: {
    cursor: "pointer",
  },
  root: {
    padding: theme.spacing(1 / 2),

    width: "33.33%",

    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

const ClickableProps: IMotionDivProps = {
  whileHover: {
    opacity: 0.75,
    scale: 0.95,
  },
  whileTap: {
    opacity: 0.5,
    scale: 0.9,
  },
};

export const GridItem = React.forwardRef<
  HTMLDivElement,
  IMotionDivProps & { clickable?: boolean }
>(({ className, clickable, ...props }, ref) => {
  const classes = useStyles();

  return (
    <motion.div
      ref={ref}
      className={clsx(
        {
          [classes.clickable]: clickable,
        },
        classes.root,
        className
      )}
      {...(clickable ? ClickableProps : {})}
      {...props}
    />
  );
});
