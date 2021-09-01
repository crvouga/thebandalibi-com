import { OpenCartIconButton } from "@components/commerce";
import { TOP_LEVEL_LINKS } from "@config";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { NavButtons } from "../nav-links";
import { NavBarDesktop } from "./nav-bar-desktop";
import { NavBarMobile } from "./nav-bar-mobile";
import { OpenNavDrawerButton } from "./nav-drawer";

export const NavBar = ({
  logo,
  breadcrumbs,
}: {
  logo: ReactNode;
  breadcrumbs?: ReactNode;
}) => {
  const router = useRouter();

  const actions = (
    <>
      <OpenCartIconButton sx={{ marginRight: 1 }} />
      {/* <OpenAuthButton /> */}
    </>
  );
  return (
    <>
      <Hidden smDown implementation="css">
        <NavBarDesktop
          left={logo}
          center={
            <NavButtons
              selectedHref={router.pathname}
              links={TOP_LEVEL_LINKS}
              ButtonProps={{ sx: { marginRight: 1 } }}
            />
          }
          right={actions}
        />
      </Hidden>

      <Hidden smUp implementation="css">
        <NavBarMobile
          left={<OpenNavDrawerButton />}
          center={logo}
          right={actions}
        />
      </Hidden>

      <Box sx={{ width: "100vw", height: "52px" }} />

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
