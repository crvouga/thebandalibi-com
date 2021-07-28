import { OpenCartIconButton } from "@components/commerce";
import { useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";
import { NavLinks } from "./nav-links";
import { useNavColor } from "./use-nav-color";

export const NavBarDesktop: FC<{
  logo: ReactNode;
  links: { href: string; label: string }[];
}> = ({ logo, links }) => {
  const { backgroundColor, color } = useNavColor();
  const theme = useTheme();
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
            width: "100%",
            maxWidth: theme.breakpoints.values.xl,
            margin: "auto",
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
              links={links}
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
