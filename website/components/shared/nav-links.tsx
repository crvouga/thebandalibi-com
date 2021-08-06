import { Button, Link } from "@components/generic";
import { useTheme } from "@material-ui/core";
import ButtonGroup, { ButtonGroupProps } from "@material-ui/core/ButtonGroup";
import List, { ListProps } from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon, {
  ListItemIconProps,
} from "@material-ui/core/ListItemIcon";
import ListItemText, {
  ListItemTextProps,
} from "@material-ui/core/ListItemText";
import React from "react";

export const NavLinks = ({
  links,
  ListProps,
  ListItemProps,
  ListItemIconProps,
  ListItemTextProps,
}: {
  links: { icon?: React.ReactNode; href: string; label: string }[];
  ListProps?: ListProps;
  ListItemProps?: ListItemProps;
  ListItemIconProps?: ListItemIconProps;
  ListItemTextProps?: ListItemTextProps;
}) => {
  const theme = useTheme();
  return (
    <List disablePadding {...ListProps}>
      {links.map(({ icon, href, label }) => (
        <Link key={`${href}${label}`} href={href} underline="none">
          <ListItem
            //@ts-ignore
            button
            sx={{
              borderRadius: theme.spacing(1),
            }}
            {...ListItemProps}
          >
            {icon && <ListItemIcon {...ListItemIconProps}>{icon}</ListItemIcon>}

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

export const NavButtons = ({
  links,
  ButtonGroupProps,
}: {
  links: { icon?: React.ReactNode; href: string; label: string }[];
  ButtonGroupProps?: ButtonGroupProps;
}) => {
  return (
    <ButtonGroup {...ButtonGroupProps}>
      {links.map(({ href, label }) => (
        <Button key={`${href}${label}`} href={href}>
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
};
