import MuiCardActionArea, {
  CardActionAreaProps,
} from "@material-ui/core/CardActionArea";
import MuiLink from "@material-ui/core/Link";
import NextLink from "next/link";
import React from "react";

type IProps = {
  href?: string;
  doesOpenNewTab?: boolean;
} & CardActionAreaProps;

export const CardActionArea = React.forwardRef<any, IProps>(
  ({ href, doesOpenNewTab, ...props }, ref) => {
    if (href && !doesOpenNewTab) {
      return (
        <NextLink passHref href={href}>
          <MuiCardActionArea ref={ref} {...props} />
        </NextLink>
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
          <MuiCardActionArea ref={ref} {...props} />
        </MuiLink>
      );
    }

    return <MuiCardActionArea ref={ref} {...props} />;
  }
);
