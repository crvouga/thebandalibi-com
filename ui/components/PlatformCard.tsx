import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { AspectRatio } from "./AspectRatio";
import { PlatformIcon } from "./Icons";

const SIZE = "36px";

export const PlatformCard = ({ name }: { name: string }) => {
  const theme = useTheme();
  return (
    <AspectRatio ratio={1}>
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <PlatformIcon
          style={{
            width: SIZE,
            height: SIZE,
            margin: theme.spacing(1),
          }}
          platformName={name}
        />

        <Typography style={{ fontSize: "1.6em" }} align="center">
          {name}
        </Typography>
      </Box>
    </AspectRatio>
  );
};
