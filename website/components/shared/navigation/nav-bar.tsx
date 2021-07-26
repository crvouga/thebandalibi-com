import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import React, { FC, ReactNode } from "react";
import { NavBarDesktop } from "./nav-bar-desktop";
import { NavBarMobile } from "./nav-bar-mobile";

const gutter = <Box sx={{ width: "100vw", height: "52px" }} />;

export const NavBar: FC<{ logo: ReactNode }> = ({ logo }) => {
  return (
    <>
      <Hidden smDown implementation="css">
        <NavBarDesktop logo={logo} />
      </Hidden>

      <Hidden smUp implementation="css">
        <NavBarMobile logo={logo} />
      </Hidden>

      {gutter}
    </>
  );
};
