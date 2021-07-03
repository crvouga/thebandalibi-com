import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { AspectRatio } from "./AspectRatio";
import { PlatformIcon } from "./PlatformIcon";

const SIZE = "36px";

export const PlatformCard = ({ name }: { name: string }) => {
  return (
    <AspectRatio ratio={1}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box margin={1}>
          <PlatformIcon
            style={{
              width: SIZE,
              height: SIZE,
            }}
            platformName={name}
          />
        </Box>

        <Typography style={{ fontSize: "1.6em" }} align="center">
          {name}
        </Typography>
      </Box>
    </AspectRatio>
  );
};
