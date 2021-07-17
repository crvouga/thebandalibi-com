import MuiLink, { LinkProps } from "@material-ui/core/Link";
import NextLink from "next/link";

export const Link = ({ href, ...props }: LinkProps) => {
  if (href) {
    return (
      <NextLink href={href}>
        <MuiLink sx={{ cursor: "pointer" }} {...props} />
      </NextLink>
    );
  }

  return <MuiLink {...props} />;
};
