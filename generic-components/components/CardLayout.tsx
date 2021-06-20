import React from "react";
import Box from "@material-ui/core/Box";

export const CardLayout = ({
  background,
  content,
}: {
  background: React.ReactNode;
  content: React.ReactNode;
}) => {
  return (
    <Box>
      <Box position="absolute" top={0} left={0} width="100%" height="100%">
        {background}
      </Box>
      <Box>{content}</Box>
    </Box>
  );
};
