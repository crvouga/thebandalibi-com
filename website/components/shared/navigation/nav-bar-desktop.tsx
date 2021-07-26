import { OpenCartIconButton } from "@components/commerce";
import { Button } from "@components/generic";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";
import { ToggleThemeButton } from "../theme/toggle-theme-button";
import { useNavColor } from "./use-nav-color";

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
            <ToggleThemeButton />
            <OpenCartIconButton />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
