import { Link } from "@components/generic";
import { useTheme } from "@material-ui/core";
import List, { ListProps } from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText, {
  ListItemTextProps,
} from "@material-ui/core/ListItemText";
import React from "react";

export const NavLinks = ({
  links,
  ListProps,
  ListItemProps,
  ListItemTextProps,
}: {
  links: { href: string; label: string }[];
  ListProps?: ListProps;
  ListItemProps?: ListItemProps;
  ListItemTextProps?: ListItemTextProps;
}) => {
  const theme = useTheme();
  return (
    <List {...ListProps}>
      {links.map(({ href, label }) => (
        <Link key={`${href}${label}`} href={href} underline="none">
          <ListItem
            //@ts-ignore
            button
            sx={{
              borderRadius: theme.spacing(1),
            }}
            {...ListItemProps}
          >
            <ListItemText
              primary={label}
              primaryTypographyProps={{
                variant: "button",
                align: "center",
                fontSize: "1em",
                fontWeight: "bold",
              }}
              {...ListItemTextProps}
            />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
