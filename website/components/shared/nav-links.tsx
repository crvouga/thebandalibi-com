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
import { useRouter } from "next/router";
import React from "react";

export type INavLinksProps = {
  links: {
    icon?: React.ReactNode;
    href: string;
    label: string;
  }[];
  ListProps?: ListProps;
  ListItemProps?: ListItemProps;
  ListItemIconProps?: ListItemIconProps;
  ListItemTextProps?: ListItemTextProps;
};

export const NavLinks = ({
  links,
  ListProps,
  ListItemProps,
  ListItemIconProps,
  ListItemTextProps,
}: INavLinksProps) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <List disablePadding {...ListProps}>
      {links.map(({ icon, href, label }) => (
        <Link key={`${href}${label}`} href={href} underline="none">
          <ListItem
            //@ts-ignore
            button
            sx={{
              borderBottom:
                router.pathname === href ? "1px solid white" : undefined,
            }}
            {...ListItemProps}
          >
            {icon && <ListItemIcon {...ListItemIconProps}>{icon}</ListItemIcon>}

            <ListItemText
              primary={label}
              primaryTypographyProps={{
                variant: "button",
                align: "center",
                fontWeight: router.pathname === href ? "bold" : undefined,
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
