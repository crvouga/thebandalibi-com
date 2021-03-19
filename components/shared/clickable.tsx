import { makeStyles } from "@material-ui/core";
import Button, { ButtonProps } from "@material-ui/core/Button";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles(() => ({
  clickable: {
    cursor: "pointer",
    transition: `transform 250ms`,
    "&:hover": {
      transform: `scale(0.95)`,
      opacity: 0.95,
    },
    "&:active": {
      transform: `scale(0.9)`,
      opacity: 0.9,
    },
  },
}));

export const Clickable = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.clickable, className)} ref={ref} {...props} />
  );
});

export const ClickableLink = ({
  href,
  ...MotionDivProps
}: { href: string } & React.HTMLAttributes<HTMLDivElement>) => {
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
