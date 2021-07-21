import { useTheme } from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";

import React from "react";

export const TimelineItem = ({
  position,
  center,
  primary,
  secondary,
  sx,
}: {
  sx?: BoxProps["sx"];
  position: "left" | "right";
  primary: React.ReactNode;
  secondary: React.ReactNode;
  center: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        ...sx,
        display: "flex",
        flexDirection: position === "left" ? "row-reverse" : "row",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: position === "left" ? "row" : "row-reverse",
          textAlign: position === "left" ? "left" : "right",
        }}
      >
        {secondary}
      </Box>

      <Box>{center}</Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: position === "left" ? "row-reverse" : "row",
          textAlign: position === "left" ? "right" : "left",
        }}
      >
        {primary}
      </Box>
    </Box>
  );
};

export const TimelineLine = ({ sx }: { sx?: BoxProps["sx"] }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...sx,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "3px",
          height: "100%",
          backgroundColor: theme.palette.divider,
        }}
      />
    </Box>
  );
};

export const TimelineContainer = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: BoxProps["sx"];
}) => {
  return (
    <Box
      sx={{
        ...sx,
        width: "100%",
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
};
