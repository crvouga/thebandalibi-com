import { OpenCartIconButton } from "@components/commerce";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";

export const NavBarDesktop: FC<{
  logo: ReactNode;
  breadcrumbs?: ReactNode;
}> = ({ logo, breadcrumbs }) => {
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
          }}
        >
          <Box
            sx={{
              justifyContent: "flex-start",
            }}
          >
            {logo}
          </Box>

          <Box
            sx={{
              justifyContent: "center",
            }}
          >
            {breadcrumbs}
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
