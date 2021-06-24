import MuiCardActionArea, {
  CardActionAreaProps,
} from "@material-ui/core/CardActionArea";
import Link from "next/link";
import React from "react";

export const CardActionArea = ({
  href,
  ...props
}: { href?: string } & CardActionAreaProps) => {
  if (href) {
    return (
      <Link href={href}>
        <MuiCardActionArea {...props} />
      </Link>
    );
  }

  return <MuiCardActionArea {...props} />;
};
