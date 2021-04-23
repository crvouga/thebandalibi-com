import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { routes } from "../../lib/routes";

const SeoHack = () => {
  return (
    <Typography
      variant="h1"
      color="textPrimary"
      style={{
        display: "none",
      }}
    >
      The Band Alibi
    </Typography>
  );
};

export const Logo = () => {
  return (
    <>
      <Link href={routes.landing()}>
        <Typography
          variant="h1"
          color="textPrimary"
          style={{
            userSelect: "none",
            fontSize: "2.8em",
            letterSpacing: "0.12em",
            cursor: "pointer",
          }}
        >
          Alibi
        </Typography>
      </Link>
      <SeoHack />
    </>
  );
};
