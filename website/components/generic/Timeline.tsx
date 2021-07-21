import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";

export const TimelineItem = ({
  position,
  center,
  primary,
  secondary,
}: {
  position: "left" | "right";
  primary: React.ReactNode;
  secondary: React.ReactNode;
  center: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
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

const TimelineLine = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
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
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <TimelineLine />

      {children}
    </Box>
  );
};
