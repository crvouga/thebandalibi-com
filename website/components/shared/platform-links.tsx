import { useTheme } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import {
  IUniformGridProps,
  UniformGrid,
  PlatformIcon,
  Link,
} from "@components/generic";

export const PlatformLinks = ({
  links,
  UniformGridProps,
}: {
  links: { label: string; href: string }[];
  UniformGridProps?: Omit<IUniformGridProps, "children">;
}) => {
  const theme = useTheme();
  return (
    <UniformGrid
      ContainerProps={{
        justifyContent: "center",
        alignItems: "center",
      }}
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
          <Tooltip title={label}>
            <PlatformIcon
              style={{
                maxWidth: "100px",
                padding: theme.spacing(2),
                width: "100%",
                height: "100%",
              }}
              platformName={label}
            />
          </Tooltip>
        </Link>
      ))}
    </UniformGrid>
  );
};
