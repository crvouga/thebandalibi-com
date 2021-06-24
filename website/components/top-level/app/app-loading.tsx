import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

export const AppLoading = () => {
  return (
    <Box
      width="100vw"
      height="66.66vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="text.primary"
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};
