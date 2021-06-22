import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";

export const NavigationLink = ({
  pathname,
  label,
  selected = false,
}: {
  label: string;
  pathname: string;
  selected?: boolean;
}) => {
  return (
    <Link key={pathname} href={pathname}>
      <ListItem button selected={selected}>
        <ListItemText
          primaryTypographyProps={{ align: "center", variant: "button" }}
          primary={label}
        />
      </ListItem>
    </Link>
  );
};

export const NavigationLinks = ({
  links,
  selectedPathname,
  orientation = "vertical",
}: {
  orientation?: "vertical" | "horizontal";
  selectedPathname?: string;
  links: { pathname: string; label: string }[];
}) => {
  return (
    <List
      style={{
        display: "flex",
        flexDirection: orientation === "vertical" ? "column" : "row",
      }}
    >
      {links.map((link) => (
        <NavigationLink
          selected={link.pathname === selectedPathname}
          {...link}
        />
      ))}
    </List>
  );
};
