import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";

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
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 4,
      }}
    >
      <Container>
        <Link href={action.href}>
          <Typography variant="h2">{title}</Typography>
        </Link>
      </Container>

      <Container disableGutters>{content}</Container>
    </Box>
  );
};
