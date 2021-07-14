import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { alpha } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const CardLayout = ({
  background,
  title,
  subtitle,
}: {
  background: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
}) => {
  return (
    <Box sx={{ position: "relative" }}>
      {background}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 2,
          color: "#fff",
          background: [
            `linear-gradient(${[
              `rgba(0, 0, 0, 0)`,
              `rgba(0, 0, 0, 0)`,
              `rgba(0, 0, 0, 1)`,
            ].join(", ")})`,
            "transparent",
          ].join(", "),
        }}
      >
        <Typography noWrap variant="h5">
          {title}
        </Typography>
        {typeof subtitle === "string" ? (
          <Typography>{subtitle}</Typography>
        ) : (
          subtitle
        )}
      </Box>
    </Box>
  );
};

export const CardLayoutHeadline = ({
  background,
  headline,
  backgroundColor = "rgba(0, 0, 0, 1)",
}: {
  background: React.ReactNode;
  headline: string;
  backgroundColor?: string;
}) => {
  const theme = useTheme();

  const textColor = theme.palette.getContrastText(backgroundColor);

  return (
    <Box sx={{ position: "relative" }}>
      {background}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: alpha(backgroundColor, 0.66), //`radial-gradient(${backgroundColor}, transparent)`,
        }}
      >
        <Typography align="center" variant="h3" color={textColor}>
          {headline}
        </Typography>
      </Box>
    </Box>
  );
};
