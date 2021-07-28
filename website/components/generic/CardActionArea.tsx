import MuiCardActionArea, {
  CardActionAreaProps,
} from "@material-ui/core/CardActionArea";
import Link from "next/link";
import React from "react";

type IProps = { href?: string } & CardActionAreaProps;

export const CardActionArea = React.forwardRef<any, IProps>(
  ({ href, ...props }, ref) => {
    if (href) {
      return (
        <Link href={href}>
          <MuiCardActionArea ref={ref} {...props} />
        </Link>
      );
    }

    return <MuiCardActionArea ref={ref} {...props} />;
  }
);
