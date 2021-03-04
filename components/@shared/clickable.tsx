import { makeStyles } from "@material-ui/core";
import Button, { ButtonProps } from "@material-ui/core/Button";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IMotionDivProps } from "./contracts";

const useStyles = makeStyles(() => ({
  root: {
    cursor: "pointer",
  },
}));

export const Clickable = React.forwardRef<HTMLDivElement, IMotionDivProps>(
  ({ className, ...props }, ref) => {
    const classes = useStyles();
    return (
      <motion.div
        className={clsx(classes.root, className)}
        ref={ref}
        whileHover={{
          scale: 0.95,
          opacity: 0.75,
        }}
        whileTap={{
          scale: 0.9,
          opacity: 0.5,
        }}
        {...props}
      />
    );
  }
);

export const ClickableLink = ({
  href,
  ...MotionDivProps
}: { href: string } & IMotionDivProps) => {
  return (
    <Link href={href}>
      <Clickable {...MotionDivProps} />
    </Link>
  );
};

export const ButtonLink = ({
  href,
  ...props
}: { href: string } & ButtonProps) => {
  return (
    <ClickableLink href={href}>
      <Button size="large" {...props} />
    </ClickableLink>
  );
};
