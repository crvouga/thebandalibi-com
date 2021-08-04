import { TOP_LEVEL_LINKS } from "@config";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import React, { FC, ReactNode } from "react";
import { NavBarDesktop } from "./nav-bar-desktop";
import { NavBarMobile } from "./nav-bar-mobile";

const gutter = <Box sx={{ width: "100vw", height: "52px" }} />;

export const NavBar: FC<{ logo: ReactNode; breadcrumbs?: ReactNode }> = ({
  logo,
  breadcrumbs,
}) => {
  return (
    <>
      <Hidden smDown implementation="css">
        <NavBarDesktop breadcrumbs={breadcrumbs} logo={logo} />
      </Hidden>

      <Hidden smUp implementation="css">
        <NavBarMobile left={breadcrumbs ?? logo} />
      </Hidden>

      {gutter}
    </>
  );
};
