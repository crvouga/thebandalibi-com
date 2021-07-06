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
      ? "1.75em"
      : props.size === "medium"
      ? "1.5em"
      : "1.3em";

  const child = (
    <Box position="relative">
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Fade in={loading}>
          <CircularProgress size={size} color="inherit" />
        </Fade>
      </Box>
      <Fade in={!loading}>
        <Box>{children}</Box>
      </Fade>
    </Box>
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
