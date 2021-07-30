import { OpenCartIconButton } from "@components/commerce";
import { useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import React, { FC, ReactNode } from "react";
import { NavLinks } from "../nav-links";

export const NavBarDesktop: FC<{
  logo: ReactNode;
  links: { href: string; label: string }[];
}> = ({ logo, links }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100vw",
          zIndex: theme.zIndex.appBar,
          backgroundColor: "background.default",
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

        <Divider />
      </Box>
    </>
  );
};
