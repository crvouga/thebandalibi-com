import { CardActionArea } from "@components/generic";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { alpha } from "@material-ui/core/styles";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
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
              `rgba(0, 0, 0, 0.8)`,
            ].join(", ")})`,
            "transparent",
          ].join(", "),
        }}
      >
        <Typography noWrap variant="h4">
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
  title,
  titleTypographyProps,
  subtitle,
  backgroundColor = "rgba(0, 0, 0, 1)",
  href,
}: {
  href?: string;
  background: React.ReactNode;
  title: string;
  titleTypographyProps?: TypographyProps;
  subtitle?: string;
  backgroundColor?: string;
}) => {
  const theme = useTheme();

  const textColor = theme.palette.getContrastText(backgroundColor);

  const component = (
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
          alignItems: "center",
          justifyContent: "center",
          background: alpha(backgroundColor, 0.6),
        }}
      >
        <Typography
          align="center"
          variant="h1"
          color={textColor}
          {...titleTypographyProps}
        >
          {title}
        </Typography>
        <Typography
          align="center"
          variant="button"
          fontWeight="bold"
          color={textColor}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );

  if (href) {
    return <CardActionArea href={href}>{component}</CardActionArea>;
  }

  return component;
};
