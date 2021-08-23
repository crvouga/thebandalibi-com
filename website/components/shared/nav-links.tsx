import { Button, IButtonProps, Link } from "@components/generic";
import ButtonGroup, { ButtonGroupProps } from "@material-ui/core/ButtonGroup";
import List, { ListProps } from "@material-ui/core/List";
import Box, { BoxProps } from "@material-ui/core/Box";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon, {
  ListItemIconProps,
} from "@material-ui/core/ListItemIcon";
import ListItemText, {
  ListItemTextProps,
} from "@material-ui/core/ListItemText";
import React from "react";

export type INavLinksProps = {
  links: {
    icon?: React.ReactNode;
    doesOpenNewTab?: boolean;
    href: string;
    label: string;
  }[];
  selectedHref?: string;
};

export const NavLinks = ({
  links,
  selectedHref,
  ListProps,
  ListItemProps,
  ListItemIconProps,
  ListItemTextProps,
}: INavLinksProps & {
  ListProps?: ListProps;
  ListItemProps?: ListItemProps;
  ListItemIconProps?: ListItemIconProps;
  ListItemTextProps?: ListItemTextProps;
}) => {
  return (
    <List disablePadding {...ListProps}>
      {links.map(({ icon, href, label, doesOpenNewTab = false }) => (
        <Link
          key={`${href}${label}`}
          href={href}
          underline="none"
          {...(doesOpenNewTab
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <ListItem
            //@ts-ignore
            button
            selected={selectedHref === href}
            {...ListItemProps}
          >
            {icon && <ListItemIcon {...ListItemIconProps}>{icon}</ListItemIcon>}

            <ListItemText
              primary={label}
              primaryTypographyProps={{
                variant: "button",
                align: "center",
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
  selectedHref,
  BoxProps,
  ButtonProps,
}: INavLinksProps & {
  BoxProps?: BoxProps;
  ButtonProps?: IButtonProps;
}) => {
  return (
    <Box {...BoxProps} sx={{ display: "flex", ...BoxProps?.sx }}>
      {links.map(({ href, label }) => (
        <Button
          key={`${href}${label}`}
          href={href}
          {...ButtonProps}
          color="inherit"
          disabled={selectedHref === href}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
};
