import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import React from "react";

export const LandingPageSection = ({
  title,
  action,
  children,
}: {
  title: React.ReactNode;
  action: React.ReactNode;
  children: React.ReactChild;
}) => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      marginBottom={2}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingBottom={1}
        >
          {title}
          {action}
        </Box>
      </Container>
      <Container disableGutters>{children}</Container>
    </Box>
  );
};
