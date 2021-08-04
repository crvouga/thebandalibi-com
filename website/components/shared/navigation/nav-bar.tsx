import { TOP_LEVEL_LINKS } from "@config";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import React, { FC, ReactNode } from "react";
import { NavLinks } from "../nav-links";
import { NavBarDesktop } from "./nav-bar-desktop";
import { NavBarMobile } from "./nav-bar-mobile";
import { OpenNavDrawerButton } from "./nav-drawer";

const gutter = <Box sx={{ width: "100vw", height: "52px" }} />;

export const NavBar: FC<{ logo: ReactNode; breadcrumbs?: ReactNode }> = ({
  logo,
  breadcrumbs,
}) => {
  return (
    <>
      <Hidden smDown implementation="css">
        <NavBarDesktop
          left={logo}
          center={
            <NavLinks
              ListProps={{ sx: { display: "flex", flexDirection: "row" } }}
              links={TOP_LEVEL_LINKS}
            />
          }
        />
      </Hidden>

      <Hidden smUp implementation="css">
        <NavBarMobile left={<OpenNavDrawerButton />} center={logo} />
      </Hidden>

      {gutter}

      {breadcrumbs && <Container sx={{ p: 2 }}>{breadcrumbs}</Container>}
    </>
  );
};
