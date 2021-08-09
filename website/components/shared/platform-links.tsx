import { PlatformIcon } from "@components/generic";
import { Tooltip } from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import React from "react";

export const PlatformIconLinks = ({
  links,
  ItemProps,
  ContainerProps,
}: {
  links: { label: string; href: string }[];
  ContainerProps?: BoxProps;
  ItemProps?: BoxProps;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
      {...ContainerProps}
    >
      {links.map(({ href, label }) => (
        <Link href={href} key={`${href}${label}`} target="_blank">
          <Box sx={{ width: "3rem", marginX: 1.5 }} {...ItemProps}>
            <Tooltip title={label}>
              <PlatformIcon
                style={{ width: "100%", height: "100%" }}
                platformName={label}
              />
            </Tooltip>
          </Box>
        </Link>
      ))}
    </Box>
  );
};
