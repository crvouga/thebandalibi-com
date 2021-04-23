import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { routes } from "../../lib/routes";

export const Logo = () => {
  return (
    <Link href={routes.landing()}>
      <Typography
        variant="h1"
        color="textPrimary"
        style={{
          userSelect: "none",
          fontSize: "3em",
          letterSpacing: "0.12em",
          cursor: "pointer",
        }}
      >
        Alibi
      </Typography>
    </Link>
  );
};
