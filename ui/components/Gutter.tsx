import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";

export const Gutter = ({ height = 4 }: { height?: number }) => {
  const theme = useTheme();
  return <Box width="100vw" height={theme.spacing(height)} />;
};
