import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@components/generic";

export const LandingPageSection = ({
  title,
  action,
  content,
}: {
  title: string;
  action: {
    href: string;
    label: string;
  };
  content: React.ReactChild;
}) => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      marginBottom={4}
    >
      <Box width="100vw">
        <Container>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h2">{title}</Typography>

            <Button size="large" href={action.href}>
              {action.label}
            </Button>
          </Box>
        </Container>
      </Box>
      <Container disableGutters>{content}</Container>
    </Box>
  );
};
