import { makeStyles } from "@material-ui/core";
import NextLink from "next/link";
import React from "react";

const useStyles = makeStyles(() => ({
  pointer: {
    cursor: "pointer",
  },
}));

export const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const classes = useStyles();
  return (
    <NextLink href={href}>
      <div className={classes.pointer}>{children}</div>
    </NextLink>
  );
};
