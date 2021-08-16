import { Link } from "@components/generic";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const PageHeader = ({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs: { href?: string; label: string }[];
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Breadcrumbs>
        {breadcrumbs.map(({ label, href }, index) => (
          <Link
            key={`${href} ${label}`}
            href={href}
            color={
              index === breadcrumbs.length - 1 ? "text.primary" : undefined
            }
          >
            {label}
          </Link>
        ))}
      </Breadcrumbs>

      <Typography variant="h1" align="center">
        {title}
      </Typography>

      <Typography variant="h4" align="center" color="text.secondary">
        {subtitle}
      </Typography>
    </Box>
  );
};
