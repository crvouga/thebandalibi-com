import LoadingButton, {
  LoadingButtonProps,
} from "@material-ui/lab/LoadingButton";
import MuiLink from "@material-ui/core/Link";
import Link from "next/link";
import React from "react";

export type IButtonProps = LoadingButtonProps & { doesOpenNewTab?: boolean };

export const Button = ({ href, doesOpenNewTab, ...props }: IButtonProps) => {
  if (href && !doesOpenNewTab) {
    return (
      <Link passHref href={href}>
        <LoadingButton {...props} />
      </Link>
    );
  }

  if (href && doesOpenNewTab) {
    return (
      <MuiLink
        underline="none"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LoadingButton {...props} />
      </MuiLink>
    );
  }

  return <LoadingButton {...props} />;
};
