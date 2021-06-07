import MuiButton, { ButtonProps } from "@material-ui/core/Button";
import Link from "next/link";
import React from "react";

export const Button = ({ href, ...props }: ButtonProps) => {
  if (!href) {
    return <Button {...props} />;
  }

  return (
    <Link href={href}>
      <MuiButton {...props} />
    </Link>
  );
};
