import MuiCardActionArea, {
  CardActionAreaProps,
} from "@material-ui/core/CardActionArea";
import Link from "next/link";
import React from "react";

export const CardActionArea = ({
  href,
  ...props
}: { href: string } & CardActionAreaProps) => {
  return (
    <Link href={href}>
      <MuiCardActionArea {...props} />
    </Link>
  );
};
