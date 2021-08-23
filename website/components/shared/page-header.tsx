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
  breadcrumbs: (
    | { href?: string; label: string }
    | { href?: string; label: string }[]
  )[];
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Breadcrumbs sx={{ paddingBottom: 2 }}>
        {breadcrumbs.map((crumb, index) =>
          Array.isArray(crumb) ? null : (
            <Link
              key={`${crumb.href} ${crumb.label}`}
              href={crumb.href}
              color={
                index === breadcrumbs.length - 1 ? "text.primary" : undefined
              }
            >
              {crumb.label}
            </Link>
          )
        )}
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
