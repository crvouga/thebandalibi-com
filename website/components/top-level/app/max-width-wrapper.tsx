import { APP_MAX_WIDTH } from "@config";
import Box from "@material-ui/core/Box";
import React from "react";

export const MaxWidthWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <Box
      sx={{
        position: "relative",
        margin: "auto",
        maxWidth: APP_MAX_WIDTH,
      }}
    >
      {children}
    </Box>
  );
};
