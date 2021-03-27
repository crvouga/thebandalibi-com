import Button, { ButtonProps } from "@material-ui/core/Button";
import CardActionArea, {
  CardActionAreaProps,
} from "@material-ui/core/CardActionArea";
import Link from "next/link";
import React from "react";

export const CardActionAreaLink = ({
  href,
  ...cardActionAreaProps
}: { href: string } & CardActionAreaProps) => {
  return (
    <Link href={href}>
      <CardActionArea {...cardActionAreaProps} />
    </Link>
  );
};

export const ButtonLink = ({
  href,
  ...props
}: { href: string } & ButtonProps) => {
  return (
    <Link href={href}>
      <Button size="large" {...props} />
    </Link>
  );
};
