import {
  IUniformGridProps,
  PlatformIcon,
  UniformGrid,
} from "@components/generic";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/core";

import React from "react";

export const PlatformLinks = ({
  links,
  UniformGridProps,
}: {
  links: { label: string; href: string }[];
  UniformGridProps?: Omit<IUniformGridProps, "children">;
}) => {
  const theme = useTheme();

  const platformIconStyles = {
    maxWidth: "100px",
    padding: theme.spacing(2),
    width: "100%",
    height: "100%",
  };

  return (
    <UniformGrid
      ItemProps={{
        xs: 4,
        sm: 3,
        md: 2,
        lg: 1,
      }}
      {...UniformGridProps}
    >
      {links.map(({ href, label }) => (
        <Link href={href} key={`${href}${label}`}>
          <PlatformIcon style={platformIconStyles} platformName={label} />
        </Link>
      ))}
    </UniformGrid>
  );
};
