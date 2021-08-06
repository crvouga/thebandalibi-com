import LoadingButton, {
  LoadingButtonProps,
} from "@material-ui/lab/LoadingButton";
import Link from "next/link";
import React from "react";

export type IButtonProps = LoadingButtonProps;

export const Button = ({ href, ...props }: LoadingButtonProps) => {
  if (href) {
    return (
      <Link passHref href={href}>
        <LoadingButton {...props} />
      </Link>
    );
  }

  return <LoadingButton {...props} />;
};
