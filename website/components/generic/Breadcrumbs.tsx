import { Link } from "@components/generic";
import MuiBreadcrumbs from "@material-ui/core/Breadcrumbs";
import React from "react";

export const Breadcrumbs = ({
  links,
}: {
  links: { href?: string; label: string }[];
}) => {
  return (
    <MuiBreadcrumbs>
      {links.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </MuiBreadcrumbs>
  );
};
