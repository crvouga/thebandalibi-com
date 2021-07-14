import Box from "@material-ui/core/Box";
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
}: {
  background: React.ReactNode;
  headline: string;
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.66)",
        }}
      >
        <Typography variant="h3" color="white">
          {headline}
        </Typography>
      </Box>
    </Box>
  );
};
