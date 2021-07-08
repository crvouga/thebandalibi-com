import LoadingButton, {
  LoadingButtonProps,
} from "@material-ui/lab/LoadingButton";
import Link from "next/link";
import React from "react";

export const Button = ({ href, ...props }: LoadingButtonProps) => {
  if (!href) {
    return <LoadingButton {...props} />;
  }

  return (
    <Link href={href}>
      <LoadingButton {...props} />
    </Link>
  );
};
