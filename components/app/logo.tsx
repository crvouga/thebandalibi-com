import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { routes } from "../../lib/routes";

export const Logo = ({ settings }: { settings: ISettings }) => {
  return (
    <Link href={routes.landing()}>
      <Typography
        variant="h1"
        color="textPrimary"
        style={{
          userSelect: "none",
          fontSize: "3.33em",
          letterSpacing: "0.1em",
          cursor: "pointer",
        }}
      >
        {settings.band.name}
      </Typography>
    </Link>
  );
};
