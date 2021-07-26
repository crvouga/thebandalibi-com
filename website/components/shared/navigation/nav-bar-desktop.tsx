import { OpenCartIconButton } from "@components/commerce";
import { useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";
import { NAVIGATION_LINKS } from "./constants";
import { NavLinks } from "./nav-links";

export const NavBarDesktop: FC<{ logo: ReactNode }> = ({ logo }) => {
  const theme = useTheme();

  const backgroundColor = theme.palette.primary.main;
  const color = theme.palette.getContrastText(backgroundColor);

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
            <NavLinks orientation="horizontal" links={NAVIGATION_LINKS} />
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
