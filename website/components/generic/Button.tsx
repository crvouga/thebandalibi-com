import MuiButton, { ButtonProps } from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "next/link";
import React from "react";

export const Button = ({
  children,
  href,
  loading = false,
  ...props
}: ButtonProps & { loading?: boolean }) => {
  const child = loading ? (
    <CircularProgress size="1.75em" color="inherit" />
  ) : (
    children
  );

  if (!href) {
    return <MuiButton {...props}>{child}</MuiButton>;
  }

  return (
    <Link href={href}>
      <MuiButton {...props}>{child}</MuiButton>
    </Link>
  );
};
