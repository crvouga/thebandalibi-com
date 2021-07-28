import { OpenCartIconButton } from "@components/commerce";
import { Link } from "@components/generic";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";
import { useNavColor } from "./use-nav-color";
import { NavLinks } from "./nav-links";
import { TOP_LEVEL_LINKS } from "@config";

export const NavBarDesktop: FC<{
  logo: ReactNode;
  links: { href: string; label: string }[];
}> = ({ logo, links }) => {
  const { backgroundColor, color } = useNavColor();

  return (
    <>
      <AppBar
        sx={{
          color,
          backgroundColor,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            "& > *": {
              width: `${(1 / 3) * 100}%`,
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              justifyContent: "flex-start",
            }}
          >
            <NavLinks
              links={TOP_LEVEL_LINKS}
              ListProps={{ sx: { display: "flex", flexDirection: "row" } }}
            />
          </Box>

          <Box
            sx={{
              justifyContent: "center",
            }}
          >
            {logo}
          </Box>

          <Box
            sx={{
              justifyContent: "flex-end",
            }}
          >
            <OpenCartIconButton />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
