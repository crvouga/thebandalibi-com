import Box from "@material-ui/core/Box";
import { LoadingLink } from "..";

export const NavigationLinks = ({
  links,
  orientation = "vertical",
}: {
  orientation?: "vertical" | "horizontal";
  links: { pathname: string; label: string }[];
}) => {
  return (
    <Box
      sx={{
        paddingY: 1,
        display: "flex",
        flexDirection: orientation === "vertical" ? "column" : "row",
      }}
    >
      {links.map((link) => (
        <LoadingLink size="large" key={link.pathname} href={link.pathname}>
          {link.label}
        </LoadingLink>
      ))}
    </Box>
  );
};
