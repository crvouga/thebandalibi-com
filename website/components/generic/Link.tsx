import MuiLink, { LinkProps } from "@material-ui/core/Link";
import NextLink from "next/link";

export const Link = (props: LinkProps) => {
  const { href } = props;

  if (href) {
    return (
      <NextLink href={href}>
        <MuiLink sx={{ cursor: "pointer" }} {...props} />
      </NextLink>
    );
  }

  return <MuiLink {...props} />;
};
