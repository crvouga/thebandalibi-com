import Box from "@material-ui/core/Box";

import React from "react";
import { AppLogo } from "./app-logo";

export const AppLoading = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <AppLogo />
    </Box>
  );
};
