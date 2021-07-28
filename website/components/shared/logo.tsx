import { Image, Link } from "@components/generic";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import { ROUTES } from "../../config/routes";

import classes from "./logo.module.css";

export const Logo = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "7em" }}>
      <Link href={ROUTES.landing()}>
        <Image
          aspectRatio={3}
          src="https://fontmeme.com/permalink/210726/1f3f8a356c3ad5d62e5c561aeff152da.png"
          alt="alibi"
          className={theme.palette.mode === "dark" ? classes.invert : undefined}
        />
      </Link>
    </Box>
  );
};
