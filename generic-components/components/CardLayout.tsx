import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(() => ({
  backdrop: {
    color: "#fff",
    background: [
      `linear-gradient(${[
        `rgba(0, 0, 0, 0)`,
        `rgba(0, 0, 0, 0)`,
        `rgba(0, 0, 0, 1)`,
      ].join(", ")})`,
      "transparent",
    ].join(", "),
  },
}));

export const CardLayout = ({
  background,
  title,
  subtitle,
}: {
  background: React.ReactNode;
  title: string;
  subtitle: string;
}) => {
  const classes = useStyles();

  return (
    <Box position="relative">
      {background}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        padding={2}
        className={classes.backdrop}
      >
        <Typography noWrap variant="h5">
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
      </Box>
    </Box>
  );
};
