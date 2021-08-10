import { OpenCartIconButton } from "@components/commerce";
import { Button } from "@components/generic";
import { TOP_LEVEL_LINKS } from "@config";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { useRouter } from "next/router";
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
  const router = useRouter();

  return (
    <>
      <Hidden smDown implementation="css">
        <NavBarDesktop
          left={logo}
          center={
            <NavLinks
              selectedHref={router.pathname}
              ListProps={{ sx: { display: "flex", flexDirection: "row" } }}
              links={TOP_LEVEL_LINKS}
            />
          }
          right={
            <>
              <Button>Sign Up</Button>
              <OpenCartIconButton />
            </>
          }
        />
      </Hidden>

      <Hidden smUp implementation="css">
        <NavBarMobile
          left={<OpenNavDrawerButton />}
          center={logo}
          right={
            <>
              <Button size="small">Sign Up</Button>
              <OpenCartIconButton size="small" />
            </>
          }
        />
      </Hidden>

      {gutter}

      {breadcrumbs && (
        <Container
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {breadcrumbs}
        </Container>
      )}
    </>
  );
};
