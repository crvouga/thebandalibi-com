import { OpenCartIconButton } from "@components/commerce";
import { Button, Link } from "@components/generic";
import { useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";

export const NavBarDesktop: FC<{
  logo: ReactNode;
  links: { href: string; label: string }[];
}> = ({ logo, links }) => {
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
            {links.map(({ href, label }) => (
              <Button color="inherit" key={href} href={href}>
                {label}
              </Button>
            ))}
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
