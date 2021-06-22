import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(() => ({
  filter: {
    filter: "brightness(40%)",
  },
  backdrop: {
    background: `
    linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),
        transparent`,
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
      <Box>{background}</Box>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Box padding={2} color="#fff" className={classes.backdrop}>
          <Typography noWrap variant="h5">
            {title}
          </Typography>
          <Typography>{subtitle}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
