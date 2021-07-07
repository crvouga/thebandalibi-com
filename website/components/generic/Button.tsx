import MuiButton, { ButtonProps } from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import React from "react";
import { Fade } from "@material-ui/core";

export const Button = ({
  children,
  href,
  loading = false,
  ...props
}: ButtonProps & { loading?: boolean }) => {
  const size =
    props.size === "large"
      ? "1.2em"
      : props.size === "medium"
      ? "1em"
      : "0.8em";

  const defaultProps: ButtonProps = {
    disabled: loading,
    style: {
      fontSize: size,
      position: "relative" as "relative",
    },
  };

  const child = loading ? (
    <Box
      component="span"
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress size={size} color="inherit" />
    </Box>
  ) : (
    children
  );

  if (!href) {
    return (
      <MuiButton {...defaultProps} {...props}>
        {child}
      </MuiButton>
    );
  }

  return (
    <Link href={href}>
      <MuiButton {...defaultProps} {...props}>
        {child}
      </MuiButton>
    </Link>
  );
};
